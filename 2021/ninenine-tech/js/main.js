AOS.init({
  disable: 'mobile',
  duration: 800
})

//close menu mobile
$('.nav-item a').on('click', () => {
  $('.navbar-collapse').collapse('hide')
})

//scroll-animate
$('a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault()

    var hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    )
  }
})

//menu-shrink and back-to-top
$('#icon-top').hide()

$(window).scroll(function () {
  if ($(this).scrollTop() > 50) {
    $('nav').addClass('shrink')
  } else {
    $('nav').removeClass('shrink')
  }
})

var swiper = new Swiper('.client-slider', {
  slidesPerView: 3,
  spaceBetween: 20,
  slidesPerGroup: 1,
  loop: true,
  loopFillGroupWithBlank: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false
  },
  breakpoints: {
    768: {
      slidesPerView: 3,
      spaceBetween: 20
    },
    992: {
      slidesPerView: 5,
      spaceBetween: 20
    }
  },
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev'
  }
})
