import controller from "./initController";
import { Scene } from "scrollmagic";
import $ from "jquery";

export default function() {
  const counter = $('.s-economy__counter');
  const scenes = [];
  let startValue = 900000;
  let countershift = -80;

  if (window.matchMedia('(min-width: 769px)').matches) {
    $('.s-economy__value').each(function() {

      if ($(this).attr('id').slice(-1) === '0') {
        return;
      }
  
      const sceneInst = new Scene({
        triggerElement: this,
      })
        .on('enter', counterHandler.bind(this))
        .addTo(controller);
      
      scenes.push(sceneInst);
    })
    
    function counterHandler() {
      const rect = $(this).offset();
      const rectPrev = $(this).prev().offset();
      const calBLocksHeightDiff = rect.top - rectPrev.top;
      
      const newPlus = $(this).find('.s-economy__data').data('value');
      const elem = $('.s-economy__counter-number');
  
      countershift += calBLocksHeightDiff;
  
      counter.animate({
        top: countershift
      }, {
        duration: 500, 
        easing : "linear",
        start: function() {
          counterAction(newPlus, elem);
        },
        done: () => {
          if (scenes.length === 0 && newPlus == 15000) {
            
            setTimeout(() => {
              setPinScene('.s-economy__values-block');
            }, 1000);
          }
        }
      })
  
      scenes.shift().destroy();
    }
  
    function counterAction(newPlusVal, element) {
      const intVal = parseInt(newPlusVal);
      const valStep = intVal/10;
  
      for (let i = 0, interval = 0; i < 10; i++, interval += 50) {
        setTimeout(function() {
          startValue += valStep;
          element.text(convertNumberToString(startValue));
        }, interval)
      }
    }
  
    function convertNumberToString(value) {
      let reversedArray = value.toString().split('').reverse();
      let newArray = [];
      const forCount = Math.floor(reversedArray.length/3) + 1;
      
      for (let i = 0; i < forCount; i++) {
        newArray.push(reversedArray.splice(0, 3).reverse().join(''));
      }
      
      return newArray.reverse().join(' ');
    }
  
    function setPinScene(element) {
        new Scene({
          triggerElement: element,
          duration: '60%',
          triggerHook: 0
        })
          .setClassToggle('.s-economy__counter', 's-economy__counter--fixed')
          .on('leave', () => {
            $('.s-economy__counter').css('top', '-80px');
          })
          .addTo(controller);
    }
  } else {
    startValue = '1 500 000';
    $('.s-economy__counter-number').text(startValue);
  }
  
  
}