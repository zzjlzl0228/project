var vid = '';
var login_sms_auth=false;
function getRand(){return 'm'+Math.random().toString().substr(2);}
//显示验证码
function showcaptcha(Login) {
	ischeckcaptcha=false;
	if(Dd('captchapng'+Login).style.display=='none') {Dd('captchapng'+Login).style.display='';}
	if(Dd('captchapng'+Login).src.indexOf('loading.gif') != -1) {
		rnd=getRand();
		Dd('rnd').value=rnd;
		Dd('captchapng'+Login).src=DTPath+'api/captchas.png.php?rnd='+rnd;
	}
	if(Dd('captcha'+Login).value=='点击显示') {
		Dd('captcha'+Login).value='';
	}
}
//重新载入验证码
function reloadcaptcha(Login) {
	ischeckcaptcha=false;
	rnd=getRand();
	Dd('rnd').value=rnd;
	Dd('captchapng'+Login).src = DTPath+'api/captchas.png.php?rnd='+rnd;
	Dd('ccaptcha'+Login).innerHTML = '';
	Dd('captcha'+Login).value = '';
}
//验证码检查
function checkcaptcha(s,Login) {
	if(ischeckcaptcha){return;}else{ischeckcaptcha=true;}
	if(!is_captcha(s) || s.length != 4)
	{
	 ischeckcaptcha=false;
	 return;
	}
	$.ajax({
		type : "get",
		async:false,
		url : DTPath+'member/m.reglogin.php?action=checkcaptcha&captcha='+s+'&rnd='+rnd,
		dataType : "jsonp",
		jsonp: "callbackparam",
		jsonpCallback:"_checkcaptcha",
		success : function(json){
			if(json == '0') {
				Dd('ccaptcha'+Login).innerHTML = '&nbsp;<img src="'+SKPath+'image/check_right.gif" align="absmiddle"/>';
			} else {
				ischeckcaptcha=false;
				Dd('captcha'+Login).focus;
				Dd('ccaptcha'+Login).innerHTML = '&nbsp;<img src="'+SKPath+'image/check_error.gif" align="absmiddle"/>';
			}
		},
		error:function(){}
	});
	
}
function closeLoginBox(){
	$("#LoginDialogBg",window.parent.document).remove();
	$("#LoginDialog",window.parent.document).remove();
}
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g, "");
}
//手机号验证
function validator(id) {
	vid = id;
	idVal=trim(Dd(id).value);
	if(idVal.length<3)return true;

	$.ajax({
	type : "get",
	async:false,
	url : DTPath+'member/m.reglogin.php?action=checkmobile&value='+idVal,
	dataType : "jsonp",
	jsonp: "callbackparam",
	jsonpCallback:"_validator",
	success : function(json){
		Dd('d'+vid).innerHTML = json ? '<img src="'+SKPath+'image/check_error.gif" align="absmiddle"/> '+json : '<img src="'+SKPath+'image/check_right.gif" align="absmiddle"/> ';
	},
	error:function(){}
	});
}
function err_msg(str, id) {
	Dd('d'+id).innerHTML = '<img src="'+SKPath+'image/check_'+(str ? 'error' : 'right')+'.gif" align="absmiddle"/> '+str;
}
//密码级别
function passwordLevel(password) {
  var Modes = 0;
  for (i = 0; i < password.length; i++) {
    Modes |= CharMode(password.charCodeAt(i));
  }
  return bitTotal(Modes);
  function CharMode(iN) {
    if (iN >= 48 && iN <= 57)
      return 1;
    if (iN >= 65 && iN <= 90)
      return 2;
    if ((iN >= 97 && iN <= 122) || (iN >= 65 && iN <= 90))
      return 4;
    else
      return 8;
  }
  function bitTotal(num) {
    modes = 0;
    for (i = 0; i < 4; i++) {
      if (num & 1) modes++;
      num >>>= 1;
    }
    return modes;
  }
}
//密码检查
function validate(type) {
	pasVal=trim(Dd('password').value);
	if(pasVal.length<6)
	{
		err_msg('密码长度至少6位', 'password');
	}
	else
	{
		err_msg('', 'password');
	}
	if(passwordLevel(pasVal)<3)
	{
		err_msg('包含数字大小写字母', 'password');
	}
	else
	{
		err_msg('', 'password');
	}
	if(type == 'cpassword') {
		if(Dd('cpassword').value != pasVal) {
			err_msg('两次输入密码不一致', type);
		} else {
			err_msg('', type);
		}
	}
}
//选项卡切换
function tab(type) {
	$(".tab").find("li").removeClass("current");
	if(type) {
		Dh('RegBody');
		Ds('LoginBody');
		$(".tab").find("li:first").addClass("current");
	} else {
		Dh('LoginBody');
		Ds('RegBody');
		$(".tab").find("li:last").addClass("current");
	}
}
function Df(ID) {
	Dd(ID).focus();
}
//注册
function RegCheck() 
{
	postData="submitData=1&action="+$("#RegForm").find("#action").val();
	// postData+="&post[regid]="+$("input[name='post[regid]']:checked").val();
	postData+="&post[regid]=9";
	var f,p;
	f = 'captcha';
	if(!is_captcha(Dd(f).value)) {
		Dmsg('&nbsp;', f);
		return false;
	}
	postData+="&captcha="+$('#captcha').val();
	postData+="&rnd="+$('#rnd').val();
	f = 'mobile';
	if(Dd(f).value =='') {
		err_msg('请填写手机号', f);
		Df(f);
		return false;
	}
	if(Dd('d'+f).innerHTML.indexOf('error') != -1) {
		Df(f);
		return false;
	}
	postData+="&post[mobile]="+$('#mobile').val();
	
	f = 'mobilecode';
	if(!Dd(f).value.match(/^[0-9]{6}$/)) {
		Dmsg('请填写验证码', f);
		return false;
	}
	postData+="&post[mobilecode]="+$('#mobilecode').val();
	
	f = 'password';
	if(Dd(f).value.length < 6) {
		err_msg('请填写会员登录密码', f);
		Df(f);
		return false;
	}
	if(passwordLevel(Dd(f).value)<3)
	{
		err_msg('应含数字大小写字母', f);
		Df(f);
		return false;
	}
	if(Dd('d'+f).innerHTML.indexOf('error') != -1) {
		Df(f);
		return false;
	}
	f = 'cpassword';
	if(Dd(f).value == '') {
		err_msg('请重复输入密码', f);
		Df(f);
		return false;
	}
	if(Dd('password').value != Dd(f).value) {
		err_msg('两次输入密码不一致', f);
		Df(f);
		return false;
	}	
	postData+="&post[password]="+$('#password').val();
	
	$.ajax({
		type : "get",
		async:false,
		url : DTPath+'member/m.reglogin.php?'+postData,
		dataType : "jsonp",
		jsonp: "callbackparam",
		jsonpCallback:"_userReg",
		success : function(json){
			if(json=='ok')
			{
				alert('恭喜您注册成功！');
				var murl=window.parent.location.href;
				if(murl.indexOf("?")!=-1){
				window.parent.location=window.parent.location+"&rnd="+Math.random();
				}else{
				window.parent.location=window.parent.location+"?rnd="+Math.random();
				}
			}
			else
			{
				alert(json);
			}
		},
		error:function(){}
	});
}
//登录
function LoginCheck() {
	setTimeout( function(){
		loginsend();
	}, 100);
}
function loginsend(){
	postData="submitData=1&action="+$("#LoginForm").find("#action").val();
	var f,p;
	f = 'username';
	if(Dd(f).value == '') 
	{
		err_msg('不能为空', f);
		Df(f);
		return false;
	}
	postData+="&username="+$('#username').val();
	f = 'lpassword';
	if(Dd(f).value.length < 6) {
		err_msg('不能为空', f);
		Df(f);
		return false;
	}
	postData+="&password="+$('#lpassword').val();
	if(!is_captcha(Dd('captchaL').value)) {
		alert('请填写验证码');
		Dd('captchaL').focus();
		return false;
	}
	if(login_sms_auth) {
		f = 'lmobilecode';
		if(!Dd(f).value.match(/^[0-9]{6}$/)) {
			Dmsg('请填写手机验证码', f);
			return false;
		}
		postData+="&mobilecode="+$('#lmobilecode').val();
	}
	postData+="&captcha="+$('#captchaL').val();
	postData+="&rnd="+$('#rnd').val();
	
	$.ajax({
		type : "post",
		async:false,
		url : DTPath+'member/m.reglogin.php?'+postData,
		dataType : "jsonp",
		jsonp: "callbackparam",
		jsonpCallback:"_userLogin",
		success : function(json){
			if(json=='ok') {
				alert('登录成功');
				var murl=window.parent.location.href;
				if(murl.indexOf("?")!=-1){
				 window.parent.location=window.parent.location+"&rnd="+Math.random();
				}else{
				 window.parent.location=window.parent.location+"?rnd="+Math.random();	
				}
			} else if(json=='sms') {
				login_sms_auth=true;
				Ds('login_sms');
			} else {
				alert(json);
			}
		}
	});
}
//发送短信
function SendSCode() {
	if(Dd('ccaptcha').innerHTML.indexOf('right') == -1)
	{
		Dd('captcha').focus();
		alert('请先填写验证码！');
		return;
	}
	if(Dd('dmobile').innerHTML.length<11) {
		err_msg('请填写正确手机号', 'mobile');
		return;
	}
	Dh('sendsok');
	Dd('send_scode').value = '正在发送';
	Dd('send_scode').disabled = true;

	$.ajax({
	type : "get",
	async:false,
	url : DTPath+'member/m.reglogin.php?action='+action_sendscode_sign+'&value='+Dd('mobile').value+'&rnd='+Dd('rnd').value+'&captcha='+Dd('captcha').value,
	dataType : "jsonp",
	jsonp: "callbackparam",
	jsonpCallback:"_sendscode",
	success : function(json){
		var f = 'mobile';
		Dd('send_scode').value = json == 1 ? '发送成功' : '立即发送';
		Dd('send_scode').disabled = json == 1 ? true : false;
		if(json == 1) {
			Ds('sendsok');
			Dd('dsendsok').innerHTML = '<img src="' + DTPath + 'member/image/ico_mailok.gif" align="absmiddle"/> <span class="f_green">短信发送成功</span>';
			StopSCode();
		} else if(json == 2) {
			err_msg('手机号码格式错误', f);
			Df(f);
		} else if(json == 3) {
			err_msg('手机号码已存在', f);
			Df(f);
		} else if(json == 5) {
			alert('短信发送过快，请稍后再试');
		} else if(json == 6) {
			alert('尝试发送次数太多，请稍后再试');
		} else {
			alert('未知错误，请重试');
		}
	},
	error:function(){}
	});
}
function StopSCode() {
	Dd('send_scode').disabled = true;
	var i = 180;
	var interval=window.setInterval(
	function() {
		if(i == 0) {
			Dd('send_scode').value = '立即发送';
			Dd('send_scode').disabled = false;
			clearInterval(interval);
		} else {
			Dd('send_scode').value = '重新发送('+i+')';
			i--;
		}
	},
	1000);
}

