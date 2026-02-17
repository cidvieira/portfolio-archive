$(document).ready(() => {
  //typed words
  var typed = new Typed('.typed-words', {
    strings: [' music.', ' drinks.', ' gastronomy.'],
    typeSpeed: 80,
    backSpeed: 80,
    backDelay: 3000,
    startDelay: 1000,
    loop: true,
    showCursor: true
  })

  AOS.init({
    duration: 800,
    easing: 'slide',
    once: false
  })

  //close menu mobile
  $('.navbar-nav li a').on('click', () => {
    $('.navbar-collapse').collapse('hide')
  })

  //scroll spy and sticky
  $('body').scrollspy({ target: '#navbar' })

  //menu-shrink
  $(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
      $('.navbar').addClass('shrink')
    } else {
      $('.navbar').removeClass('shrink')
    }
  })

  //scroll-animate
  $('a').on('click', function (event) {
    if (
      this.hash !== '' &&
      this.hash !== '#section-1' &&
      this.hash !== '#section-2'
    ) {
      event.preventDefault()

      var hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        1200
      )
    }
  })

  //viewbox tabs
  $('.thumbnail').viewbox()
  $('.1-thumbnail').viewbox()
  $('.2-thumbnail').viewbox()

  var vb = $('.popup-link').viewbox()
  $('.popup-open-button').click(() => {
    vb.trigger('viewbox.open')
  })
  $('.close-button').click(() => {
    vb.trigger('viewbox.close')
  })

  //carousel
  var owl = $('.owl-carousel')

  owl.owlCarousel({
    items: 4,
    loop: true,
    margin: 10,
    autoplay: true,
    autoplayTimeout: 3000,
    autoplayHoverPause: false,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: false
      },
      600: {
        items: 2,
        nav: false
      },
      1000: {
        items: 3,
        nav: false
      }
    }
  })

  $('.play').on('click', () => {
    owl.trigger('play.owl.autoplay', [5000])
  })

  //datepicker
  $('#date').datepicker({
    format: 'dd/mm/yyyy',
    startDate: '+0d',
    language: 'pt-BR',
    daysOfWeekDisabled: '1,2',
    daysOfWeekHighlighted: '0,3,4,5,6',
    todayHighlight: true
  })
})
