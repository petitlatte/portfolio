$( document ).ready(function() {


	    //VIEW PORTFOLIO BUTTON JS

	$(".btn").click(function() {
    $('html,body').animate({
    scrollTop: $(".conC").offset().top},
    'slow');
	});

	//RESPONSIVE NAVBAR 

    $(".headC").click(function(){
    	$(".headB").slideToggle();
	});

	//NAV BAR JS 

	$(".about").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".conB").offset().top},
	        'slow');
	});


	$(".portfolio").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".conC").offset().top},
	        'slow');
	});

	$(".contact").click(function() {
	    $('html,body').animate({
	        scrollTop: $(".conD").offset().top},
	        'slow');
	});

// Instantiate new modal
var modal = new Custombox.modal({
  content: {
    effect: 'fullscreen',
    target: '#ex1'
  }
});

// Open
modal.open();
});