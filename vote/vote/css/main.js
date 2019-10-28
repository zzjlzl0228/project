 // 品牌信息的input获焦js
 $('.signUp_input_main').on('click', function () {
     if ($(this).parent().hasClass('lockDiv')) {
         return;
     } else {
         $(this).find('input').focus();
     }
 })
 // input输入框hide错误提示
 $('.signUp_input_main').on('input', 'input', function () {
    //signUp_phoneReg_main
     if ($(this).parents('.signUp_input').hasClass('errorDiv')&&!$(this).parents('.signUp_input').hasClass('signUp_phoneReg_main')) {
         $(this).parents('.signUp_input').removeClass('errorDiv')
     }
 })

 //  其他三项的弹出层确认按钮与外层的状态管理
 $('.order_alert_btn').on('click', function () {
     $('.order_alert').hide();
     $.each($('.order_alert_main .upload_main'), function (idx, ele) {
        //判断状态
       
        if($(ele).find('.upload_init_file').parent().parent().hasClass("upload_main_error")){
          $('.order_main .order_item').eq(idx).removeClass('order_icon_default order_icon_succ order_icon_error').addClass('order_icon_error')
        }else if($(ele).find('.upload_init_file').parent().parent().hasClass("upload_main_good")){
          $('.order_main .order_item').eq(idx).removeClass('order_icon_default order_icon_succ order_icon_error').addClass('order_icon_succ')
        }else if($(ele).find('.upload_init_file').parent().parent().hasClass("upload_main_pass")){
            //upload_main_pass
            $('.order_main .order_item').eq(idx).removeClass('order_icon_default order_icon_succ order_icon_error').addClass('order_icon_succ')
        }else{
          $('.order_main .order_item').eq(idx).removeClass('order_icon_default order_icon_succ order_icon_error').addClass('order_icon_default')
        }

         // if ($(ele).find('.upload_init_file').val() == '') {
         //     $('.order_main .order_item').eq(idx).removeClass('order_icon_default order_icon_succ order_icon_error').addClass('order_icon_default')
         // } else {
         //    $('.order_main .order_item').eq(idx).removeClass('order_icon_default order_icon_succ order_icon_error').addClass('order_icon_succ')
         // }
     })
 })
