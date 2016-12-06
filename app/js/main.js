$(function() {

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

}());

