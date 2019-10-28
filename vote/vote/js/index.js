$(function() {
		// 找到复制按钮
		var clipboard = new ClipboardJS('.btn');
		//复制成功
		clipboard.on('success', function(e) {
			console.log(e);
		});
		//复制失败
		clipboard.on('error', function(e) {
			console.log(e);
		});
})