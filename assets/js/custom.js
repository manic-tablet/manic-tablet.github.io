$(document).ready(function () {
  $('#main-nav .nav-item a').on('click', function (e) {
    //alert (this.hash)

    $('#main-nav .navbar-toggler').removeClass('collapsed')
    $('#navbarSupportedContent').removeClass('show')

    var target = this.hash
    var $target = $(target)

    $('body.frontpage').stop().animate({
      'scrollTop': $target.offset().top - $('#main-nav').outerHeight()
    }, 900)
  })

  $('#mainCarousel .carousel-caption a').on('click', function(e) {
    var target = this.hash
    var $target = $(target)

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - $('#main-nav').outerHeight()
    }, 900)
  })

  $('#main-nav .nav-item a[href="#about"]').removeClass('active')
  $('[data-spy="scroll"]').each(function () {
  var $spy = $(this).scrollspy('refresh')
})
})
