// jQuery call to the bxSlider() method.
$(document).ready(function() {
    $("#slider").bxSlider({
        preloadImages: "all",
        minSlides: 1,
        maxSlides: 1,
        slideMargin: 20,
        moveSlides: 1,
        adaptiveHeight: true,
        pager: false,
    });

    //Preload the images using Murach's method shown in the textbook
    var links = document.getElementsByTagName("a");
    var i, link, image;
    for( i = 0; i < links.length; i++) {
      link = links[i];
      image = new Image();
      image.src = link.getAttribute("href");
    }
});