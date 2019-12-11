import $ from "jquery";
import controller from "../../../js/scrollActions/initController";
import { Scene } from "scrollmagic";

$(document).ready(function() {

  if (window.matchMedia('(min-width: 376px)').matches) {
    const shScene = new Scene({
      duration: "100%",
      triggerElement: '#calc-form',
      triggerHook: 0.5
    })
      .setClassToggle('.side-hint', "side-hint--active")
      .addTo(controller);
  } else {
    const shScene = new Scene({
      duration: `${$('#calc-form').height()}px`,
      triggerElement: '#calc-form',
      triggerHook: 0.5
    })
      .setClassToggle('.side-hint', "side-hint--active")
      .addTo(controller);
  }

  


  const sideHint = $('.side-hint');
  const shClose = $('.side-hint__close');

  shClose.click(function() {
    sideHint.removeClass('side-hint--active');
    shScene.destroy();
  });

  $('.side-hint__body').click(function() {
    sideHint.removeClass('side-hint--active');
    // shScene.destroy();
    if (window.currentPopup) {
      window.currentPopup.removeAttr('style');
      window.currentPopup = null;
      $('body').css('overflow', 'auto');
      $('.btn-up').removeAttr('style');
    }
    
    const popupEl = $("#popup-compare");
    window.currentPopup = popupEl;

    $('body').css('overflow', 'hidden');
    $('.btn-up').hide();

    openPopup(popupEl);
  });

  function openPopup(element) {
    element.css(styles);
  }

  const styles = {
    position: 'fixed',
    left: '0',
    top: '0',
    zIndex: '5000',
    display: 'block',
    width: '100vw',
    height: '100vh',
    overflow: 'auto'
  };
});