//发送短信
function LSendSCode() {
	if(Dd('ccaptchaL').innerHTML.indexOf('right') == -1)
	{
		Dd('captchaL').focus();
		alert('请先填写验证码！');
		return;
	}
	if(Dd('username').value.length<11) {
		err_msg('请填写正确手机号', 'username');
		return;
	}
	Dh('lsendsok');
	Dd('lsend_scode').value = '正在发送';
	Dd('lsend_scode').disabled = true;

	$.ajax({
	type : "get",
	async:false,
	url : DTPath+'member/m.reglogin.php?action='+action_sendscode_sign+'&value='+Dd('username').value+'&rnd='+Dd('rnd').value+'&captcha='+Dd('captchaL').value+'&login_auth_sms=1',
	dataType : "jsonp",
	jsonp: "callbackparam",
	jsonpCallback:"_sendscode",
	success : function(json){
		var f = 'username';
		Dd('lsend_scode').value = json == 1 ? '发送成功' : '立即发送';
		Dd('lsend_scode').disabled = json == 1 ? true : false;
		if(json == 1) {
			Ds('lsendsok');
			Dd('dlsendsok').innerHTML = '<img src="' + DTPath + 'member/image/ico_mailok.gif" align="absmiddle"/> <span class="f_green">短信发送成功</span>';
			LStopSCode();
		} else if(json == 2) {
			err_msg('手机号码格式错误，请检查', f);
			Df(f);
		} else if(json == 3) {
			err_msg('会员不存在，请更换', f);
			Df(f);
		} else if(json == 5) {
			alert('短信发送过快，请稍后再试');
		} else if(json == 6) {
			alert('尝试发送次数太多，请稍后再试');
		} else {
			alert('未知错误，请重试');
		}
	},
	error:function(){}
	});
}
function LStopSCode() {
	Dd('lsend_scode').disabled = true;
	var i = 180;
	var interval=window.setInterval(
	function() {
		if(i == 0) {
			Dd('lsend_scode').value = '立即发送';
			Dd('lsend_scode').disabled = false;
			clearInterval(interval);
		} else {
			Dd('lsend_scode').value = '重新发送('+i+')';
			i--;
		}
	},
	1000);
}
function userIsLock(v) {
	if(v.length == 11) 
	{
		$.ajax({
		type : "get",
		async:false,
		url : DTPath+'member/m.reglogin.php?action=userislock&username='+v,
		dataType : "jsonp",
		jsonp: "callbackparam",
		jsonpCallback:"_userislock",
		success : function(json) {
			if(json=='1') {
				login_sms_auth=true;
				Ds('login_sms');
			} else {
				login_sms_auth=false;
				Dh('login_sms');
			}
		},
		error:function(){}
		});
	}
	else
	{
		login_sms_auth=false;
		Dh('login_sms');
	}
	return false;	
}