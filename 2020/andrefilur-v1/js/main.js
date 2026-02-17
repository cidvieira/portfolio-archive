$(document).ready(() => {
  AOS.init({
    disable: 'mobile',
    duration: 800
  })

  //close menu mobile
  $('.navbar-nav li a').on('click', () => {
    $('.navbar-collapse').collapse('hide')
  })

  //scroll spy
  $('body').scrollspy({ target: '#navbar' })

  //menu-shrink and back-to-top
  $('#icon-top').hide()

  $(window).scroll(() => {
    if ($(window).scrollTop() > 50) {
      $('.fixed-top').addClass('shrink')
      $('#icon-top').fadeIn()
    } else {
      $('.fixed-top').removeClass('shrink')
      $('#icon-top').fadeOut()
    }
  })

  //scroll-animate
  $('a').on('click', function (event) {
    if (
      this.hash !== '' &&
      this.hash !== '#section-ab1' &&
      this.hash !== '#section-ab2' &&
      this.hash !== '#section-1' &&
      this.hash !== '#section-2' &&
      this.hash !== '#section-3' &&
      this.hash !== '#section-4' &&
      this.hash !== '#section-5' &&
      this.hash !== '#section-6' &&
      this.hash !== '#section-7' &&
      this.hash !== '#section-8' &&
      this.hash !== '#section-ord1' &&
      this.hash !== '#section-ord2'
    ) {
      event.preventDefault()

      var hash = this.hash

      $('html, body').animate(
        {
          scrollTop: $(hash).offset().top
        },
        1000
      )
    }
  })

  //box artwork
  $('#artworks .tab-content section').append(
    '<svg class="bi bi-x" width="1em" height="1em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M11.854 4.146a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708-.708l7-7a.5.5 0 0 1 .708 0z"/><path fill-rule="evenodd" d="M4.146 4.146a.5.5 0 0 0 0 .708l7 7a.5.5 0 0 0 .708-.708l-7-7a.5.5 0 0 0-.708 0z"/></svg>'
  )

  $('.tab-content .bi-x').on('click', () => {
    $('#art1').click()
  })

  //viewbox tabs
  $('.2-thumbnail').viewbox()
  $('.3-thumbnail').viewbox()
  $('.4-thumbnail').viewbox()
  $('.5-thumbnail').viewbox()
  $('.6-thumbnail').viewbox()
  $('.7-thumbnail').viewbox()
  $('.8-thumbnail').viewbox()

  var vb = $('.popup-link').viewbox()
  $('.popup-open-button').click(() => {
    vb.trigger('viewbox.open')
  })
  $('.close-button').click(() => {
    vb.trigger('viewbox.close')
  })

  //viewbox video
  MediaBox('.box-video')
})
