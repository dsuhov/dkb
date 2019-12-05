import $ from "jquery";
import "../../../js/external/jquery.formstyler.min";
import SlidingBlock from '../../../js/slidingBlock';

$(document).ready(function() {
  
  new SlidingBlock('#s-form-1');
  new SlidingBlock('#s-form-2');

  $('#s-form-1f').validate({
    rules: {
      phone: {
        required: true,
        checkPhone: /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/
      }
    },
    errorClass: "input-base__input-field--non-valid",
    validClass: 'input-base__input-field--valid',
    errorPlacement: () => null,
    highlight: (element, errorClass, validClass) => {
      $(element).parent().addClass(errorClass).removeClass(validClass);
      $(element).parent().addClass(errorClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parent().removeClass(errorClass).addClass(validClass);
    }
  });

  $('#s-form-2f').validate({
    rules: {
      phone: {
        required: true,
        checkPhone: /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/
      }
    },
    errorClass: "input-base__input-field--non-valid",
    validClass: 'input-base__input-field--valid',
    errorPlacement: () => null,
    highlight: (element, errorClass, validClass) => {
      $(element).parent().addClass(errorClass).removeClass(validClass);
      $(element).parent().addClass(errorClass);
    },
    unhighlight: function(element, errorClass, validClass) {
      $(element).parent().removeClass(errorClass).addClass(validClass);
    }
  });
});