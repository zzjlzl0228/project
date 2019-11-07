// 表单提交,获取用户填写得内容
var brandName = $('#brandName').val();
var phoneNum = $('#phoneNum').val();
var email = $('#email').val();
var weixin = $('#weixin').val();
var website = $('#website').val();
// 获取输入得图片验证码

// 表单input框添加鼠标失焦事件，若内容为空，显示错误信息
$('.input-item input').blur(function() {
	var a = $(this).val();
	var b = $(this).prev().text();
	if (a == '') {
		$(this).parent().next().css('display', 'block');
		$(this).parent().next().text('请输入' + b);
	}
	// 验证联系电话
	if (!(/^1[3456789]\d{9}$/.test(phoneNum))) {
		$(this).parent().next().css('display', 'block');
		$(this).parent().next().text('请输入正确的电话格式');
		return false;
	}
	// 验证邮箱
	var reg = new RegExp("^[a-z0-9A-Z]+[- | a-z0-9A-Z . _]+@([a-z0-9A-Z]+(-[a-z0-9A-Z]+)?\\.)+[a-z]{2,}$");  
	if (!reg.test(email)) {
		$(this).parent().next().css('display', 'block');
		$(this).parent().next().text('请输入正确的邮箱格式');
		return false
	}
	// 验证微信号
	reg = /^[a-zA-Z]([-_a-zA-Z0-9]{5,19})+$/;
	if (!reg.test(weixin)) {
		$(this).parent().next().css('display', 'block');
		$(this).parent().next().text('请输入正确的微信号');
		return false
	}
	// 验证网址
	reg =/^([hH][tT]{2}[pP]:\/\/|[hH][tT]{2}[pP][sS]:\/\/)(([A-Za-z0-9-~]+)\.)+([A-Za-z0-9-~\/])+$/
	if (!reg.test(website)) {
		$(this).parent().next().css('display', 'block');
		$(this).parent().next().text('请输入正确的网址');
		return false
	}
})

// 验证图片验证码
$('.input_content').blur(function() {
	var code = $('.input_content').val();
	var length = code.length;
	var myReg = /^[a-zA-Z]$/;
	if (!myReg.test(code)) {
		$('.input_tips').css('display', 'block');
	}
	// 判断显示错误得条件（用户输入得不正确得情况）
	if (code == '' || length != 4 ) {
		$('.input_tips').css('display', 'block');
	} else {
		$('.input_tips').css('display', 'none');
	}
})

// 点击客服图片显示客服弹窗
$('#kefu').click(function(){
	$('.customer').css('display','block');
	jzhd()
})
// 禁止滑动
function jzhd() {
	document.body.style.overflow = "hidden";			
	document.querySelector("html").style.overflow = "hidden";
}
// 允许滑动
function yxhd() {
	document.body.style.overflow = "auto";
	document.querySelector("html").style.overflow = "auto";
}
// 点击关闭按钮关闭弹窗,并允许滑动
$('.close-customer').click(function(){
	$('.customer').css('display','none');
	yxhd()
})