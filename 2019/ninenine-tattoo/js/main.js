
$('body').scrollspy({ target: '#navbarNav' })

//scroll animate
$(document).ready(function(){

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
            800
          )
        }
    })
});

//menu-sticky and icon-top

$('#icon-top').hide();            

$(window).scroll(function() {
if ($(this).scrollTop() > 50) {
    $('.header-top').addClass('sticky');
    $('#icon-top').fadeIn();                
} else {
    $('.header-top').removeClass('sticky');
    $('#icon-top').fadeOut()

    }
});

// slider-active
$('.slider-active').owlCarousel({
    //smartSpeed:1000,
    margin:0,
    animateOut: 'fadeOut',
    animateIn: 'fadeIn',
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    loop:true,
    navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
    responsive:{
        0:{
            items:1
        },
        450:{
            items:1
        },
        678:{
            items:1
        },
        1000:{
            items:1
        }
    }
})

//slider-area background setting
function sliderBgSetting() {
    if ($(".slider-area .slider-items").length) {
        $(".slider-area .slider-items").each(function() {
            var $this = $(this);
            var img = $this.find(".slider").attr("src");

            $this.css({
                backgroundImage: "url("+ img +")",
                backgroundSize: "cover",
                backgroundPosition: "center center"
            })
        });
    }
}

// slider-active
$(".slider-active").on('translate.owl.carousel', function(){
    $('.single-slider h2').removeClass('fadeInUp animated').hide();
    $('.single-slider p').removeClass('fadeInUp animated-p').hide();
    $('.single-slider a').removeClass('fadeInUp animated-a').hide();
});

$(".slider-active").on('translated.owl.carousel', function(){
    $('.owl-item.active .single-slider h2').addClass('fadeInUp animated').show();
    $('.owl-item.active .single-slider p').addClass('fadeInUp animated-p').show();
    $('.owl-item.active .single-slider a').addClass('fadeInUp animated-a').show();
});

/*WHEN DOCUMENT LOADING*/
	$(window).on('load', function() {

		sliderBgSetting();

    });

//viewbox

$(function(){
            
    $('.1-thumbnail').viewbox();
    $('.2-thumbnail').viewbox();
    $('.3-thumbnail').viewbox();

    (function(){
        var vb = $('.popup-link').viewbox();
        $('.popup-open-button').click(function(){
            vb.trigger('viewbox.open');
        });
        $('.close-button').click(function(){
            vb.trigger('viewbox.close');
        });
    })();
    
});

//booking

$('#date').datepicker({
    format: "dd/mm/yyyy",
    startDate: "+0d",
    language: "pt-BR",
    todayHighlight: true
});