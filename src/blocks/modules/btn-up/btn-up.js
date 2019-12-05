import $ from "jquery";
import controller from "../../../js/scrollActions/initController";
import { Scene } from "scrollmagic";

$(document).ready(function() {

  new Scene({
    duration: 0,
    triggerElement: '.s-features'
  })
    .setClassToggle('.btn-up', "btn-up--active")
    .addTo(controller);

    $('.btn-up').click(function() {
      $('html, body').animate({
        scrollTop: 0
    }, 800);
    });
});