import $ from "jquery";

$(document).ready(function() {
    const root = $("#s-benefits-1");
    const listToggleBtn = root.find('.benefits-tab-block__case-mb-unfold');
    const toggleBlock = root.find('.benefits-tab-block__case-mb-title-line');
    const corner = root.find('.benefits-tab-block__corner');
    const foldingList = root.find('.benefits-tab-block__list');
    const statusLine = root.find('.benefits-tab-block__status-line-inner');
    const tabBtn = root.find('.benefits-tab-block__tab-btn');

    toggleBlock.click(function() {
        toggleList(listToggleBtn)
    });

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
});


// Простите, времени мало...
$(document).ready(function() {
    const root = $("#s-benefits-2");
    const listToggleBtn = root.find('.benefits-tab-block__case-mb-unfold');
    const toggleBlock = root.find('.benefits-tab-block__case-mb-title-line');
    const corner = root.find('.benefits-tab-block__corner');
    const foldingList = root.find('.benefits-tab-block__list');
    const statusLine = root.find('.benefits-tab-block__status-line-inner');
    const tabBtn = root.find('.benefits-tab-block__tab-btn');

    toggleBlock.click(function() {
        toggleList(listToggleBtn)
    });

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
});