var modifyYingye = 0;
var modifyShangbiao = 0;
var modifyThumb1 = 0;
var modifyThumb2 = 0;
var modifyThumb3 = 0;
// 上传证件的图片本地显示
$('.upload_init').on('change', '.upload_init_file', function () {
	console.log(123)
    var imgUrl = $(this).val();
    var lookImgSrc = window.URL.createObjectURL(this.files[0]);
    var urlType = imgUrl.substring(imgUrl.lastIndexOf(".")).toLowerCase();
    if (!urlType.match(/.png|.jpg|.jpeg/)) {
      alert('上传错误,文件格式必须为：png/jpg/jpeg');
      return;
    } else {
        var that = $(this);
        files=this.files;
        file=files[0];
        var fileSize = Math.floor(file.size / 1024 / 1024);
        if (fileSize >= 4) {
          alert("请上传小于4M的图片");
          return;
        }

        // 模拟调用ajax之前(显示上传中的div)
        $(this).parents('.upload_main').removeClass('upload_main_error upload_main_bad upload_main_good').addClass('upload_main_ing')
        // 1 营业执照
        // 2 商标注册证
        // 3 商标授权
        // 4 延展证明
        // 5 转让证明
        var type = $(this).parents('.upload_init').attr('data-type');
        console.log(type)
        if(type == 1){  // 1 营业执照
            if(modifyYingye == 0){
              if(edit == 0){
                if(iGongSiRenZheng == 0){  
                  count(18);   //首次报名
                }
              }else{   //修改
                if(iGongSiRenZheng == 0){
                  count(206);   //首次报名修改
                }
              }
              modifyYingye = 1;
            }
            
        }else if(type == 2){  // 2 商标注册证
          if(modifyShangbiao == 0){
            if(edit == 0){
              if(iGongSiRenZheng == 0){  
                count(19);   //首次报名
              }else{
                count(28);   //再次报名
              }
            }else{   //修改
              if(iGongSiRenZheng == 0){
                count(207);   //首次报名修改
              }else{
                count(213);   //再次报名修改
              }
            }
            modifyShangbiao = 1;
          }
            
        }else if(type == 3){  // 3 商标授权
          if(modifyThumb1 == 0){
            if(edit == 0){
              if(iGongSiRenZheng == 0){  
                count(198);   //首次报名
              }else{
                count(201);   //再次报名
              }
            }else{   //修改
              if(iGongSiRenZheng == 0){
                count(208);   //首次报名修改
              }else{
                count(214);   //再次报名修改
              }
            }
            modifyThumb1 = 1;
          }
            
        }else if(type == 4){  // 4 延展证明
          if(modifyThumb2 == 0){
            if(edit == 0){
              if(iGongSiRenZheng == 0){  
                count(199);   //首次报名
              }else{
                count(202);   //再次报名
              }
            }else{   //修改
              if(iGongSiRenZheng == 0){
                count(209);   //首次报名修改
              }else{
                count(215);   //再次报名修改
              }
            }
            modifyThumb2 = 1;
          }
            
        }else if(type == 5){  // 5 转让证明
          if(modifyThumb3 == 0){
            if(edit == 0){
              if(iGongSiRenZheng == 0){  
                count(200);   //首次报名
              }else{
                count(203);   //再次报名
              }
            }else{   //修改
              if(iGongSiRenZheng == 0){
                count(210);   //首次报名修改
              }else{
                count(216);   //再次报名修改
              }
            }
            modifyThumb3 = 1;
          }
            
        }
        ajaxUpload(file,$(this))

        // // ajax请求数据后(显示上传成功的div)
        // setTimeout(function () {
        // //   本地的图片显示
        // that.parents('.upload_main').addClass('upload_main_good').removeClass('upload_main_ing').children('.upload_succ').children('.upload_succ_img').find('img').attr('src', lookImgSrc);
        // }, 2000)
        // // 模拟请求超时(显示上传失败的div)
        // setTimeout(function () {
        // that.parents('.upload_main').removeClass('upload_main_ing upload_main_good').addClass('upload_main_bad');
        // that.parents('.upload_main').find('.upload_succ_img').find('img').attr('src','')
        // that.val('');
        // }, 4000)
    }
})


function ajaxUpload(file,_this){
  _this.parents('.publicPic').removeClass('imgError').addClass('imgLoading')
  //图片大小的限制
  
  var formdata = new FormData();
    formdata.append("upthumb",file);
    formdata.append("fid",_this.attr("attr"));
    $.ajax({
      url:'http://m.10pinping.com/venroll/upload.php',
      //url:'http://m10pinping.yewu99.com:8089/venroll/upload2.php',
      type:'post',
      data:formdata,
      dataType:'json',
      // async:false,
      processData:false,
      contentType:false,
      success:function(data){
        if(data.type){
          $("#"+_this.attr("attr")).val(data.img);

        _this.parents('.upload_main').addClass('upload_main_good').removeClass('upload_main_ing').children('.upload_succ').children('.upload_succ_img').find('img').attr('src', data.img);
        }else{
          //alert("上传失败！");
            _this.parents('.upload_main').removeClass('upload_main_ing upload_main_good').addClass('upload_main_bad');
            _this.parents('.upload_main').find('.upload_succ_img').find('img').attr('src','')
            _this.val('');
        }
      },
      error:function(XMLHttpRequest, textStatus, errorThrown){
            _this.parents('.upload_main').removeClass('upload_main_ing upload_main_good').addClass('upload_main_bad');
            _this.parents('.upload_main').find('.upload_succ_img').find('img').attr('src','')
            _this.val('');
      }
    })
}




 // 上传成功的删除
 $('.upload_succ').on('click','.nemu_btn_remove',function () {
    $(this).parents('.upload_succ').find('.upload_succ_img').find('img').attr('src','');
    $(this).parents('.upload_main').removeClass('upload_main_good').children('.upload_init').find('input').val('')

  })

 // 上传成功的上传
 $('.upload_succ').on('click','.nemu_btn_upload',function () {
    $(this).parents('.upload_succ').siblings('.upload_init').find('.upload_init_file').click()
  })

