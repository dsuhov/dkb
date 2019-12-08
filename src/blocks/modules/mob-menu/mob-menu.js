import $ from "jquery";

document.addEventListener("DOMContentLoaded", () => {
  const sectionsIds = ['#reviews', '#team', '#how-to-econom', '#services', '#prices', '#how-to-start'];
  
  const sidedrawer = $('.sidedrawer');
  const backdrop = $('.backdrop');
  
  sectionsIds.forEach(el => {
    const correspondingNavLink = $('.mob-menu__nav').find(`a[href="${el}"]`);
    
    correspondingNavLink.click(function(evt) {
      evt.preventDefault();
      var scroll_el = $($(this).attr('href'));
      
      if (scroll_el.length != 0) {
        $('html, body').animate({
          scrollTop: scroll_el.offset().top
        }, {
          duration: 800,
          start: function() {
            console.log('sagdfgdssg');
            if (sidedrawer.hasClass('sidedrawer--open')) {
              closeSidedrawer();
            }
          }
        });
      }
    });

  });

  function closeSidedrawer() {
    sidedrawer.removeClass('sidedrawer--open');
    backdrop.fadeOut();
    $('body').css('overflow', 'auto');
  }
});

