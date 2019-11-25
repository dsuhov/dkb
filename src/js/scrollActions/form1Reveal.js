import controller from "./initController";
import { Scene } from "scrollmagic";
import $ from "jquery";

const formoverlay = $('.s-form-1__overlay');
let contentHeight = $('.s-form-1__content').height();
const form1Els = $('.s-form-1 .fadeOutUp');
let triggered = false;

export default function() {
  const form1Reveal = new Scene({
    duration: '80%',
    triggerElement: ".s-form-1",
    triggerHook: 'onEnter',
  });
  
  form1Reveal
  .addTo(controller);
  
  form1Reveal.on("progress", function(event) {
    formoverlay.css('opacity', `${1 - event.progress}`);
  });
  
  
  // fix and unfix
  new Scene({
    duration: 0,
    triggerElement: ".s-form-1",
    triggerHook: 1,
  })
    .on('start', (evt) => {
      $('.s-form-1__content').css('height', contentHeight + 'px');
      $('.s-form-1__form-sliding').addClass('s-form-1__form-sliding--fixed')

      if (evt.scrollDirection == 'REVERSE') {
        $('.s-form-1__form-sliding').removeClass('s-form-1__form-sliding--fixed')
      }
    })
    .addTo(controller);
  
  new Scene({
    duration: 0,
    triggerElement: ".s-form-1",
    triggerHook: 0,
  })
    .on('start', (evt) => {
      $('.s-form-1__form-sliding').removeClass('s-form-1__form-sliding--fixed')

      if (evt.scrollDirection == 'REVERSE') {
        $('.s-form-1__form-sliding').addClass('s-form-1__form-sliding--fixed')
      }
    })
    .addTo(controller);
  
  // Fade In Form blocks
  new Scene({
    duration: 0,
    triggerElement: ".s-form-1",
    triggerHook: 0.2
  })
  .on('start', function() {
    if (!triggered) {
      showEls();
      triggered = true;
    }
  })
  .addTo(controller);
}

function showEls() {
  let timeout = 50;
  form1Els.each(function(el) {
    
    setTimeout(function() {
      $(form1Els[el]).addClass('fadeOutUp--done');
    }, timeout);
    timeout += 100;
  });
  
}