// TODO: fix view for different phones
// TODO: test on a tablet in different views
// TODO: clean up code
// TODO: change text to Show Less once drawer is open
// TODO: animate hamburger icon to an x, and change color to white
$(function() {
  $overlay = $('#overlay');
  $nav = $('nav');
  $footerLinks = $('.footer-links li').not(':first');
  
  var animateDrawer = function( drawer, toClose ) {
    toClose.removeClass('open').slideUp();
    
    if ( drawer.hasClass('open') ) {
      drawer.slideUp()
            .removeClass('open');
      $overlay.fadeOut();
    } else {
      drawer.slideDown()
            .addClass('open');
      $overlay.fadeIn();
    }
  };
  
  var closeDrawers = function() {
    $('.open').slideUp().removeClass('open');
    $overlay.fadeOut();
  };
  
  $('.ham-icon').on('click', function() {
    animateDrawer( $nav, $footerLinks );
  });
  
  $('.link-showmore').on('click', function() {
    animateDrawer( $footerLinks, $nav )
  });
  
  $('#overlay').on('click', function() {
    closeDrawers();
  });
});