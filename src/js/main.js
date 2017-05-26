$(document).ready(function () {
	var appCarousel = new Carousel('curve-icon-wrapper', 'feature-desc');
	var foodCarousel = new Carousel('time-carousel-el', 'el-desc');

	var toggleMenu = $('#nav-menu-list');

	appCarousel.start();
	foodCarousel.start(8000);

	$('#menu-trigger').click(function () {
		toggleMenu.slideToggle(200);
	});

	function adaptiveToScreenWidth() {
		var screenWidth = $(window).width();
		var featureDescs = $('.feature-desc');

		if (screenWidth < 768) {
			featureDescs.removeClass('fadeIn').addClass(' slideInRight');
			appCarousel.start(8000);
		} else {
			toggleMenu.removeAttr('style');
			featureDescs.addClass('fadeIn').removeClass(' slideInRight');
		}
	}

	$(window).resize(function () {
		adaptiveToScreenWidth();
	});

	adaptiveToScreenWidth();
});