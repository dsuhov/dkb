import $ from "jquery";
import slick from "slick-carousel";

$(document).ready(function() {
  

  $('.ts-tabs__tab').hide();
  $('.ts-tabs__tab').first().show();

  let currSliderInstance = setSlider( $('.ts-tabs__tab').first().find('.ts-slider__js-slider'));

  $('.ts-nav__button').click(function() {
    currSliderInstance.slick('unslick');

    const order = $(this).data('button');
    const currTab = $(`.ts-tabs__tab.ts-tabs__tab--${order}`);

    $('.ts-tabs__tab').hide();
    $(`.ts-tabs__tab.ts-tabs__tab--${order}`).show();

    currSliderInstance = setSlider(currTab.find('.ts-slider__js-slider'));
  });

  function setSlider(container) {
    
    const prev = container.closest('.ts-slider').find('.ts-slider__nav-arrow.nav-arrow--prev');
    const next = container.closest('.ts-slider').find('.ts-slider__nav-arrow.nav-arrow--next');

    const sliderInstance = container.slick({
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 4,
      lazyLoad: 'ondemand',
      prevArrow: prev,
      nextArrow: next,

      responsive: [
        {
          breakpoint: 1122,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
          }
        },
        {
          breakpoint: 765,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 2,
            rows: 2
          }
        }
      ]
    });

    return sliderInstance;
  }

});