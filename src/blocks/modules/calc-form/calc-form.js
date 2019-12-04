import $ from "jquery";
import "../../../js/external/jquery.formstyler.min";
import SlidingBlock from '../../../js/slidingBlock';

$(document).ready(function() {

  setTimeout(function() {
    $('#taxation-system').styler({
      selectSmartPositioning: false,
      selectVisibleOptions: 10
    });
  
    $('#field_of_activity').styler({
      selectSmartPositioning: false,
      selectPlaceholder: "Выбрать",
      selectVisibleOptions: 10
    });
  }, 100)
  
  new SlidingBlock('#calc-form');

  function rateCalculation() {
    const form = $('.calc-form__form');
    const resultEl = form.find('#calc-form__resuli-number');
    const baseRate = 7500;
    const opsQuantity = $('#calc-form-ops_quantity');
    const emplQuantity = $('#calc-form-empl_quantity');
    let result = baseRate;

    setResult(result);

    function operationsЬultiplier(value) {
      switch (value) {
        // case(value <= 50): return value;
        // case(value >= 51 && value <= 100): return value + (value * 0.3);
        case(value >= 101 && value <= 150): return result + (result * 0.5);
        // case(value >= 151 && value <= 200): return value + (value * 0.3);
        // case(value > 200): return value + (value * 0.3);
        default: return result;
      }
    }

    function setResult(result) {
      resultEl.text(result);
    }

    opsQuantity.keyup(function() {

      if (parseInt($(this).val()) > 0 && emplQuantity.val() > 0) {
        result = baseRate + 3750 + 5000;
      } else if (parseInt($(this).val())) {
        result = baseRate + 3750;
      }

      setResult(result);
    });

    emplQuantity.keyup(function() {

      if ($(this).val() > 0 && opsQuantity.val() > 0) {
        result = baseRate + 3750 + 5000;
      } else if (parseInt($(this).val())) {
        result = baseRate + 5000;
      }

      setResult(result);
    });

    
  }

  rateCalculation();
});