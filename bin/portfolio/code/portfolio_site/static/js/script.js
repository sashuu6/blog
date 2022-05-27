/*----------------------------------------------------------------

	Template Name: Ethant Hunt - HTML Template 
	Version: 1.0

	-------------------------------------------------------------------------------*/

/**************************************************************
	
	Main Js Activation
	01. Preloader 
	02. Menu 
	03. Pagepiling
	04. Typed Text
	05. Parallax
	06. Carousels
	07. Ajax Forms
	__ End Js Activation

***************************************************************/

(function ($) {
	'use strict';

	/*-------------------------------------------------------------------------------
	  Preloader
	-------------------------------------------------------------------------------*/

	$(window).on('load', function() {
		if ( $('.preloader').length ) {
			$('.preloader').fadeOut('slow');
		}

		if ( $('.a-intro').length ) {
			$('.a-intro').addClass('active');
		}
	});



	/*-------------------------------------------------------------------------------
	  Menu
	-------------------------------------------------------------------------------*/

	$('.a-nav-toggle').on('click', function(){
		if ($('html').hasClass('body-menu-opened')) {
			$('html').removeClass('body-menu-opened').addClass('body-menu-close');
		} else {
			$('html').addClass('body-menu-opened').removeClass('body-menu-close');
		}
	});



	/*-------------------------------------------------------------------------------
	  Pagepiling
	-------------------------------------------------------------------------------*/

	localStorage.setItem('website_name', document.title);
	// anchors: ['Home', 'About', 'Skills', 'Resume', 'Portfolio', 'Awards', 'Testimonials', 'Clients', 'Contact'],
	if ( $('.a-pagepiling').length ) {
		$('.a-pagepiling').pagepiling({
			scrollingSpeed: 280,
			menu: '#menu, #menuMain',
			anchors: ['Home', 'About', 'Skills', 'Resume', 'Portfolio', 'Awards', 'Clients', 'Contact'],
			loopTop: false,
			loopBottom: false,
			navigation: {
				'position': 'right'
			},
			onLeave: function(){
				// $('canvas').removeClass('d-none');
				$('#sashwat-text-logo').addClass('infinite');
				$('.a-progressbar .progress-bar').each(function() {
					if ($('.slide-skills').hasClass('active')) {
						$(this).width($(this).attr('aria-valuenow') + '%');
					} else {
						$(this).width('0');
					}
				});

				typedText();
			},
			afterLoad: function(anchorLink, index) {
				if(anchorLink != 'Home')
					$(document).prop('title', localStorage.getItem('website_name') + " - " + anchorLink);
				else
					$(document).prop('title', localStorage.getItem('website_name'));
				// if(anchorLink == 'Portfolio'){
				// 	$('canvas').addClass('animated');
				// 	$('canvas').addClass('fadeOutDown');
				// 	setTimeout(function(){
				// 		$('canvas').addClass('d-none');
				// 		$('canvas').removeClass('animated');
				// 		$('canvas').removeClass('fadeOutDown');
				// 	}, 1500);
				// }
				setTimeout(function(){$('#sashwat-text-logo').removeClass('infinite')}, 1500);
			}
		});
	}



	/*-------------------------------------------------------------------------------
	  Typed Text
	-------------------------------------------------------------------------------*/

	function typedText() {
		$('.a-slide-typed').each(function() {
			var thisSlide = $(this);
			if (thisSlide.hasClass('active')) {
				var typedDiv = '.a-typed-' + thisSlide.data('name');
				$(typedDiv).html('');
				var typedText = thisSlide.find('.a-typed').data('text');

				var typedT = new Typed(typedDiv, {
					strings: [
						typedText
					],
					typeSpeed: 60,
					startDelay: 1000,
					loop: false,
					showCursor: false
				});
			}
		});
	}

	$(window).load(function () {
		typedText();
	});



	/*-------------------------------------------------------------------------------
	  Parallax
	-------------------------------------------------------------------------------*/

	if ( $('#a-parallax').length ) {
		var scene = document.getElementById('a-parallax');
		var parallax = new Parallax(scene);
	}



	/*-------------------------------------------------------------------------------
	  Carousels
	-------------------------------------------------------------------------------*/

	if ( $('.a-portfolio-carousel').length ) {
		var owl = $('.a-portfolio-carousel');
		owl.owlCarousel({
			items: 4,
			smartSpeed: 750,
			margin: 30,
			autoplayHoverPause: false,
			dots: true,
			nav: false,
			dotData: false,
			loop:true,
			responsive:{
				0:{
					items: 1
				},
				600:{
					items: 2
				},
				900:{
					items: 4
				}
			}
		});
	}

	if ( $('.a-testimonial-carousel').length ) {
		var owl = $('.a-testimonial-carousel');
		owl.owlCarousel({
			items: 1,
			smartSpeed: 750,
			margin: 30,
			autoplayHoverPause: true,
			dots: true,
			nav: false
		});
	}



	/*-------------------------------------------------------------------------------
	  Ajax Forms
	-------------------------------------------------------------------------------*/

	if ($('.a-form').length) {
		$('.a-form').each(function(){
			$(this).validate({
				errorClass: 'error',
				submitHandler: function(form){
					$.ajax({
						type: "POST",
						url:"mail.php",
						data: $(form).serialize(),
						success: function() {
							$('.form-group-message').show();
							$('#error').hide();
							$('#success').show();
						},
						error: function(){
							$('.form-group-message').show();
							$('#success').hide();
							$('#error').show();
						}
					});
				}
			});
		});
	}

	let W = window.innerWidth;
	let H = window.innerHeight;
	const canvas = document.getElementById("canvas");
	const context = canvas.getContext("2d");
	const maxConfettis = 80;
	const particles = [];

	const possibleColors = [
		"DodgerBlue",
		"OliveDrab",
		"Gold",
		"Pink",
		"SlateBlue",
		"LightBlue",
		"Gold",
		"Violet",
		"PaleGreen",
		"SteelBlue",
		"SandyBrown",
		"Chocolate",
		"Crimson"
	];

	function randomFromTo(from, to) {
		return Math.floor(Math.random() * (to - from + 1) + from);
	}

	function confettiParticle() {
		this.x = Math.random() * W; // x
		this.y = Math.random() * H - H; // y
		this.r = randomFromTo(11, 33); // radius
		this.d = Math.random() * maxConfettis + 11;
		this.color =
			possibleColors[Math.floor(Math.random() * possibleColors.length)];
		this.tilt = Math.floor(Math.random() * 33) - 11;
		this.tiltAngleIncremental = Math.random() * 0.07 + 0.05;
		this.tiltAngle = 0;

		this.draw = function() {
			context.beginPath();
			context.lineWidth = this.r / 2;
			context.strokeStyle = this.color;
			context.moveTo(this.x + this.tilt + this.r / 3, this.y);
			context.lineTo(this.x + this.tilt, this.y + this.tilt + this.r / 5);
			return context.stroke();
		};
	}

	function Draw() {
		const results = [];

		// Magical recursive functional love
		requestAnimationFrame(Draw);

		context.clearRect(0, 0, W, window.innerHeight);

		for (var i = 0; i < maxConfettis; i++) {
			results.push(particles[i].draw());
		}

		let particle = {};
		let remainingFlakes = 0;
		for (var i = 0; i < maxConfettis; i++) {
			particle = particles[i];

			particle.tiltAngle += particle.tiltAngleIncremental;
			particle.y += (Math.cos(particle.d) + 3 + particle.r / 2) / 2;
			particle.tilt = Math.sin(particle.tiltAngle - i / 3) * 15;

			if (particle.y <= H) remainingFlakes++;

			// If a confetti has fluttered out of view,
			// bring it back to above the viewport and let if re-fall.
			if (particle.x > W + 30 || particle.x < -30 || particle.y > H) {
				particle.x = Math.random() * W;
				particle.y = -30;
				particle.tilt = Math.floor(Math.random() * 10) - 20;
			}
		}

		return results;
	}

	window.addEventListener(
		"resize",
		function() {
			W = window.innerWidth;
			H = window.innerHeight;
			canvas.width = window.innerWidth;
			canvas.height = window.innerHeight;
		},
		false
	);

	// Push new confetti objects to `particles[]`
	for (var i = 0; i < maxConfettis; i++) {
		particles.push(new confettiParticle());
	}

	// Initialize
	canvas.width = W;
	canvas.height = H;

	const date = new Date();
	if(date.getDate() == 5 && date.getMonth() == 10)
		Draw();

}($));
