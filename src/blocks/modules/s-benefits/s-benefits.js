import $ from "jquery";

$(document).ready(function() {
    const listToggleBtn = $('.benefits-tab-block__case-mb-unfold');
    const corner = $('.benefits-tab-block__corner');
    const foldingList = $('.benefits-tab-block__list');
    const statusLine = $('.benefits-tab-block__status-line-inner');
    const tabBtn = $('.benefits-tab-block__tab-btn');

    listToggleBtn.click(function() {
        toggleList($(this))
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