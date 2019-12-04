import $ from "jquery";
import slick from "slick-carousel";

$(document).ready(function() {

    $('.recommends-slider__slick').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.recommends-slider__nav-arrow.nav-arrow--prev',
        nextArrow: '.recommends-slider__nav-arrow.nav-arrow--next',
        // dots: true,
        // appendDots: '.s-protects__tabs-btns',
        // dotsClass: 's-protects__tab-list',
        // customPaging: function(slider, i) {
        //     return $(`<button type="button" class="s-protects__tab-btn" />`).text(protectsTemplate[i]);
        // },
        // speed: 400,
        // fade: true,
        // responsive: [
        //     {
        //         breakpoint: 765,
        //         settings: {
        //             infinite: true,
        //             arrows: true,
        //             dots: true,
        //             nextArrow: '.s-protects__nav-arrow.nav-arrow--prev',
        //             prevArrow: '.s-protects__nav-arrow.nav-arrow--next'
        //         }
        //     }
        // ]
    });
});