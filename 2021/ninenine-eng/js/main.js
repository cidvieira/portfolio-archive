AOS.init({
	disable: 'mobile',
	duration: 800
});

//typed
$(function() {
	var typed = new Typed('.typed-words', {
		strings: ["Renovation.", "Construction.","Projects.", "Architecture."],
		typeSpeed: 80,
		backSpeed: 80,
		backDelay: 3000,
		startDelay: 1000,
		loop: true,
		showCursor: true
	});
});

 //close menu mobile
 $(".nav-item a").on('click', () => {
	$(".navbar-collapse").collapse('hide');
});	

//scroll-animate
// document.querySelectorAll("a").forEach( (a) => {
// 	a.addEventListener("click", (event) => {
		
// 			event.preventDefault();
// 		const hash = event.target.getAttribute("href");
		
// 		const scrollTarget = document.querySelector(hash);
		
// 		window.scrollTo(0, scrollTarget.offsetTop);
	
		
// 		console.log(event.target.getAttribute("href"));
// 	});
// });

$("a").on('click', function (event) {

	if (this.hash !== "" ) {

		event.preventDefault();

		var hash = this.hash;

		$('html, body').animate({
			scrollTop: $(hash).offset().top,
		}, 800);
	}
});

//menu-shrink and back-to-top
$('#icon-top').hide();

$(window).scroll(function () {

    var st = $(this).scrollTop();

    if ($(this).scrollTop() >100) {
		$('.fixed-top').addClass('shrink');
        $('#icon-top').fadeIn();
    } else {
		$('.fixed-top').removeClass('shrink');
        $('#icon-top').fadeOut();
    }
});

// carousel-project
$(function() {	
	
	$('.owl-carousel').owlCarousel({
		center: false,
		items: 1,
		loop: true,
		autoWidth:true,
		stagePadding: 0,
		margin: 32,
		autoplay: true,
		smartSpeed: 500,
		nav: true,
		navText: ['<i class="fas fa-long-arrow-alt-left fa-2x"></i>', '<i class="fas fa-long-arrow-alt-right fa-2x"></i>'],
		dots: false,
		responsive:{
			0:{
				items: 1
			},
			600:{
				items: 3
			},
			900:{
				items: 4
			}
		}
	});
		
});

//carousel-client
$('#client-carousel').owlCarousel({
	nav: false,
	loop: true,
	margin:20,
	autoplay: true,
	responsive:{
		0:{
			items:1,
			margin: 0
		},
		600:{
			items:3
		},
		800:{
			items:4
		},
		992:{
			items:4
		},
		1200:{
			items:5
		},
	}
});

//viewbox
$(function(){
            
	$('.thumbnail').viewbox();
	
	var vb = $('.popup-link').viewbox();
	$('.popup-open-button').click(function(){
		vb.trigger('viewbox.open');
	});
	$('.close-button').click(function(){
		vb.trigger('viewbox.close');
	});	
	
});

