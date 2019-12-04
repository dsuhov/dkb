import $ from "jquery";

$(document).ready(function() {
  const root = $("#s-benefits-1");
  const listToggleBtn = root.find('.benefits-tab-block__case-mb-unfold');
  const toggleBlock = root.find('.benefits-tab-block__case-mb-title-line');

  toggleBlock.click(function() {
    toggleList(listToggleBtn)
  });

  function toggleList(element) {
      
    if (!element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__corner').hasClass('benefits-tab-block__corner--open')) {
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__corner').addClass('benefits-tab-block__corner--open');
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__case-mb-unfold').text('Свернуть');
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__list').slideDown();
    } else {
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__corner').removeClass('benefits-tab-block__corner--open');
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__case-mb-unfold').text('Развернуть');
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__list').closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__list').slideUp();
    }
  }

  if (window.matchMedia('(min-width: 766px)').matches) {
    const statusLine = root.find('.benefits-tab-block__status-line-inner');
    const tabBtn = root.find('.benefits-tab-block__tab-btn');
    
    tabBtn.click(function() {
      if ($(this).attr('id') === 'benefits-tab-btn-2') {
        statusLine.addClass('benefits-tab-block__status-line-inner--shifted');
        $('#benefits-tab-btn-1').removeClass('benefits-tab-block__tab-btn--active');
        $('#benefits-tab-btn-2').addClass('benefits-tab-block__tab-btn--active');
        
        $('#tab-block-tab-content--1').hide();
        $('#tab-block-tab-content--2').css('display', 'flex');
        
      } else {
        statusLine.removeClass('benefits-tab-block__status-line-inner--shifted');
        $('#benefits-tab-btn-2').removeClass('benefits-tab-block__tab-btn--active');
        $('#benefits-tab-btn-1').addClass('benefits-tab-block__tab-btn--active');
        
        $('#tab-block-tab-content--1').css('display', 'flex');
        $('#tab-block-tab-content--2').hide();
      }
    });
    
  } else {
    const tabBlocks = root.find('.benefits-tab-block__tab-content');
    const tabBtns = root.find('.benefits-tab-block__tab-btn');
    let currentBlock = 0;

    root.find('.benefits-tab-block__nav-arrow.nav-arrow--prev, .benefits-tab-block__nav-arrow.nav-arrow--next').click(function() {
      toggleTabBlock();
    });

    function toggleTabBlock() {
      tabBlocks.show();
      tabBtns.show();
      $(tabBlocks[currentBlock]).hide();
      $(tabBtns[currentBlock]).hide();
      currentBlock = currentBlock ? 0 : 1;
    }
  }
  
});


// Простите, времени мало...
$(document).ready(function() {
  const root = $("#s-benefits-2");
  const listToggleBtn = root.find('.benefits-tab-block__case-mb-unfold');
  const toggleBlock = root.find('.benefits-tab-block__case-mb-title-line');

  toggleBlock.click(function() {
    toggleList(listToggleBtn)
  });

  function toggleList(element) {
      
    if (!element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__corner').hasClass('benefits-tab-block__corner--open')) {
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__corner').addClass('benefits-tab-block__corner--open');
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__case-mb-unfold').text('Свернуть');
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__list').slideDown();
    } else {
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__corner').removeClass('benefits-tab-block__corner--open');
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__case-mb-unfold').text('Развернуть');
      element.closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__list').closest('.benefits-tab-block__case-middle-block').find('.benefits-tab-block__list').slideUp();
    }
  }

  if (window.matchMedia('(min-width: 766px)').matches) {
    const statusLine = root.find('.benefits-tab-block__status-line-inner');
    const tabBtn = root.find('.benefits-tab-block__tab-btn');

    tabBtn.click(function() {
      if ($(this).attr('id') === 'benefits2-tab-btn-2') {
        statusLine.addClass('benefits-tab-block__status-line-inner--shifted');
        $('#benefits2-tab-btn-1').removeClass('benefits-tab-block__tab-btn--active');
        $('#benefits2-tab-btn-2').addClass('benefits-tab-block__tab-btn--active');
        
        $('#tab-block2-tab-content--1').hide();
        $('#tab-block2-tab-content--2').css('display', 'flex');
        
      } else {
        statusLine.removeClass('benefits-tab-block__status-line-inner--shifted');
        $('#benefits2-tab-btn-2').removeClass('benefits-tab-block__tab-btn--active');
        $('#benefits2-tab-btn-1').addClass('benefits-tab-block__tab-btn--active');
        
        $('#tab-block2-tab-content--1').css('display', 'flex');
        $('#tab-block2-tab-content--2').hide();
      }
    });
  } else {
    const tabBlocks = root.find('.benefits-tab-block__tab-content');
    const tabBtns = root.find('.benefits-tab-block__tab-btn');
    let currentBlock = 0;

    root.find('.benefits-tab-block__nav-arrow.nav-arrow--prev, .benefits-tab-block__nav-arrow.nav-arrow--next').click(function() {
      toggleTabBlock();
    });

    function toggleTabBlock() {
      tabBlocks.show();
      tabBtns.show();
      $(tabBlocks[currentBlock]).hide();
      $(tabBtns[currentBlock]).hide();
      currentBlock = currentBlock ? 0 : 1;
    }
  }
});