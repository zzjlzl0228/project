$(function() {
	function upload(obj, img) {
		$(obj).change(function() {
			imgUrl = $(this).val()
			$filePath = URL.createObjectURL(this.files[0]);
			var urlType = imgUrl.substring(imgUrl.lastIndexOf(".")).toLowerCase();
			if (!urlType.match(/.png|.jpg|.jpeg/)) {
				alert('上传错误,文件格式必须为：png/jpg/jpeg');
				//$('#modules_err').show()
				$(obj).parents(".upload_main").find(".upload_error").show()
				return;
			} else {
				$(obj).parents(".upload_main").find(".upload_error").hide()
				//$('#modules_err').hide()
				// $('#fmodules').hide()
				$(obj).parents(".upload_main").find(".proveImg").hide()
				$(obj).parents(".upload_main").find(".upload_succ").show()
				//$('#modules_suc').show()
				$(img).attr('src', $filePath);
			}
		})
	}
	$('.upload_init').on('click', '.upload_init_file', function() {
		console.log(123)
	})

	function can(obj) {
		$(obj).click(function(event) {
			$(obj).parents(".upload_main").find(".upload_error").hide()
			$(obj).parents(".upload_main").find(".upload_succ").hide()
			//$('#modules_suc').hide()
			$(obj).parents(".upload_main").find(".proveImg").show()
			//$('#fmodules').show()
			// alert(123)
			event.stopPropagation();
		})
	}
	upload("#modules", "#modules_img");
	upload("#business", "#business_img");
	upload("#brandimg", "#brandimg_img");
	upload("#moduless", "#modules_img");
	upload("#businesss", "#business_img");
	upload("#brandimgs", "#brandimg_img");
	//删除
	can("#modules_cencal");
	can("#business_cencal");
	can("#brandimg_cencal");


	// $("#moduless").change(function() {
	// 	imgUrl = $(this).val()
	// 	$filePath = URL.createObjectURL(this.files[0]);
	// 	var urlType = imgUrl.substring(imgUrl.lastIndexOf(".")).toLowerCase();
	// 	if (!urlType.match(/.png|.jpg|.jpeg/)) {
	// 		alert('上传错误,文件格式必须为：png/jpg/jpeg');
	// 		$('#modules_err').show()
	// 		return;
	// 	} else {
	// 		$('#modules_err').hide()
	// 		// $('#fmodules').hide()
	// 		$('#modules_suc').show()
	// 		$('#modules_img').attr('src', $filePath);
	// 	}
	// })


});
