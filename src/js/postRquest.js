import $ from "jquery";

$("#form").submit(function(e) {

  e.preventDefault();

  var form = $(this);
  var url = form.attr('action');
  var form_data = form.serialize();

  $.ajax({
  type: "POST",
  url: url,
  data: form_data,
  success: function() {

    alert("Ваше сообщение отпрвлено!");
  });
});