(function($) {

	// $('.multiple-items').slick({
	// 	slidesToShow: 2,
	// 	slidesToScroll: 1,
	// 	dots: true,
	// 	arrows: false,
	// });

	$(".owl-carousel").owlCarousel({
		loop:true,
		margin:10,
		nav:true,
		responsive:{
		    0:{
		        items:1
		    },
		    600:{
		        items:1
		    },
		    1000:{
		        items:2
		    }
		}
	});

})(jQuery);