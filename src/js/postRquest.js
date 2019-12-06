import $ from "jquery";

export default function postReq(form, event) {
  event.preventDefault();

  const formPopup = $(form).data('afterpopup');
  
  $.ajax({
    type: "POST",
    url: $(form).attr('action'),
    data: $(form).serialize(),
    success: function() {
      
      if (formPopup) {
        if (window.currentPopup) {
          window.currentPopup.removeAttr('style');
          window.currentPopup = null;
          $('body').css('overflow', 'auto');
          $('.btn-up').removeAttr('style');
        }

        const popupEl = $(formPopup);
        window.currentPopup = popupEl;
      
        $('body').css('overflow', 'hidden');
        $('.btn-up').hide();
        openPopup(popupEl);
      }

      console.log("Ваше сообщение отпрвлено!");
      
    },
    error:  function() {
      alert('Возникла ошибка');
    }
  });
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

function openPopup(element) {
  element.css(styles);
}