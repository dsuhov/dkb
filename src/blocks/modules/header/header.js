import $ from "jquery";

$(document).ready(function() {
  const burger = $('.header__burger');
  const sidedrawer = $('.sidedrawer');
  const sidedrawerClose = $('.sidedrawer__close-btn');
  const backdrop = $('.backdrop');

  burger.click(openSidedrawer);
  sidedrawerClose.click(closeSidedrawer);

  backdrop.click(closeSidedrawer);

  function openSidedrawer() {
    sidedrawer.addClass('sidedrawer--open');
    backdrop.fadeIn();
    $('body').css('overflow', 'hidden');
  }

  function closeSidedrawer() {
    sidedrawer.removeClass('sidedrawer--open');
    backdrop.fadeOut();
    $('body').css('overflow', 'auto');
  }

  $('.top-screen__subtitle br').replaceWith(' ');
});