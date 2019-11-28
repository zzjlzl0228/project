$(document).ready(function() {
	var ress = document.location.href
	/* 截取最后一个斜杠后的内容  */
	var string = ress.substring(ress.lastIndexOf("/") + 1);
	var a = string.split('.')[0];
	if (a == 'jobDetail') {
		a = 'enjoyus';
	}
	var length = $('.right-list li').length;
	for (var i = 0; i < length; i++) {
		var name = $('.right-list li').eq(i).find('a').prop('className')
		if (name === a) {
			$('.right-list li').eq(i).addClass('active')
			$('.right-list li').eq(i).find('.orangeLine').css('display', 'block')
		}
	}
})
