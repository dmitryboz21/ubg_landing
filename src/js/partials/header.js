
$(document).ready(function () {
	$('.sh-burger-wrap').click(function () {
		// before opening
		var originalWidth = $('body').width();

		$(this).toggleClass('sh-burger--active');
		$('#site-header').toggleClass('site-header--menu-open');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
		$('body').toggleClass('body-locked');
		$('body, html').toggleClass('lock-scroll');

		if ($('body').hasClass('body-locked')) {
			if ($('body').width() > originalWidth) {
				$('body, .js-need-compensate-scrollbar').css("padding-right", ($('body').width() - originalWidth) +"px");

			}

		}
		else{
			$('body, .js-need-compensate-scrollbar').css("padding-right", "");

		}


	});
	$('.js-dark-bg-for-menu').click(function(){
		if ($('body').hasClass('body-locked')) {
			$('.sh-burger-wrap').click();
		}
	});
});

