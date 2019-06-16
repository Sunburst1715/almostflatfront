$(function(){

	$('.slider').slick({
		autoplay: true,
		autoplaySpeed: 3000,
		dots: true,
		arrows: false,
		speed: 1000,
	});

	$("#nav_toggle").on("click", function(event) {  
		event.preventDefault();   

		$(this).toggleClass("active"); 
		$(".menu").toggleClass("active");  
		$(".section-first").toggleClass("active");	
	});

	$(".menu__list .menu__item").on("click", function(event) {
		event.preventDefault();

		$(".menu__list .menu__item").removeClass("active");
		$(this).addClass("active");
	});
	
});

