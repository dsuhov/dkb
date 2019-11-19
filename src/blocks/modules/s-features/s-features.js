import $ from "jquery";

$(document).ready(function() {
  if (window.matchMedia('(max-width: 768px)').matches) {
    $('.s-features__title br').replaceWith(' ');
    $('.s-feature__description br').replaceWith(' ');
  }
  
});