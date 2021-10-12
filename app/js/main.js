$(function(){

  $('.header__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow-left">`,
    nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="Arrow-right">`,
    asNavFor: '.slider__dotshead'
  });

  $('.slider__dotshead').slick({
    slidesToShow: 4,
    slidesToScroll: 4,
    focusOnSelect: true,
    asNavFor: '.header__slider',
  });
  $('.surf__slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow-left">`,
    nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="Arrow-right">`,
    asNavFor: '.slider-map',
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      },
      {
        breakpoint: 426,
        settings: {
          slidesToShow: 1,
          centerMode: false,
        }
      }
    ]
  });

  $('.slider-map').slick({
    slidesToShow: 8,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: '.surf__slider',
    focusOnSelect: true,
    responsive: [
      {
        breakpoint: 1101,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          centerMode: true,
        }
      },
      {
        breakpoint: 901,
        settings: {
          slidesToShow: 2,
          centerMode: true,
        }
      },
      {
        breakpoint: 701,
        settings: {
          slidesToShow: 1,
          centerMode: true,
        }
      }
    ]
  });
  $('.travel__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow-left">`,
    nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="Arrow-right">`,
  });
  $('.shop__slider').slick({
    infinite: true,
    fade: true,
    prevArrow: `<img class="slider-arrows slider-arrows__left" src="img/arrow-left.svg" alt="Arrow-left">`,
    nextArrow: `<img class="slider-arrows slider-arrows__right" src="img/arrow-right.svg" alt="Arrow-right">`
  });

  $('<div class="quantity-nav"><div class="quantity-button quantity-up"><img src="img/Plus.svg" alt="Plus"></div><div class="quantity-button quantity-down"><img src="img/Minus.svg" alt="Minus"></div></div>').insertAfter('.quantity input');
  $('.quantity').each(function() {
    var spinner = jQuery(this),
      input = spinner.find('input[type="number"]'),
      btnUp = spinner.find('.quantity-up'),
      btnDown = spinner.find('.quantity-down'),
      min = input.attr('min'),
      max = input.attr('max');

    btnUp.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue >= max) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue + 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

    btnDown.click(function() {
      var oldValue = parseFloat(input.val());
      if (oldValue <= min) {
        var newVal = oldValue;
      } else {
        var newVal = oldValue - 1;
      }
      spinner.find("input").val(newVal);
      spinner.find("input").trigger("change");
    });

  });

  $('.quantity-button').on('click', function() {
    let summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1) * $('.summ').data('people')
    $('.summ').html(summ);
  });

  let summ = $('.night').val() * $('.summ').data('night') + ($('.guest').val() - 1) * $('.summ').data('people')
  $('.summ').html(summ);

  $('.surfboard-box__circle').on('click', function() {
    $(this).toggleClass('active');
  });

  $('.menu-btn').on('click', function() {
    $('.menu').toggleClass('active');
  });

  $(function(){
    new WOW().init(); 
  });
  $(window).on('load', function(){

    new WOW().init(); 
  });
});