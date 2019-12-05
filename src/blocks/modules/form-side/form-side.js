import $ from "jquery";
import validate from "jquery-validation";

$().ready(function() {
  $.validator.addMethod('checkPhone', (value, element, params) => {

    const result = params.test(value);
    return result; 
  });
  

  $('.form-side__form-content').validate({
    rules: {
      email: {
        required: true,
        email: true
      },
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