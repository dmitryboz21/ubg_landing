topBtnShow=false;
$(document).ready(function() {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");


	//ссылку на html5 video видео класть в аттрибут href
	$('.js-popup-play-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: false,
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',

			srcAction: 'iframe_src',
		}
	});

	$('.js-set-modal-tarif').click(function(){
		$('#tarif-inp').val($(this).attr('data-tarif'));
	});




	//в href надо "#id_of_popup"
	$('.js-open-popup-inline').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		mainClass: "myPopupMainClass",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>',
		callbacks: {
		  open: function() {
			$.magnificPopup.instance.close = function() {
				$('#tarif-inp').val('');

			  // Call the original close method to close the popup
			  $.magnificPopup.proto.close.call(this);
			};
		  }
		}

	});

	$('.js-open-video').magnificPopup({
		type: 'iframe',
		closeBtnInside: true,
		mainClass: "myPopupMainClass myPopupMainClass--video",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>'

	});



	$('body').on('click', '.js-mfp-close-svg', function() {
		$(this).parent().click();
	});
	$('.js-footer-menu-opener').click(function() {
		$(this).toggleClass('footer-menu-opener--open')
		$('.footer-menu-wrap').slideToggle(300);
	});
	$('body').on('click', '.js-cf-accordeon-item__top', function() {
		var item = $(this).closest('.cf-accordeon-item');
		if (item.hasClass('cf-accordeon-item--active')) {
			item.removeClass('cf-accordeon-item--active');
			item.find('.cf-accordeon-item__content').slideUp(400);
		} else {
			item.addClass('cf-accordeon-item--active');
			item.find('.cf-accordeon-item__content').slideDown(400);
			item.siblings('.cf-accordeon-item--active').removeClass('cf-accordeon-item--active').find('.cf-accordeon-item__content').slideUp(400);
		}
	});
	$('.sh-menu-item__link, .footer-menu__item a').on( 'click', function(){
		var el = $(this);
		var dest = el.attr('href'); // получаем направление
		if(dest !== undefined && dest !== '') { // проверяем существование
			$('html').animate({
				scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу
			}, 500 // скорость прокрутки
			);
		}
		return false;
	});

	$(window).scroll(function () {
		/* Кнопка вверх */
		if (window.scrollY > window.innerHeight) {
			if (!topBtnShow) {
				$('#top-btn').addClass('top-btn--show');
				topBtnShow = true;
			}
		} else {
			if (topBtnShow) {
				$('#top-btn').removeClass('top-btn--show');
				topBtnShow = false;
			}
		}

	});
	$(".js-top-btn").click(function () {
		$("html, body").animate({
			scrollTop: 0
		}, 1000);
	});
});