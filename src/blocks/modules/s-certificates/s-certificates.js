import $ from "jquery";
import slick from "slick-carousel";
import tippy, {followCursor} from 'tippy.js';
import magnificPopup from "magnific-popup";


$(document).ready(function() {
    
    $('.s-certificates__js-slider').slick({
        infinite: false,
        slidesToShow: 7,
        slidesToScroll: 3,
        prevArrow: '.s-certificates__nav-arrow.nav-arrow--prev',
        nextArrow: '.s-certificates__nav-arrow.nav-arrow--next',
        responsive: [
            {
                breakpoint: 1122,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 2,
                }
            },
            {
                breakpoint: 765,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            }
        ]
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

    $('.s-certificates__slide').magnificPopup({
        type: 'image',
        delegate: 'a',
        gallery:{
            enabled:true
        }
    });
});