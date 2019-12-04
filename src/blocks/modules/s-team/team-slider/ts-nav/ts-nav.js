import $ from "jquery";

$(document).ready(function() {
  const pointerLine = $('.ts-nav__pointer-line');
  const initialOffset = pointerLine.offset().left;

  pointerLine.css('width', $('.ts-nav__button').first().width() + 'px');

  $('.ts-nav__button').click(function() {
      let shift = $(this).offset().left - initialOffset;

      if (window.matchMedia('(max-width: 765px)').matches) {
        shift = $(this).offset().left + $('.team-slider__nav').scrollLeft() - initialOffset;
      }


      pointerLine.css('left', shift + 'px');
      pointerLine.css('width', $(this).width() + 'px');
  });
});