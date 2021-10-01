var htmlScrollTop = -1;
topBtnShow = false;

function setScrollTop() {
	htmlScrollTop = $('html').scrollTop();
}

function returnScrollTop() {
	$('html').scrollTop(htmlScrollTop);
	htmlScrollTop = -1;
}


$(document).ready(function () {
	// $("input[name='phone']").mask(" +7 (999) 999-99-99");


	//ссылку на html5 video видео класть в аттрибут href
	$('.js-popup-play-video').magnificPopup({
		type: 'iframe',
		mainClass: 'mfp-fade',
		removalDelay: 160,
		preloader: false,
		fixedContentPos: true,
		iframe: {
			markup: '<div class="mfp-iframe-scaler">' +
				'<div class="mfp-close"></div>' +
				'<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
				'</div>',

			srcAction: 'iframe_src',
		},
		callbacks: {
			open: function () {
				/*setScrollTop();
				$('body, html').addClass('lock-scroll');*/
			},
			close: function () {
				/*$('body, html').removeClass('lock-scroll');
				returnScrollTop();*/
			}
		}
	});

	$('.js-set-modal-tarif').click(function () {
		//$('#tarif-inp').val($(this).attr('data-tarif'));
		$('#modal-tarif-radio-' + $(this).attr('data-tarif')).prop('checked', true);


	});




	//в href надо "#id_of_popup"
	$('.js-open-popup-inline').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		mainClass: "myPopupMainClass myPopupMainClass--modals-no-video",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>',
		fixedContentPos: true,
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
				/*setScrollTop();
				$('body, html').addClass('lock-scroll');*/
			},
			close: function () {
				/*$('body, html').removeClass('lock-scroll');
				returnScrollTop();*/
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
		mainClass: "myPopupMainClass myPopupMainClass--video",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>',
		fixedContentPos: true,
		callbacks: {
			open: function () {
				//console.log(this.st.el[0].getAttribute('data-href'));
				$('#video-content').append('<video controls width="720" height="1280" autoplay="true" ><source src="' + this.st.el[0].getAttribute('data-href') + '" type="video/mp4"></video>');
				$('#video-content').find('video')[0].play();
				player = $('#video-content').find('video');
				/*setScrollTop();
				$('body, html').addClass('lock-scroll');*/
			},
			close: function () {
				player[0].pause();
				player[0].remove();
				/*$('body, html').removeClass('lock-scroll');
				returnScrollTop();*/
			}
		}
	});

	$('.js-open-video-type-2').magnificPopup({
		type: 'inline',
		closeBtnInside: true,
		mainClass: 'custom-popup-class',
		mainClass: "myPopupMainClass myPopupMainClass--video myPopupMainClass--video--type2",
		closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>',
		fixedContentPos: true,
		callbacks: {
			open: function () {
				//console.log(this.st.el[0].getAttribute('data-href'));
				$('#video-content').append('<video controls width="720" height="706" autoplay="true" ><source src="' + this.st.el[0].getAttribute('data-href') + '" type="video/mp4"></video>');
				$('#video-content').find('video')[0].play();
				player = $('#video-content').find('video');
				/*setScrollTop();
				$('body, html').addClass('lock-scroll');*/
			},
			close: function () {
				player[0].pause();
				player[0].remove();
				/*$('body, html').removeClass('lock-scroll');
				returnScrollTop();*/
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

			}, 500);
			if ($('#site-header').hasClass('site-header--menu-open')) {
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
	var defaultCountry = "ua";
	$('.js-phone-inp').each(function () {
		var $this = $(this);
		$this.intlTelInput({
			initialCountry: defaultCountry,
			onlyCountries: ["by", "kz", "ru", "ua"],
			localizedCountries: {
				"by": "Беларусь",
				"kz": "Казахстан",
				"ru": "Россия",
				"ua": "Украина"
			},
			separateDialCode: true,
			nationalMode: false,
			//dropdownContainer: $this.closest('.secform-inp-wrap')[0]
			//utilsScript: "js/utils.js"
			// any initialisation options go here
		});
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
			'n': { pattern: /\d/ },
		},

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

	$('.js-phone-inp').mask(masksArray[defaultCountry], {
		//clearIfNotMatch: true,
		translation: {
			'n': { pattern: /\d/ },
			/*'r': {
			  pattern: /[\/]/,
			  fallback: '/'
			},*/
			placeholder: placeholdersArray[defaultCountry]
		},
		onComplete: function (val, e, inp, options) {
			//console.log($(this));
			$(inp).addClass('js-tel-mask-valid');
		},
		onChange: function (val, e, inp, options) {
			//console.log('cep onChange! ', val,e,inp,options)
			$(inp).removeClass('js-tel-mask-valid');
			//console.log($(this));
		}
	});

	$('.js-phone-inp').on("countrychange", function (e,) {
		var countryData = $(this).intlTelInput('getSelectedCountryData');

		$(this).val('');
		$('.js-phone-inp').attr('placeholder', placeholdersArray[countryData.iso2]);

		$(this).unmask();
		$(this).mask(masksArray[countryData.iso2], {

			translation: {
				'n': { pattern: /\d/ },
				/*'r': {
				  pattern: /[\/]/,
				  fallback: '/'
				},*/
				placeholder: placeholdersArray[countryData.iso2]
			},
			onComplete: function (val, e, inp, options) {
				//console.log($(this));
				$(inp).addClass('js-tel-mask-valid');
			},
			onChange: function (val, e, inp, options) {
				//console.log('cep onChange! ', val,e,inp,options)
				$(inp).removeClass('js-tel-mask-valid');
				//console.log($(this));
			}
		});
		// do something with iti.getSelectedCountryData()
	});

	$('.js-section-prices__read-more').click(function () {
		$(this).closest('.section-prices-card').toggleClass('section-prices-card--mob-open');
		$(this).siblings('.section-prices-ul').stop().slideToggle(600);
	});

	$('.js-section-reviews__read-more').click(function () {
		$(this).closest('.secreviews-card').toggleClass('module-card-opener--open');
		$(this).siblings('.secreviews-card__text-wrap').stop().slideToggle(600);
	});

	//data-type="sign-up"
	//data-type="request-call"

	//Offline.options = {checks: {image: {url: 'my-image.gif'}, active: 'image'}}
	//Offline.on('down', handler, context)

	$('.js-form-processing').submit(function (e) {
		e.preventDefault();
		var form = $(this);
		var formType = $(this).attr('data-type');
		var telInp = form.find('.js-phone-inp');
		var nameInp = form.find('input[name="name"]');
		var telegramInp = form.find('input[name="telegram"]');
		var emailInp = form.find('input[name="email"]');

		var tarifInp = form.find('input[name="tarif-secform"]:checked');
		var hasErrors = false;
		var validateTelResult = false;
		var validateTelegramResult = false;
		switch (formType) {
			case "sign-up":
				validateTelResult = validateTel(telInp);
				validateTelegramResult = validateTelegram(telegramInp);

				switch (validateTelResult) {
					case "valid":
						clearErrors(telInp);
						break;
					case "non-completed":
						printError(telInp, '*Номер заполнен не полностью');
						hasErrors = true;
						break;
					case "empty":
						//Если одно поле пустое - это пофиг. Если оба поля пустые - ошибку выведу в проверке ниже
						//printError(telInp, '*Данное поле обязательно к заполнению');
						//hasErrors = true;
						break;
				}
				switch (validateTelegramResult) {
					case "valid":
						clearErrors(telegramInp);
						break;
					case "invalid":
						printError(telegramInp, '*Некорректный никнейм');
						hasErrors = true;
						break;
					case "empty":
						//Если одно поле пустое - это пофиг. Если оба поля пустые - ошибку выведу в проверке ниже
						//printError(telegramInp, '*Данное поле обязательно к заполнению');
						//hasErrors = true;
						break;
				}



				if (validateTelResult === "valid" || validateTelegramResult === "valid") {//если хотя бы одно поле валиджно из этих, то ошибку тут не выводим
					clearErrors(form.find('.secform-info--select-channel-of-communication'));
				}
				else {
					//console.log(form.find('.secform-info--select-channel-of-communication').length);
					printError(form.find('.secform-info--select-channel-of-communication'), '*Минимум одно поле должно быть заполнено');
					hasErrors = true;
				}



				break;
			case "request-call":
				switch (validateTel(telInp)) {
					case "valid":
						clearErrors(telInp);
						break;
					case "non-completed":
						printError(telInp, '*Номер заполнен не полностью');
						hasErrors = true;
						break;
					case "empty":
						printError(telInp, '*Данное поле обязательно к заполнению');
						hasErrors = true;
						break;
				}
				break;
			case "request-email":
				switch (validateEmail(emailInp)) {
					case "valid":
						clearErrors(emailInp);
						break;
					case "invalid":
						printError(emailInp, '*Некорректный email');
						hasErrors = true;
						break;
					case "empty":
						printError(emailInp, '*Данное поле обязательно к заполнению');
						hasErrors = true;
						break;
				}
				break;
		}


		var nameInvalidReg = /[^А-ЯЁа-яёA-Za-z ]/;
		if (nameInvalidReg.test(nameInp.val())) {//имя невалидно
			printError(nameInp, '*Разрешены только символы русского алфавита');
			hasErrors = true;
		}
		else {
			if (checkNoEmpty(nameInp)) {
				clearErrors(nameInp);
			}
			else {
				printError(nameInp, '*Обязательно к заполнению');
				hasErrors = true;
			}
		}

		if (!hasErrors) {
			var formData = {
				formType: formType,
				name: nameInp.val(),
				description: ""
			};

			var countryData = telInp.intlTelInput('getSelectedCountryData');
			//dialCode: "380"
			//name: "Украина"
			//console.log(countryData);
			switch (formType) {
				case "sign-up":
					formData.title = "Запись на курс";
					if (validateTelResult === "valid") {
						formData.phone = countryData.dialCode + telInp.cleanVal();
						formData.description += "Страна: " + countryData.name + "\r\n \t";
					}
					else {
						formData.phone = "0000000000";
					}
					if (validateTelegramResult === "valid") {
						formData.telegram = telegramInp.val();
					}
					else {
						formData.telegram = "";
					}
					formData.description += "Тариф: " + tarifInp.val();
					break;
				case "request-call":
					formData.title = "Заказан звонок";
					formData.phone = countryData.dialCode + telInp.cleanVal();
					formData.description += "Страна: " + countryData.name + "\r\n \t";
					formData.telegram = "";
					break;

				case "request-email":
					formData.title = "Запрос уведомления о вебинаре";
					formData.email=emailInp.val();
					break;
			}
			$("body").css("cursor", "progress");

			if(typeof(grecaptcha)!=='undefined'){
				grecaptcha.ready(function () {
					grecaptcha.execute('6LdOHpscAAAAAHJn_n-HRHvnIgaVX6Jb9T4fqdUH', { action: 'submit_form' }).then(function (token) {

						formData.recaptchaResponse = token;
						// Выполняем здесь вызов Ajax
						$.ajax({
							type: "POST",
							url:  form.attr('action'),
							data: formData,
							dataType: "JSON",
							//	dataType: "html",
							encode: true,
							beforeSend: function (data) {
								//console.log(formData);
							}
						}).done(function (idata) {
							console.log('success');
							console.log(idata);
							if(typeof(phpOutputCodes[idata.code]) !== 'undefined'){
								formShowBanner(form, phpOutputCodes[idata.code]);
							}
							else{
								formShowBanner(form, phpOutputCodes['err_default']);
							}
						}).fail(function (idata) {//ошибка php или ответ не получен
							console.log('fail');
							console.log(idata);
							if(typeof(phpOutputCodes[idata.code]) !== 'undefined'){
								formShowBanner(form, phpOutputCodes[idata.code]);
							}
							else{
								formShowBanner(form, phpOutputCodes['err_default']);
							}
						});



					});
				});
			}
			else{
				formShowBanner(form, phpOutputCodes['err_default_internet']);
			}
		}
	});
	// declOfNum(count, ['секунда', 'секунды', 'секунд']);
	function declOfNum(number, titles) {
		cases = [2, 0, 1, 1, 1, 2];
		return titles[ (number%100>4 && number%100<20)? 2 : cases[(number%10<5)?number%10:5] ];
	}


	if($('#coundown').length>0){
		var attrdateTime=$('#coundown').attr('data-event-datetime');
		var date = moment.tz(attrdateTime, "Europe/Moscow");

		var cdDays = $('#coundown-days');
		var cdHours = $('#coundown-hours');
		var cdMinutes = $('#coundown-minutes');
		var cdSeconds = $('#coundown-seconds');
		var cdDaysName = $('#coundown-days-name');
		var cdHoursName = $('#coundown-hours-name');
		var cdMinutesName = $('#coundown-minutes-name');
		var cdSecondsName = $('#coundown-seconds-name');

		$('#coundown').countdown(date.toDate(), function(event) {

			var days=Math.floor(event.offset.totalHours/24);
			cdDays.html(("0" + days).slice(-2));
			cdHours.html(("0" + event.offset.hours).slice(-2));
			cdMinutes.html(("0" + event.offset.minutes).slice(-2));
			cdSeconds.html(("0" + event.offset.seconds).slice(-2));

			cdDaysName.html(declOfNum(days,['день', 'дня', 'дней']));
			cdHoursName.html(declOfNum(event.offset.hours,['час', 'часа', 'часов']));
			cdMinutesName.html(declOfNum(event.offset.minutes,['минута', 'минуты', 'минут']));
			cdSecondsName.html(declOfNum(event.offset.seconds,['секунда', 'секунды', 'секунд']));

		});

	}

});

var defaultErrorMessage='Попробуйте еще раз';
var phpOutputCodes = {
	'err_default': {//err_default - если не получили подходящего ответа от php
		type: 'error',
		message: defaultErrorMessage,
	},
	'err_default_internet': {//err_default - если не получили подходящего ответа от php
		type: 'error',
		message: 'Проверьте интернет-соединение',
	},
	'err_captcha_not_work': {
		type: 'error',
		message: defaultErrorMessage,
	},
	'err_captcha_1': {
		type: 'error',
		message: defaultErrorMessage,
	},
	'err_captcha_2': {
		type: 'error',
		message: defaultErrorMessage,
	},
	'error_validation': {
		type: 'error',
		message: defaultErrorMessage,
	},
	'error_send': {
		type: 'error',
		message: defaultErrorMessage,
	},
	'err_all_bad': {
		type: 'type',
		message: defaultErrorMessage,
	},
	'successful_send': {
		type: 'success',
		message: 'Мы с вами свяжемся в ближайшее время',
		additionalMessage: 'Заявки обрабатываются пн-пт 9:00 - 19:00'
	},
}
function formShowBanner(form, phpOutputCode){
	var bannerContentHtml = '<div class="form-banner_flex"><div class="form-banner_title">' + (phpOutputCode.type==='success'?'Отправлено':'Ошибка') + '</div></div>';
	if (!form.find('.form-banner').length > 0) {
		form.append('<div class="form-banner">' + bannerContentHtml + '</div>');
	}
	else {
		form.find('.form-banner').html(bannerContentHtml)
	}

	var formBanner=form.find('.form-banner');
	var formBannerFlex=form.find('.form-banner_flex');

	if(typeof(phpOutputCode.message) !== 'undefined'){
		formBannerFlex.append('<div class="form-banner_message">'+phpOutputCode.message+'</div>')
	}
	if(typeof(phpOutputCode.additionalMessage) !== 'undefined'){
		formBannerFlex.append('<div class="form-banner_additional-message">'+phpOutputCode.additionalMessage+'</div>')
	}

	formBanner.fadeIn(400);
	$("body").css("cursor", "default");
	if(phpOutputCode.type==='error'){
		formBanner.addClass('form-banner--err');
		setTimeout(function(){
			formBanner.fadeOut(300);
			formBanner.removeClass('form-banner--err');
		},4500);
	}
}

/*
$('form input').change(function(){
	clearErrors($(this));
})*/

function checkNoEmpty(inp) {
	return inp.val().length > 0;
}

/**
 * @param  {} telInp //jquery объект, указывающий на поле для ввода телефона
 */
function validateTel(telInp) {
	if (telInp.hasClass('js-tel-mask-valid')) {
		return "valid";
	}
	else {
		if (checkNoEmpty(telInp)) {
			return "non-completed";
		}
		else {
			return "empty";
		}
	}
}


/**
 * @param  {} emailInp //jquery объект, указывающий на поле для ввода телефона
 */
function validateEmail(emailInp) {
	const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	if (validEmail.test(emailInp.val())) {
		return "valid";
	}
	else {
		if (checkNoEmpty(emailInp)) {
			return "invalid";
		}
		else {
			return "empty";
		}
	}
}


/**
 * @param  {} telegramInp //jquery объект, указывающий на поле для ввода телеграм ника
 *
 * возвращает "valid" "invalid" "empty"
 */
function validateTelegram(telegramInp) {
	const validTelegramNickname = /^[@]{0,1}[A-Za-z\d_]{5,32}$/;
	if (validTelegramNickname.test(telegramInp.val())) {
		return "valid";
	}
	else {
		if (checkNoEmpty(telegramInp)) {
			return "invalid";
		}
		else {
			return "empty";
		}
	}
}
//printError($('.section-form .js-phone-inp'),'test error 1')
function printError(inp, errText) {
	var inpRow;
	if (inp.hasClass('secform-info')) {//ошибку выводим к заголовку группы правил
		inpRow = inp;
	}
	else {//ошибку выводим к оболочке инпута
		inpRow = inp.closest('.secform-inp-row');
	}


	var inpErrContainer;

	var errItemHtml = '<div class="inp-err-item inp-err-item--hidden"><div class="inp-err-item__inner">' + errText + '</div></div>';

	if (!inpRow.find('.inp-err-container').length > 0) {
		inpRow.append('<div class="inp-err-container">' + errItemHtml + '</div>');
		inpRow.find(".inp-err-item").slideDown(200);
	}
	else {
		var errContainer = inpRow.find('.inp-err-container');
		if (errContainer.find('.inp-err-item').length > 0) {
			errContainer.find('.inp-err-item').slideUp(200, function () {
				errContainer.find('.inp-err-item').remove();
				errContainer.html(errItemHtml);
				inpRow.find(".inp-err-item").slideDown(200);
			});
		}
		else {
			errContainer.html(errItemHtml);
			inpRow.find(".inp-err-item").slideDown(200);
		}
	}
}

function clearErrors(inp) {
	var inpRow;
	if (inp.hasClass('secform-info')) {//ошибку выводим к заголовку группы правил
		inpRow = inp;
	}
	else {//ошибку выводим к оболочке инпута
		inpRow = inp.closest('.secform-inp-row');
	}
	var inpErrContainer;

	if (inpRow.find('.inp-err-container').length > 0) {
		var errContainer = inpRow.find('.inp-err-container');
		if (errContainer.find('.inp-err-item').length > 0) {
			errContainer.find('.inp-err-item').slideUp(200, function () {
				errContainer.find('.inp-err-item').remove();
			});
		}
	}
}