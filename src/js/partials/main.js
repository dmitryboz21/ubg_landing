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
      }
   });
   //в href надо "#id_of_popup"
   $('.js-open-popup-inline').magnificPopup({
      type: 'inline',
      closeBtnInside: true,
      mainClass: "myPopupMainClass",
      closeMarkup: '<button title="%title%" type="button" class="mfp-close"><svg class="js-mfp-close-svg" width="57" height="57" viewBox="0 0 57 57" fill="none" xmlns="http://www.w3.org/2000/svg"><line x1="42.544" y1="14.2052" x2="14.2052" y2="42.544" stroke="white" stroke-width="2"/><line x1="14.2086" y1="14.1298" x2="42.5474" y2="42.4686" stroke="white" stroke-width="2"/></svg></button>'

   });

   $('body').on('click', '.js-mfp-close-svg', function(){
      $(this).parent().click();
   });
});

