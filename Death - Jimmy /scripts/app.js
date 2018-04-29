$(document).ready(function(){
	$(".circle2").click(function() {
$( ".circle" ).delay(2000).animate({
    left: [ "50%", "swing" ],
    top: [ "40%", "swing" ]
}, {duration: 2000, easing: "easeInExpo"} );
$( ".circle4" ).delay(2000).animate({
    left: [ "45%", "swing" ],
    top: [ "40%", "swing" ]
}, {duration: 2200, easing: "easeInExpo"} );
$( ".circle3" ).delay(2000).animate({
    left: [ "45%", "swing" ],
    top: [ "40%", "swing" ]
}, {duration: 2400, easing: "easeInExpo"} );

$('.circle2').addClass('upper');

$('.circle2').delay(20000).addClass('upper2');





})



});
