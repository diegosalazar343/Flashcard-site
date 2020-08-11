$(document).ready(function() {
  $(".clickable").click(function() {
    $("body").removeClass();
    $("#javascript-showing").toggle();
    $("#javascript-hidden").toggle();
  });

  $(".clickclick").click(function(){
    $("body").removeClass();
    $("#operators-showing").toggle();
    $("#operators-hidden").toggle();
  });

  $(".clickme").click(function() {
    $("body").removeClass();
    $("#variables-showing").toggle();
    $("#variables-hidden").toggle();
  });
});

//how to make it change back
