jQuery(function ($) {
    'use strict';

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar-area').addClass("is-sticky");
        }
        else{
            $('.navbar-area').removeClass("is-sticky");
        }
    });

    // Header Sticky
    $(window).on('scroll',function() {
        if ($(this).scrollTop() > 120){  
            $('.navbar-area-three').addClass("is-sticky");
        }
        else{
            $('.navbar-area-three').removeClass("is-sticky");
        }
    });
    
    // Mean Menu
    jQuery('.mean-menu').meanmenu({
        meanScreenWidth: "991"
    });

    // Button Hover JS
    $(function() {
        $('.default-btn')
        .on('mouseenter', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        })
        .on('mouseout', function(e) {
            var parentOffset = $(this).offset(),
            relX = e.pageX - parentOffset.left,
            relY = e.pageY - parentOffset.top;
            $(this).find('span').css({top:relY, left:relX})
        });
    });

    // Sidebar Modal
    $(".burger-menu").on('click',  function() {
        $('.sidebar-modal').toggleClass('active');
    });
    $(".sidebar-modal-close-btn").on('click',  function() {
        $('.sidebar-modal').removeClass('active');
    });
    
    // Search Popup JS
    $('.close-btn').on('click',function() {
        $('.search-overlay').fadeOut();
        $('.search-btn').show();
        $('.close-btn').removeClass('active');
    });
    $('.search-btn').on('click',function() {
        $(this).hide();
        $('.search-overlay').fadeIn();
        $('.close-btn').addClass('active');
    });

    
    // Odometer JS
        $('.odometer').appear(function(e) {
        var odo = $(".odometer");
        odo.each(function() {
            var countNumber = $(this).attr("data-count");
            $(this).html(countNumber);
        });
    });
    
    // Tabs
    (function ($) {
        $('.tab ul.tabs').addClass('active').find('> li:eq(0)').addClass('current');
        $('.tab ul.tabs li a').on('click', function (g) {
            var tab = $(this).closest('.tab'), 
            index = $(this).closest('li').index();
            tab.find('ul.tabs > li').removeClass('current');
            $(this).closest('li').addClass('current');
            tab.find('.tab_content').find('div.tabs_item').not('div.tabs_item:eq(' + index + ')').slideUp();
            tab.find('.tab_content').find('div.tabs_item:eq(' + index + ')').slideDown();
            g.preventDefault();
        });
    })(jQuery);

    // About Slider
    $('.about-slider').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        items: 2,
        margin: 30,
        navText: [
            "<i class='flaticon-left'></i>",
            "<i class='flaticon-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 1
            },
            768: {
                items: 2
            },
            1200: {
                items: 2
            }
        }
        
    });

    // Services Slider
    $('.services-slider').owlCarousel({
        loop: true,
        nav: true,
        rtl: true,
        dots: false,
        autoplayHoverPause: true,
        autoplay: true,
        smartSpeed: 1000,
        items: 4,
        margin: 30,
        navText: [
            "<i class='flaticon-left'></i>",
            "<i class='flaticon-right'></i>"
        ],
        responsive: {
            0: {
                items: 1
            },
            576: {
                items: 2
            },
            768: {
                items: 3
            },
            1200: {
                items: 4
            }
        }
    });

    // Popup Image
    $('a[data-imagelightbox="popup-btn"]')
    .imageLightbox({
        activity: true,
        overlay: true,
        button: true,
        arrows: true
    });

    // FAQ Accordion
    $(function() {
        $('.accordion').find('.accordion-title').on('click', function(){
            // Adds Active Class
            $(this).toggleClass('active');
            // Expand or Collapse This Panel
            $(this).next().slideToggle('fast');
            // Hide The Other Panels
            $('.accordion-content').not($(this).next()).slideUp('fast');
            // Removes Active Class From Other Titles
            $('.accordion-title').not($(this)).removeClass('active');		
        });
    });

    // Nice Select JS
    $('select').niceSelect();

    // Input Plus & Minus Number JS
    $('.input-counter').each(function() {
        var spinner = jQuery(this),
        input = spinner.find('input[type="text"]'),
        btnUp = spinner.find('.plus-btn'),
        btnDown = spinner.find('.minus-btn'),
        min = input.attr('min'),
        max = input.attr('max');
        
        btnUp.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
        btnDown.on('click', function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });
    });

    // WOW JS
    $(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW({
            boxClass:     'wow',      // animated element css class (default is wow)
            animatedClass: 'animated', // animation css class (default is animated)
            offset:       20,          // distance to the element when triggering the animation (default is 0)
            mobile:       true, // trigger animations on mobile devices (default is true)
            live:         true,       // act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

    // Go to Top
    $(window).on('scroll', function(){
		var scrolled = $(window).scrollTop();
		if (scrolled > 600) $('.go-top').addClass('active');
		if (scrolled < 600) $('.go-top').removeClass('active');
	});  
	$('.go-top').on('click', function() {
		$("html, body").animate({ scrollTop: "0" },  500);
	});
    
    // 11. QUICKVIEW POPUP + ZOOM IMAGE + PRODUCT SLIDER JS
	var image = $('#product_img');
	var zoomConfig = {};
	var zoomActive = false;
	
    zoomActive = !zoomActive;
	if(zoomActive) {
		if ($(window).width() >= 768) {
			var firstImgHeight = $(".pr_detail").height();
			var divWidth = $(".pr_detail").width();
			$("#product_img").elevateZoom({
				cursor: "crosshair",
				easing : true, 
				scrollZoom: true, 
				gallery:'pr_item_gallery',
				zoomWindowOffetx: 30, 
				zoomWindowWidth:divWidth,
				zoomWindowHeight:firstImgHeight,
				borderSize: 0,
				galleryActiveClass: "active"
			}); 
		}
		else {
			$("#product_img").elevateZoom({
				cursor: "crosshair",
				easing : true,  
				gallery:'pr_item_gallery',
				zoomType: "inner",
				galleryActiveClass: "active"
			}); 
		}
	}
	else {
			$.removeData(image, 'elevateZoom');//remove zoom instance from image
			$('.zoomContainer:last-child').remove();// remove zoom container from DOM
		}
	
	$.magnificPopup.defaults.callbacks = {
    open: function() {
      $('body').addClass('zoom_image');
    },
    close: function() {
      // Wait until overflow:hidden has been removed from the html tag
      setTimeout(function() {
        $('body').removeClass('zoom_image');
		$('.zoomContainer:last-child').remove();
      }, 100)
    }
  };
    // Preloader
    jQuery(window).on('load', function() {
        $('.preloader').fadeOut();
    });
}(jQuery));

$('.carousel_slide3').each( function() {
    var $carousel = $(this);
    $carousel.owlCarousel({
        loop: $carousel.data("loop"),
        margin: $carousel.data("margin"),
        mouseDrag: $carousel.data("mouse-drag"),
        touchDrag: $carousel.data("touch-drag"),
        dots : $carousel.data("dots"),
        autoHeight: true,
        rtl:true,
        center: $carousel.data("center"),
        autoplay : $carousel.data("autoplay"),
        nav: $carousel.data("nav"),
        navText: ['<i class="ion-ios-arrow-back"></i>', '<i class="ion-ios-arrow-forward"></i>'],
        autoplayTimeout : $carousel.data("autoplay-timeout"),
        responsive: {
            0: {
                items: 1,
            },
            380: {
                items: 1,
            },
            576: {
                items: 2,
            },
            1000: {
                items: 3,
            },
            1199: {
                items: 3
            }
        }
    });
});
