		
$(function(){
	setRemSize();
	window.addEventListener("resize", setRemSize, false);
	function setRemSize() {
		var width = document.documentElement.clientWidth;
		if (width > 750) {
		  width = 750;
		}
		var _clientWidth = width / 7.5 + 'px';
		document.documentElement.style.fontSize = _clientWidth;
	};
})