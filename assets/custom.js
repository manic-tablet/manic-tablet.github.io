$(document).ready(function () {
  $('#main-nav .nav-item a').on('click', function (e) {
    //alert (this.hash)

    var target = this.hash
    var $target = $(target)

    $('html, body').stop().animate({
      'scrollTop': $target.offset().top - $('#main-nav').outerHeight()
    }, 900)
  })
})
