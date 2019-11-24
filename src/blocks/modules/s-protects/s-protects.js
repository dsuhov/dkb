import $ from "jquery";
import slick from "slick-carousel";

$(document).ready(function() {
    if (window.matchMedia('(max-width: 765px)').matches) {
        $('.s-protects__title br').replaceWith(' ');
        $('.sp-tab-content__item br').replaceWith(' ');
    }
    
    
    const spSlickInstance = $('.s-protects__slick').slick({
        infinite: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        appendDots: '.s-protects__tabs-btns',
        dotsClass: 's-protects__tab-list',
        adaptiveHeight: true,
        customPaging: function(slider, i) {
            return $(`<button type="button" class="s-protects__tab-btn" />`).text(protectsTemplate[i]);
        },
        speed: 400,
        fade: true,
        responsive: [
            {
                breakpoint: 765,
                settings: {
                    infinite: true,
                    arrows: true,
                    dots: true,
                    nextArrow: '.s-protects__nav-arrow.nav-arrow--prev',
                    prevArrow: '.s-protects__nav-arrow.nav-arrow--next'
                }
            }
        ]
    });

    // const tabBtns = $('.s-protects__tab-btn');
    

    // spSlickInstance.on('afterChange', function(evt) {
    //     const currentSlide = spSlickInstance.slick('slickCurrentSlide');
        
    // })
});

const protectsTemplate = [
    'От штрафов и блокировки счета',
    'От текучки кадров',
    'От конфликтов с главбухом',
    'От утраты бухгалтерской базы',
    'От раскрытия внутренней информации',
]