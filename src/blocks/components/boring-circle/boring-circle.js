import $ from "jquery";
import slick from "slick-carousel";
import LazyLoad from "vanilla-lazyload";

$(document).ready(function() {

    new LazyLoad({
        elements_selector: ".boring-circle",
        callback_enter: (el) => {
          $(el).addClass('boring-circle--animated')
        }
    });
});