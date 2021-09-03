
$(document).ready(function () {
	$('.sh-burger-wrap').click(function () {
		$(this).toggleClass('sh-burger--active');
		$('#site-header').toggleClass('site-header--menu-open');
		$('.sh-menu-wrap').toggleClass('sh-menu-wrap--open');
	});

});