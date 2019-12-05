import $ from "jquery";

$(document).ready(function() {
    $('.service__nav-arrow.nav-arrow--toggle').click(function() {
        const toggledBlock  = $(this).closest('.service').find('.service__description');
        
        if ($(this).hasClass('nav-arrow--open')) {
            $(this).removeClass('nav-arrow--open');
            
            toggledBlock.slideUp({
                duration: 'slow',
                queue: false,
                start: () => {
                    toggledBlock.animate({
                        opacity: 0
                    }, 600);
                }
            })
        } else {
            $(this).addClass('nav-arrow--open');
            
            toggledBlock.slideDown({
                duration: 'slow',
                queue: false,
                start: () => {
                    toggledBlock.animate({
                        opacity: 1
                    }, 600);
                }
            })
            
        }
    });
    
    const fch = $('.service:first-child .service__description');
    
    fch.slideDown();
    // fch.css('opacity: 1');
    fch.closest('.service').find('.nav-arrow').addClass('nav-arrow--open');
    
    $('.s-services__calc-price-link').click(function(evt) {
        evt.preventDefault();
        const scroll_el = $($(this).attr('href'));
        
        if ($(scroll_el).length != 0) {
            $('html, body').animate({
                scrollTop: $(scroll_el).offset().top
            }, 800);
            
            // Сделать закрытие сайд-навигации
        }
    });
});