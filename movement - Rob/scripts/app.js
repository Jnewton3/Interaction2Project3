$(document).ready(function() {
  $('.resting').click(function() {
    $('.circle').removeClass('resting');
    $('.circle').animate({
      "padding-bottom": "15%",
      width: "15%",
      height: "15%"
    }, 1500);
    $('.rotater').delay(1800).fadeIn("slow");
    $('.shooter').delay(1800).fadeIn("slow").animate({
      left: "100%",
      top: "0%"
    }, 15000);
    $('.rotater').delay(11800).animate({
      left: "-400%",
    }, 15000);
    $('.rotater').hide(100);
    $('.shooter').hide(100);
    $('.shooter').animate({
      left: "-20%",
      top: "20%"
    }, 1);
    $('.rotater').animate({
      left: "64%",
    }, 1);
    $('.circle').delay(15800).animate({
      "padding-bottom": "30%",
      width: "30%",
      height: "30%"
    }, 1500);
      $("circle").addClass('resting');
  });
});
