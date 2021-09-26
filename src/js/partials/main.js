topBtnShow = false;
$(document).ready(function () {
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
		},
		callbacks: {
			open: function () {
				$('body, html').addClass('lock-scroll');
			},
			close: function () {
				$('body, html').removeClass('lock-scroll');
			}
		}
	});

	$('.js-set-modal-tarif').click(function () {
		//$('#tarif-inp').val($(this).attr('data-tarif'));
		$('#modal-tarif-radio-'+$(this).attr('data-tarif')).prop('checked', true);


	});




	//в href надо "#id_of_popup"
	$('.js-open-popup-inline').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		mainClass: "myPopupMainClass",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>',
		/*callbacks: {
			open: function () {
				$.magnificPopup.instance.close = function () {
					$('#tarif-inp').val('');

					// Call the original close method to close the popup
					$.magnificPopup.proto.close.call(this);
				};
			}
		}*/
		callbacks: {
			open: function () {
				$('body, html').addClass('lock-scroll');
			},
			close: function () {
				$('body, html').removeClass('lock-scroll');
			}
		}
	});

	/*$('.js-open-video').magnificPopup({
		type: 'iframe',
		closeBtnInside: true,
		mainClass: "myPopupMainClass myPopupMainClass--video",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>'

	});*/
	var player;
	$('.js-open-video').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		mainClass: 'custom-popup-class',
		mainClass: "myPopupMainClass myPopupMainClass--video",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>',
		callbacks: {
			open: function () {
				//console.log(this.st.el[0].getAttribute('data-href'));
				$('#video-content').append('<video controls width="720" height="1280" autoplay="true" ><source src="' + this.st.el[0].getAttribute('data-href') + '" type="video/mp4"></video>');
				$('#video-content').find('video')[0].play();
				player = $('#video-content').find('video');
				$('body, html').addClass('lock-scroll');
			},
			close: function () {
				player[0].pause();
				player[0].remove();
				$('body, html').removeClass('lock-scroll');
			}
		}
	});

	$('.js-open-video-type-2').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		mainClass: 'custom-popup-class',
		mainClass: "myPopupMainClass myPopupMainClass--video myPopupMainClass--video--type2",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>',
		callbacks: {
			open: function () {
				//console.log(this.st.el[0].getAttribute('data-href'));
				$('#video-content').append('<video controls width="720" height="706" autoplay="true" ><source src="' + this.st.el[0].getAttribute('data-href') + '" type="video/mp4"></video>');
				$('#video-content').find('video')[0].play();
				player = $('#video-content').find('video');
				$('body, html').addClass('lock-scroll');
			},
			close: function () {
				player[0].pause();
				player[0].remove();
				$('body, html').removeClass('lock-scroll');
			}
		}
	});


	/*$('.js-open-video-type-2').magnificPopup({
		type: 'iframe',
		closeBtnInside: true,
		mainClass: "myPopupMainClass myPopupMainClass--video myPopupMainClass--video--type2",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>'

	});*/


	$('body').on('click', '.js-mfp-close-svg', function () {
		$(this).parent().click();
	});
	$('.js-footer-menu-opener').click(function () {
		$(this).toggleClass('footer-menu-opener--open')
		$('.footer-menu-wrap').slideToggle(300);
	});
	$('body').on('click', '.js-cf-accordeon-item__top', function () {
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
	$('.sh-menu-item__link, .footer-menu__item a').on('click', function () {
		var el = $(this);
		var dest = el.attr('href'); // получаем направление
		if (dest !== undefined && dest !== '') { // проверяем существование
			$('html,body').animate({
				scrollTop: $(dest).offset().top // прокручиваем страницу к требуемому элементу

			}, 500 );
			if($('#site-header').hasClass('site-header--menu-open')) {
				$('.sh-burger-wrap').click();
			}
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
	var defaultCountry="ua";
	$('.js-phone-inp').intlTelInput({
		initialCountry: defaultCountry,
		onlyCountries: ["by", "kz", "ru", "ua"],
		localizedCountries: {
			"by": "Беларусь",
			"kz": "Казахстан",
			"ru": "Россия",
			"ua": "Украина"
		},
		separateDialCode: true,
		nationalMode: false
		//utilsScript: "js/utils.js"
		// any initialisation options go here
	});
	/*
		var reset = function (inp) {
			inp.classList.remove("error");
			errorMsg.innerHTML = "";
			errorMsg.classList.add("hide");
			validMsg.classList.add("hide");
		};

		// on blur: validate
		('.js-phone-inp').addEventListener('blur', function () {
			var inp=$(this);

			reset(inp);
			if (inp.value.trim()) {
				if(inp.intlTelInput('isValidNumber') {
					inp.intlTelInput("isValidNumber"))
					validMsg.classList.remove("hide");
				} else {
					input.classList.add("error");
					var errorCode = iti.getValidationError();
					errorMsg.innerHTML = errorMap[errorCode];
					errorMsg.classList.remove("hide");
				}
			}
		});


		input.addEventListener('change', reset);
		input.addEventListener('keyup', reset);
		*/

	$.jMaskGlobals = {
		translation: {
			'n': {pattern: /\d/},
		}
	};
	/*var masksArray = {
		'by': '+375 (nn) nnn-nn-nn',
		'kz': '+7 (nn) nnn-nn-nn',
		'ru': '+7 (nnn) nnn-nn-nn',
		'ua': '+380 (nn) nnn-nn-nn'
	}

	var placeholdersArray = {
		'by': '+375 (__) ___-__-__',
		'kz': '+7 (__) ___-__-__',
		'ru': '+7 (___) ___-__-__',
		'ua': '+380 (__) ___-__-__'
	}*/
	var masksArray = {
		'by': '(nn) nnn-nn-nn',
		'kz': '(nnn) nnn-nn-nn',
		'ru': '(nnn) nnn-nn-nn',
		'ua': '(nn) nnn-nn-nn'
	}

	var placeholdersArray = {
		'by': '(__) ___-__-__',
		'kz': '(___) ___-__-__',
		'ru': '(___) ___-__-__',
		'ua': '(__) ___-__-__'
	}

	var countryCodes = {
		'by': '+375',
		'kz': '+7',
		'ru': '+7',
		'ua': '+380'
	}

	$('.js-phone-inp').attr('placeholder', placeholdersArray[defaultCountry]);

	$('.js-phone-inp').mask(masksArray[defaultCountry],{
		//clearIfNotMatch: true,
		translation: {
			'n': {pattern: /\d/},
			/*'r': {
			  pattern: /[\/]/,
			  fallback: '/'
			},*/
			placeholder:placeholdersArray[defaultCountry]
		}
	});

	$('.js-phone-inp').on("countrychange", function (e, ) {
		var countryData=$(this).intlTelInput('getSelectedCountryData');

		$(this).val('');
		$('.js-phone-inp').attr('placeholder', placeholdersArray[countryData.iso2]);
		$(this).mask(masksArray[countryData.iso2],{

		translation: {
			'n': {pattern: /\d/},
			/*'r': {
			  pattern: /[\/]/,
			  fallback: '/'
			},*/
			placeholder:placeholdersArray[countryData.iso2]
		}
		});
		// do something with iti.getSelectedCountryData()
	});

	$('.js-section-prices__read-more').click(function(){
		$(this).closest('.section-prices-card').toggleClass('section-prices-card--mob-open');
		$(this).siblings('.section-prices-ul').stop().slideToggle(600);
	});

	$('.js-section-reviews__read-more').click(function(){
		$(this).closest('.secreviews-card').toggleClass('module-card-opener--open');
		$(this).siblings('.secreviews-card__text-wrap').stop().slideToggle(600);
	});

//data-type="sign-up"
//data-type="request-call"

	$('.js-form-processing').submit(function(e){
		e.preventDefault();
		var form = $(this);
		var formType = $(this).attr('data-type');

		switch(formType){
			case "sign-up":
				var telInp=form.find('.js-phone-inp');
				console.log(validateTel(telInp));
				//console.log(telInp.cleanVal());
			break;
			case "request-call":

			break;
		}
	});

});
/**
 * @param  {} telInp //jquery объект, указывающий на поле для ввода телефона
 */

function checkNoEmpty(inp){
	return inp.val().length>0;
}

function validateTel(telInp){
	if(checkNoEmpty(telInp)){
		var countryData=telInp.intlTelInput('getSelectedCountryData');

		console.log(countryData);
		//inp.val()

	}
	else{
		return "empty";
	}
}