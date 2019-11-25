import $ from "jquery";
import slick from "slick-carousel";
import tippy, {followCursor} from 'tippy.js';

window.jQuery = $;
require("@fancyapps/fancybox");

$(document).ready(function() {
    
    $('.s-certificates__js-slider').slick({
        infinite: true,
        slidesToShow: 7,
        slidesToScroll: 3,
        prevArrow: '.s-certificates__nav-arrow.nav-arrow--prev',
        nextArrow: '.s-certificates__nav-arrow.nav-arrow--next'
    });

    tippy('.s-certificates__slide-content', {
        content: "Увеличить",
        allowHTML: false,
        followCursor: true,
        theme: 'dkb',
        arrow: false,
        offset: "35, -38",
        plugins: [followCursor],
     });
});