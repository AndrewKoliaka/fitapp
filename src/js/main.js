window.onload = function(){
	var appCarousel = new Carousel('curve_icon_wrapper', 'feature_desc');
	var foodCarousel = new Carousel('time_carousel_el', 'el_desc');
	appCarousel.start();
	foodCarousel.start();

	function menuToggle(){
		var toggleBtn = $('#menu-trigger'),
			toggleMenu = $('.site-nav ul');
		toggleBtn.click(function(){
			toggleMenu.slideToggle(200);
		});
		$(window).resize(function() {
			if ($(window).width() > 992) {
				toggleMenu.removeAttr('style');
			}
		})
	}
	menuToggle();
}