$(function() {

  /******************
  *** slider-range **
  ******************/
  if ( $(".slider-range").length ) {
    var sliderMin = parseInt( $(".slider-range").attr("data-min") ), //значение дата-атрибута мин
        sliderMax = parseInt( $(".slider-range").attr("data-max") ); //значение дата-атрибута макс

        $(".slider-range").slider({
          range: true,
        min: sliderMin,                    // минимум слайдера
        max: sliderMax,                    // максимум слайдера
        values: [ sliderMin, sliderMax ],  // значение на которое головки встанут
        slide: function( event, ui ) {
          $("#slider-amount").text(ui.values[0] + " м² - " + ui.values[1]+" м²");  //показываем изменение слайдера 
        }
      });

    $("#slider-amount").text(sliderMin + " м² - " + sliderMax+" м²");   //изначальные значения с дата атрибутов
  };


  /******************
  *** scroll-top ****
  ******************/
  $(document).on( 'scroll', function(){

    if ($(window).scrollTop() > 200) {
      $('.scroll-top-wrapper').addClass('show');
    } else {
      $('.scroll-top-wrapper').removeClass('show');
    }
  });

  $('.scroll-top-wrapper').on('click', scrollToTop);

  function scrollToTop() {
    verticalOffset = ( typeof(verticalOffset) != 'undefined' ) ? verticalOffset : 0;
    offset = $('body').offset();
    offsetTop = offset.top;
    $('html, body').animate({scrollTop: offsetTop}, 500, 'linear');
  };

}());







// $(function() {

//   $('.carousel').carousel({
//     interval: 0
//   })

// }());