import "./import/modules";
import "./import/components";
import "./scrollActions/scrollActionsMain";
import LazyLoad from "vanilla-lazyload";
import IMask from 'imask';

document.addEventListener("DOMContentLoaded", () => {
  var lazyLoadInstance = new LazyLoad({
    elements_selector: "img"
  });

  const phoneInputs = document.querySelectorAll('input[name="phone"]');

  [...phoneInputs].forEach(el => {
    el.setAttribute('value', '+7 ');
    IMask(el, {
      mask: '+{7} (000) 000-00-00'
    })
  });

    
});