//   上传失败中的重新上传
$('.upload_error').on('click', '.upload_error_btn', function () {
	console.log(123)
    $(this).parents('.upload_error').siblings('.upload_init').find('.upload_init_file').click()
})


 // 发送短信
 var timer = null;
 $('.signUp_infoReg_img').on('click', function () {
    if($(this).html()=='发送短信'){
      //获取手机号码
      mobile=$("#mobile").val();
      if(mobile==''){
          alert("请填写手机号码！");
          return;
      }
      var myreg=/^[1][3,4,5,7,8][0-9]{9}$/;
      if (!myreg.test(mobile)) {
          alert("手机号码格式不正确！");
          return;
      }
      captchaval=Dd("captcha").value
      if(captchaval==''){
        alert("请填写图片验证码！");
        return;
      }
      if(captchaval.length!=4){
        alert("图片验证码不正确！");
        return;
      }
      if ($("#checkcaptchav2").hasClass("errorDiv")) {
        alert('图片验证码不正确！');
        return;
      }
      
      ajaxSendMsg(mobile,$(this))
    }else {
        return;
    }
 })


function ajaxSendMsg(mobile,that){
  $.ajax({
      url:'http://www.10pinping.com/baoming/sendmsg.php',
      type:'post',
      data:{mobile:mobile},
      dataType:'json',
      success:function(data){
        if(data.status){
          var sum=60;
          //var that=$(this);
          timer=setInterval(function () {
            that.html(sum)
            sum--
            if(sum<=0) {
              clearInterval(timer);
              timer=null
              that.html('发送短信')
            }
          },1000)
        }else{
          alert(data.msg);
        }
      }
    })
}

function checkcaptchav2(s,Login) {
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
                //alert(json);
                $("#checkcaptchav2").removeClass("errorDiv");
            } else {
                ischeckcaptcha=false;
                $("#checkcaptchav2").removeClass("errorDiv");
                $("#checkcaptchav2").addClass("errorDiv");

            }
        },
        error:function(){}
    });
    
}

// 点击放大图片
$('.upload_succ_img').on('click',function () { 
    var imgurl=$(this).find('img').attr('src')
    $('.clickShowPic_img').attr('src',imgurl);
    $('.clickShowPic').show()
    $('.loadGif').show();
    setTimeout(function () { 
        $('.loadGif').hide();
        $('.clickShowPic_main').show();
    },1000)
 })



// 埋点
//官方网址
var modifyHomePage=0;
$("input[name='homepage']").bind('input propertychange', function() {
  if(modifyHomePage==0){
    if(edit == 0){
      if(iGongSiRenZheng == 0){  
        count(16);   //首次报名
      }else{
        count(26);   //再次报名
      }
    }else{   //修改
      if(iGongSiRenZheng == 0){
        count(205);   //首次报名修改
      }else{
        count(212);   //再次报名修改
      }
    }
    modifyHomePage=1;
  }
  
});

//电话号码
var modifyMobile = 0;
$("input[name='mobile']").bind('input propertychange', function() {
  if(modifyMobile==0){
    count(21);
    modifyMobile=1;
  }
});
//手机验证码
var modifyMsgCode = 0;
$("input[name='msgCode']").bind('input propertychange', function() {
  if(modifyMsgCode==0){
    count(22);
    modifyMsgCode=1;
  }
});
function count(id){
   $.post("http://m.10pinping.com/member/tongji.php?action=sj_tj",{max_ssid:id},function(data){
                        // console.log(data);
    })
}
	$(window).load(function(){
		alert(123)
	})