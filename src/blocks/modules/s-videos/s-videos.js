import $ from "jquery";
import slick from "slick-carousel";
import LazyLoad from "vanilla-lazyload";

$(document).ready(function() {
    
    $('.s-videos__slider').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.s-videos__nav-arrow.nav-arrow--prev',
        nextArrow: '.s-videos__nav-arrow.nav-arrow--next'
    });

    new LazyLoad({
        elements_selector: ".s-videos__video",
        callback_enter: (el) => {
            const data = $(el).data('src');
            $(el).attr('src', data);
        }
    });
});