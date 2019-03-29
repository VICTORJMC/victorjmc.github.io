$(document).ready(function(){
  $('.bxslider').bxSlider({
  auto: true,
  autoControls: true,
  stopAutoOnClick: true,
  pager: true,
  slideWidth: 800
});
});

/*var bx1 = $('.bxslider').bxSlider({
      auto: true,
      pause: 2000,
      autoHover: true,
      pager: false
    });

    $('a.trig1').on('click', function(e) {
      e.preventDefault();
      setTimeout(function() {
        bx1.redrawSlider();
      }, 0);
    });*/