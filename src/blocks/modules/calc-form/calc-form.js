import $ from "jquery";
import "../../../js/external/jquery.formstyler.min";
import SlidingBlock from '../../../js/slidingBlock';
// import validate from "jquery-validation";
import validate from "../../../js/validate";

$(document).ready(function() {
  validate('#calc-form__form');
  
  if (window.matchMedia('(min-width: 400px)').matches) {
    // $('#optionsmalldev').css('color', 'rgba(255, 255, 255, 0.4)');
    
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
    }, 100);
  }

  // $('#calc-form__form').validate({
  //   rules: {
  //     email: {
  //       required: true,
  //       email: true
  //     },
  //     phone: {
  //       required: true,
  //       checkPhone: /\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}/
  //     }
  //   },
  //   errorClass: "input-base__input-field--non-valid",
  //   validClass: 'input-base__input-field--valid',
  //   errorPlacement: () => null,
  //   highlight: (element, errorClass, validClass) => {
  //     $(element).parent().addClass(errorClass).removeClass(validClass);
  //     $(element).parent().addClass(errorClass);
  //   },
  //   unhighlight: function(element, errorClass, validClass) {
  //     $(element).parent().removeClass(errorClass).addClass(validClass);
  //   }
  // });
  
  [...document.querySelectorAll('.dkb-select__select-field')].forEach(element => {
    element.addEventListener('transitionend', (evt) => {
      if (evt.propertyName === 'opacity') {
        $(element).removeClass('fadeOutUp fadeOutUp--done');
      }
    })
  });
  
  new SlidingBlock('#calc-form');
  
  function rateCalculation() {
    const form = $('.calc-form__form');
    const resultEl = form.find('#calc-form__resuli-number');
    const baseRate = 10000;

    const taxSystemField = $('#taxation-system');
    const opsQuantity = $('#calc-form-ops_quantity');
    const actField = $('#field_of_activity');
    const emplQuantity = $('#calc-form-empl_quantity');

    $('#taxation-system, #field_of_activity, #calc-form-ops_quantity, #calc-form-empl_quantity').change(function(evt) {
      console.log(taxSystemField.val());
      const actFieldVal = actField.val();
      const selects = calcSelects(taxSystemField.val(), actField.val() ? actField.val() : 'default');
      const coeffOps = opsQuantity.val() ? operationsЬultiplier(parseInt(opsQuantity.val()), selects) : 0 ;
      const coeffEmployee = emplQuantity.val() ? parseInt(emplQuantity.val()) * 500 : 0;
      
      
      setResult(selects + coeffOps + coeffEmployee);
    });

    function calcSelects(system, area) {
      const taxSystemData = taxSystem(system);

      if (area === 'default') {
        return taxSystemData[0][1];
      } else if (area === 'Торговля') {
        return  taxSystemData[1][1];
      } else {
        return  taxSystemData[2][1];
      }
    }

    function taxSystem(system) {
      switch (system) {
        case ('ОСН (НДС)'): return [
          [['default'], 10000],
          [['Торговля'], 12000],
          [['Производство', 'Строительство', 'Медицина', 'Общепит', 'Другое'], 15000],
        ];
        case ('УСН 6% (доход)'): return [
          [['default'], 7500],
          [['Торговля'], 9500],
          [['Производство', 'Строительство', 'Медицина', 'Общепит', 'Другое'], 12500],
        ];
        case ('УСН 15% (доход/расход)'): return [
          [['default'], 8500],
          [['Торговля'], 10500],
          [['Производство', 'Строительство', 'Медицина', 'Общепит', 'Другое'], 12500],
        ];
        case ('Патент'): return [
          [['default'], 9000],
          [['Торговля'], 9000],
          [['Производство', 'Строительство', 'Медицина', 'Общепит', 'Другое'], 9000],
        ];
        case ('Другое'): return [
          [['default'], 10000],
          [['Торговля'], 12000],
          [['Производство', 'Строительство', 'Медицина', 'Общепит', 'Другое'], 15000],
        ];
        default: throw new Error('Система налогооблажения барахлит');
      }
    };
    // events

    
    function operationsЬultiplier(ops, sum) {
    console.log(ops, sum);
    
      switch (true) {
        case (ops <= 50): return 0;
        case (ops >= 51 && ops <= 100): return (sum * 0.3);
        case (ops >= 101 && ops <= 150): return (sum * 0.5);
        case (ops >= 151 && ops <= 200): return (sum * 0.6);
        case (ops > 200): return (ops * 45);
        default: return 0;
      }
    }
    
    function setResult(result) {
      resultEl.text(result);
      $('#calculated_value').val(result);
    }
  
      
      setResult(baseRate);
    };

    rateCalculation();
});