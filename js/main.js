$(function(){

  $('.slider').slick({
    nextArrow: '<button class="slick-arrow slick-next"><img src="images/next.svg" alt="Стрелка на следующий слайд"></button>',
    prevArrow: '<button class="slick-arrow slick-prev"><img src="images/prev.svg" alt="Стрелка на предыдущий слайд"></button>',
    // Плавное появление слайдов
    fade: true,
    responsive: [
    {
      // Удаление кнопок слайдера при ширине экрана меньше 440px
      breakpoint: 441,
      settings: {
        arrows: false
      }
    }
  ]
  });
});


