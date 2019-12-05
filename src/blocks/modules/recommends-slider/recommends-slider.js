import $ from "jquery";
import slick from "slick-carousel";
import magnificPopup from "magnific-popup";

$(document).ready(function() {

    $('.recommends-slider__slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.recommends-slider__nav-arrow.nav-arrow--prev',
        nextArrow: '.recommends-slider__nav-arrow.nav-arrow--next',
    });

    $('.recommends-slider__link').magnificPopup({
        type: 'image'
    });
});