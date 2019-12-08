import $ from "jquery";

$('.s-contacts__title-link').click(function(evt) {
    evt.preventDefault();
    const scroll_el = $($(this).attr('href'));
    
    if ($(scroll_el).length != 0) {
        $('html, body').animate({
            scrollTop: $(scroll_el).offset().top
        }, 500);
    }
});