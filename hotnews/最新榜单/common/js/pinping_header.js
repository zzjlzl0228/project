$(function(){
    // 头部菜单栏点击出现消失
    $('.classification').click(function(event){
        event.stopPropagation();
        $('.header_xiala').toggle();
        $(document).click(function(e){
            var _con = $('.header_xiala');   // 设置目标区域
            if(!_con.is(e.target) && _con.has(e.target).length === 0){
                $('.header_xiala').hide();
            }
        });
    });
});