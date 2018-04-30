$(document).ready(function(){     
  $(".start").click(function() {
  $(this).fadeOut("slow");
  $(".circle").fadeIn("slow");
  $(".circle").animate({
    width: "30%",
    height: "30%",
    "padding-bottom": "30%"
  }, 10000);
  $(".circle2").delay(1000).fadeIn("slow");
  $(".circle2").delay(2000).animate({
    left: "-100%",
    top: "-100%"
  }, 10000);
  $(".circle3").delay(500).fadeIn("slow");
  $(".circle3").delay(1000).animate({
    left: "20",
    top: "-100%"
  }, 10000);
  $(".circle5").delay(1000).fadeIn("slow");
  $(".circle5").delay(2000).animate({
    left: "80%",
    top: "-100%"
  }, 10000);
  $(".circle4").delay(500).fadeIn("slow");
  $(".circle4").delay(1000).animate({
    left: "100",
    top: "200%"
  }, 10000);
  $(".circle6").delay(1000).fadeIn("slow");
  $(".circle6").delay(2000).animate({
    left: "50%",
    top: "200%"
  }, 10000);
  $(".circle7").delay(500).fadeIn("slow");
  $(".circle7").delay(1000).animate({
    left: "-100",
    top: "70%"
  }, 10000)
});

});
