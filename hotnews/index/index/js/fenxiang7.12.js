// 分享
var max_ssid = 0;
var shareTitle = '';
var shareUrl = '';
var shareImg = '';
var shareDesc = '';

//如果是在微信中打开
    if (UA.indexOf("micromessenger") != -1) {

        //添加微信分享模块(修改的地方)
        // $(".wxsharebox").show();
        // $(".update_and_share").show().html('<a class="update" href="?id=' + catId + '&rnd='+Math.random()+'"></a>');
        reloadJS("weixinJs2", "http://img.10pinping.com/api/weixin/sdk.php?url=" + location.href.split("#")[0].replace(/\&/g, "~"));
        if (typeof mark == "undefined") { 
        	mark = 'qita';
	　　}
        q_h(ssid);
            
    }
function q_h(ssid){
        var param = new Object();
        param.ssid = ssid;
        if (typeof catname != "undefined") { 
            param.catname = catname;
    　　}
        if (typeof bname != "undefined") { 
            param.bname = bname;
    　　}
        $.ajax({
            url:'http://m.10pinping.com/member/tongji.php?action=fxsuiji',
            data:param,
            type: 'post',
            dataType:'json',
            success:function(data){
                console.log(data);
                // console.log(window.location.href);
                // var utl = window.location.href;
                // console.log(utl.indexOf('?'));
                if(data != 0){
                    var url = window.location.href;
                    if(url.indexOf('?') != -1){
                        if(url.indexOf('fx') == -1){
                            url = url +'&fx='+data.ssid;
                        }
                    }else{
                        url = url +'?fx='+data.ssid;
                    }
                    shareTitle = data.title;
                    shareUrl = url;
                    shareImg = data.logo;
                    shareDesc = data.content;
                    max_ssid = data.ssid;
                    console.log(shareTitle+'--'+shareUrl+'--'+shareImg+'--'+shareDesc+'--'+max_ssid);
                    wx.ready(function(){
                        shareVoteBrand1(ssid);
                    });

                }
            }
        })
}
function shareVoteBrand1(ssid){
    // 分享到朋友圈
    wx.onMenuShareTimeline({
        title: shareTitle, // 分享标题
        link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: shareImg, // 分享图标
        success: function () {
        // 用户点击了分享后执行的回调函数
            $.ajax({
                url:'http://m.10pinping.com/member/tongji.php?action=fx_tj',
                data:{max_ssid:max_ssid,type:1,mark:mark},
                type: 'post',
                success:function(data){
                    q_h(ssid);
                }
            })
        }
    });
    // 分享给朋友
    wx.onMenuShareAppMessage({
        title: shareTitle, // 分享标题
        desc: shareDesc, // 分享描述
        link: shareUrl, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
        imgUrl: shareImg, // 分享图标
        success: function () {
        // 用户点击了分享后执行的回调函数
            $.ajax({
                url:'http://m.10pinping.com/member/tongji.php?action=fx_tj',
                data:{max_ssid:max_ssid,type:1,mark:mark},
                type: 'post',
                success:function(data){
                    q_h(ssid);
                }
            })

        }
    });
    // 分享到QQ
    wx.onMenuShareQQ({
        title: shareTitle, // 分享标题
        desc: shareDesc, // 分享描述
        link: shareUrl, // 分享链接
        imgUrl: shareImg, // 分享图标
        success: function () {
        // 用户确认分享后执行的回调函数
            $.ajax({
                url:'http://m.10pinping.com/member/tongji.php?action=fx_tj',
                data:{max_ssid:max_ssid,type:1,mark:mark},
                type: 'post',
                success:function(data){
                    q_h(ssid);
                }
            })
        }
    });
    // 分享到腾讯微博
    wx.onMenuShareWeibo({
        title: shareTitle, // 分享标题
        desc: shareDesc, // 分享描述
        link: shareUrl, // 分享链接
        imgUrl: shareImg, // 分享图标
        success: function () {
        // 用户确认分享后执行的回调函数
            $.ajax({
                url:'http://m.10pinping.com/member/tongji.php?action=fx_tj',
                data:{max_ssid:max_ssid,type:1,mark:mark},
                type: 'post',
                success:function(data){
                    q_h(ssid);
                }
            })
        }
    });
    // 分享到QQ空间
    wx.onMenuShareQZone({
        title: shareTitle, // 分享标题
        desc: shareDesc, // 分享描述
        link: shareUrl, // 分享链接
        imgUrl: shareImg, // 分享图标
        success: function () {
        // 用户确认分享后执行的回调函数
            $.ajax({
                url:'http://m.10pinping.com/member/tongji.php?action=fx_tj',
                data:{max_ssid:max_ssid,type:1,mark:mark},
                type: 'post',
                success:function(data){
                    q_h(ssid);
                }
            })
        }
    });
}
    //重新加载js
function reloadJS(id, newJS) {
    var oldjs = null;
    var oldjs = document.getElementById(id);
    if (oldjs) {
        oldjs.parentNode.removeChild(oldjs)
    }
    var scriptObj = document.createElement("script");
    scriptObj.src = newJS;
    scriptObj.type = "text/javascript";
    scriptObj.id = id;
    document.body.appendChild(scriptObj)
}