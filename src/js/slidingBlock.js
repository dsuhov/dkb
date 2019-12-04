import controller from "./scrollActions/initController";
import { Scene } from "scrollmagic";
import $ from "jquery";


class SlidingBlock {
  constructor(root) {
    this.root = root;
    this.trigger = document.querySelector(root);
    this.formoverlay = this.trigger.querySelector('.sb-overlay');
    this.sliding = this.trigger.querySelector('.' + root.slice(1) + '__sliding');
    
    this.overlayScene = this.setOverlayScene();
    this.topEdgeScene = this.setSlidingScene1()
    this.bottomEdgeScene = this.setSlidingScene2()
    this.triggered = false;
    
    this.events();
  }
  
  events() {
    this.overlayProgress();
    this.setFadingScene();
  }
  
  overlayProgress() {
    this.overlayScene.on("progress", (event) => {
      $(this.formoverlay).css('opacity', `${1 - event.progress}`);
    });
  }
  
  setOverlayScene() {
    return new Scene({
      duration: '80%',
      triggerElement: this.trigger,
      triggerHook: 'onEnter',
    }).addTo(controller);
  }
  
  setSlidingScene1() {
    return new Scene({
      duration: 0,
      triggerElement: this.trigger,
      triggerHook: 1,
    })
    .on('start', (evt) => {
      $(this.sliding).addClass(this.trigger.classList + '__sliding' + '--fixed')
      
      if (evt.scrollDirection == 'REVERSE') {
        $(this.sliding).removeClass(this.trigger.classList + '__sliding' + '--fixed')
      }
    })
    .addTo(controller);
  }
  
  setSlidingScene2() {
    return new Scene({
      duration: 0,
      triggerElement: this.trigger,
      triggerHook: 0,
    })
    .on('start', (evt) => {
      $(this.sliding).removeClass(this.trigger.classList + '__sliding' + '--fixed')
      
      if (evt.scrollDirection == 'REVERSE') {
        $(this.sliding).addClass(this.trigger.classList + '__sliding' + '--fixed')
      }
    })
    .addTo(controller);
  }
  
  setFadingScene() {
    new Scene({
      duration: 0,
      triggerElement: this.trigger,
      triggerHook: 0.2
    })
    .on('start', () => {
      if (!this.triggered) {
        this.fadingAction();
        this.triggered = true;
      }
    })
    .addTo(controller);
  }
  
  fadingAction() {
    const blocks = $(this.trigger).find('.fadeOutUp');
    let timeout = 60;
    
    blocks.each(function(el) {
      
      setTimeout(function() {
        $(blocks[el]).addClass('fadeOutUp--done');
      }, timeout);
      
      timeout += 100;
    });
  }
}

export default SlidingBlock;