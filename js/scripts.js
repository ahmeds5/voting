$(document).ready(function() {
  $("#blank form").submit(function(event) {
    var inputedAge = parseInt($("input#age").val());

    if (inputedAge >= 18) {
      $(".minor").hide();
      $(".adult").slideDown();
    } else {
      $(".adult").hide();
      $(".minor").slideDown();
    }
    event.preventDefault();
  })
});
