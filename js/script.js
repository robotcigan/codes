(function(){

	$('.symbol').on('click', function(){
		$('.symbol-big').attr('src' , $(this).attr('src'));
	})

	$('.user .user-img').each(function(){
		var user = $(this),
			userHidden = $(this).parent().find('.user-img-hide');
		userHidden.hide();
		var src = userHidden.attr('src');
		user.css('background', 'url(../' + src + ')');
	})

	$('.reply-form').hide();

	$('.reply').on('click', function(){
		$(this).parent().find('.reply-form').toggle()
	})

	// $('#load-photo').change(function() {
	// 	var input = $(this)[0];
	// 	if ( input.files && input.files[0] ) {
	// 		if ( input.files[0].type.match('image.*') ) {
	// 			var reader = new FileReader();
	// 			reader.onload = function(e) {
	// 				$('#image_preview').attr('src', e.target.result);
	// 			}
	// 			reader.readAsDataURL(input.files[0]);
	// 		} else console.log('is not image mime type');
	// 	} else console.log('not isset files data or files API not supordet');
	// });
	// $('#form').bind('reset', function() {
	// 	$('#image_preview').attr('src', 'https://lh6.googleusercontent.com/-L17_eJqIsDI/UzbeiYk96RI/AAAAAAAASP4/SbOqhSuEyU4/s100-no/image-is-not-uploaded.jpg');
	// });

	// $('.mfp-close').on('click', function(){
	// 	$('.modal').css('animation', 'fadeInUp .5s');
	// })

}())