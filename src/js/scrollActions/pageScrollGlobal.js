import controller from "./initController";
import { Scene } from "scrollmagic";
import $ from "jquery";

export default function() {
  const sectionsIds = ['#reviews', '#team', '#how-to-econom', '#services', '#prices', '#how-to-start'];

  $('.logo-top').click(function() {
    $('html, body').animate({
      scrollTop: 0
  }, 800);
  });

  sectionsIds.forEach(el => {
    const correspondingNavLink = $('.header__nav-list').find(`a[href="${el}"]`)

    correspondingNavLink.click(function(evt) {
      evt.preventDefault();
      var scroll_el = $($(this).attr('href'));

      if ($(scroll_el).length != 0) {
          $('html, body').animate({
              scrollTop: $(scroll_el).offset().top
          }, 800);

          // Сделать закрытие сайд-навигации
      }
    });
    
    new Scene({
      duration: $(el).height(),
      offset: 0,
      triggerElement: el
    })
      .setClassToggle(correspondingNavLink.get(), "nav-link-top--active")
      .addTo(controller);


  });
}