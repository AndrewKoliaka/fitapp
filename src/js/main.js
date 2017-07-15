$(document)
  .ready(function () {
    var appCarousel = new Carousel('curve-icon-wrapper', 'feature-desc');
    var foodCarousel = new Carousel('carousel-el', 'carousel-el-desc');

    var toggleMenu = $('.nav-menu');

    appCarousel.start();
    foodCarousel.start(8000);

    $('.site-nav__menu-trigger').click(function () {
      toggleMenu.slideToggle(200);
    });

    function adaptiveToScreenWidth() {
      var screenWidth = $(window).width();
      var featureDescs = $('.feature-desc');

      screenWidth < 768
        ? appCarousel.start(8000)
        : toggleMenu.removeAttr('style');
    }

    $(window)
      .resize(function () {
        adaptiveToScreenWidth();
      });

    adaptiveToScreenWidth();
  });