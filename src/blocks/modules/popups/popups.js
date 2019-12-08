import $ from "jquery";
import magnificPopup from "magnific-popup";
import validate from "../../../js/validate";
import ouibounce from "ouibounce";
import req from "../../../js/postRquest";

$(document).ready(function() {
  validate('#popup__consult_form');
  validate('#popup__call_fb_form');
  validate('#popup-feedback1_form');
  validate('#popup-feedback1');
  validate('#popup_call_01');
  validate('#popup02_form');
  validate('#popup03_form');
  // exitpopup();
});

window.currentPopup = null;

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

$('#popup-feedback01 .popup__notice').click(function() {
  window.currentPopup.removeAttr('style');
  window.currentPopup = null;
  $('body').css('overflow', 'auto');
  $('.btn-up').removeAttr('style');
  
  const popupEl = $("#popup02");
  window.currentPopup = popupEl;
  
  $('body').css('overflow', 'hidden');
  $('.btn-up').hide();
  
  openPopup(popupEl);
});

$('[data-popup]').click(function(e) {
  e.preventDefault();
  
  const popupId = $(this).data('popup');
  const popupEl = $(popupId);
  window.currentPopup = popupEl;
  
  $('body').css('overflow', 'hidden');
  $('.btn-up').hide();
  openPopup(popupEl);
});

$('.popup__close').click(function() {
  if ($(this).closest('section.popup').attr('id') !== 'popup-exit-s') {
    window.currentPopup.removeAttr('style');
    window.currentPopup = null;
    $('body').css('overflow', 'auto');
    $('.btn-up').removeAttr('style');
  }
});

function openPopup(element) {
  element.css(styles);
}

$('#back-to-ea, #popup-compare-back').click(function(e) {
  
  e.preventDefault();
  window.currentPopup.removeAttr('style');
  window.currentPopup = null;
  $('body').css('overflow', 'auto');
  
  if ($(this).attr('id') === 'popup-compare-back') {
    const scroll_el = $('#s-form-1');
    
    if ($(scroll_el).length != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top
      }, 800);
    }
  }
});


//exit popup
function exitpopup() {
  const popup = document.getElementById('popup-exit-s');
  const popupForm = $('#popup-exit-s-form');

  ouibounce(popup, {
    aggressive: true,

    callback: function() {
      
      $.magnificPopup.open({
        items: {
          src: '#popup-exit-s'
        },
        type: 'inline',
        showCloseBtn: false
      }, 0);
    }
  });

  popupForm.submit(function(evt) {
    req(popupForm.get(), evt);
  });
  
  $(popup).find('.popup__close').click(function() {
    $.magnificPopup.close();
  });
};