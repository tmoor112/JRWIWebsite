// jQuery call to the lightbox method()
$(document).ready(function() {
    $('.gallery a').lightbox();

    // Preloads the images. It still takes a while because of the massive amount of media
    // but it reduces loading time down from 16 seconds to around 8-9
    var links = document.getElementsByTagName("a");
    var i, link, image;
    for( i = 0; i < links.length; i++) {
      link = links[i];
      image = new Image();
      image.src = link.getAttribute("href");
    }
  });