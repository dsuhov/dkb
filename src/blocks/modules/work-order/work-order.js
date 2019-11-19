import $ from "jquery";

$(document).ready(function() {
  if (window.matchMedia('(max-width: 375px)').matches) {
    $('.work-order__title br').replaceWith(' ');
    $('.worder-item__content-block br').replaceWith(' ');
  }
  
});