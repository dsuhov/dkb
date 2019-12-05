import $ from "jquery";
import magnificPopup from "magnific-popup";

let currentPopup = null;

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

$('[data-popup]').click(function(e) {
  e.preventDefault();

  const popupId = $(this).data('popup');
  const popupEl = $(popupId);
  currentPopup = popupEl;

  $('body').css('overflow', 'hidden');
  $('.btn-up').hide();
  openPopup(popupEl);
});

$('.popup__close').click(function() {
  currentPopup.removeAttr('style');
  currentPopup = null;
  $('body').css('overflow', 'auto');
  $('.btn-up').removeAttr('style');
});

function openPopup(element) {
  element.css(styles);
}

$('#back-to-ea, #popup-compare-back').click(function(e) {

  e.preventDefault();
  currentPopup.removeAttr('style');
  currentPopup = null;
  $('body').css('overflow', 'auto');
});