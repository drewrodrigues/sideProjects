// TODO: fix view for different phones
// TODO: clean up code
$(function() {
  $overlay = $('#overlay');
  $nav = $('nav');
  $footerLinks = $('.footer-links li').not(':first');
  $linkShowMore = $('.link-showmore');
  // this has the text for the lower drawer button
  $linkSub = $('.link-sub').first();

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
    if ( $footerLinks.hasClass('open') ) {
        $linkSub.text('Show Less');
    } else {
        $linkSub.text('Show More');
    }
  });

  $('#overlay').on('click', function() {
    closeDrawers();
  });
});
