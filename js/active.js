(function($) {
    "use strict";
     $(document).on('ready', function() {	
		
		/*====================================
			Header Sticky JS
		======================================*/ 
		var activeSticky = $("#active-sticky"),
			winDow = $(window);
			winDow.on("scroll", function () {
				var scroll = $(window).scrollTop(),
				isSticky = activeSticky;
				if (scroll < 50) {
				isSticky.removeClass("is-sticky");
				} else {
				isSticky.addClass("is-sticky");
			}
		});
		
		/*====================================
			Select2 JS
		======================================*/ 
		$('select').select2();
		
		/*====================================
			CounterUp JS
		======================================*/ 
		$('.in-counter').counterUp({
			time: 1500,
		});
		
		
		/*====================================
			Aos Animate JS
		======================================*/	
		AOS.init({
			duration:1500,
			disable:!1,
			offset:0,
			once:!0,
			easing:"ease"
		});


		/*====================================
			Scrool To Top JS
		======================================*/
		var lastScrollTop = '';
		var scrollToTopBtn = '.scrollToTop'

		function stickyMenu($targetMenu, $toggleClass) {
			var st = $(window).scrollTop();
			if ($(window).scrollTop() > 600) {
				if (st > lastScrollTop) {
				$targetMenu.removeClass($toggleClass);

				} else {
				$targetMenu.addClass($toggleClass);
				};
			} else {
				$targetMenu.removeClass($toggleClass);
			};
		 	lastScrollTop = st;
		};

		$(window).on("scroll", function () {
		  stickyMenu($('.sticky-header'), "active");
		  if ($(this).scrollTop() > 400) {
			$(scrollToTopBtn).addClass('show');
		  } else {
			$(scrollToTopBtn).removeClass('show');
		  }
		});
		
		$(scrollToTopBtn).on('click', function (e) {
		  e.preventDefault();
		  $('html, body').animate({
			scrollTop: 0
		  }, 500);
		  return false;
		});

		$('.inflanar-header__lang').on("click", function() {
			$('.select2-dropdown.select2-dropdown--below').addClass('active');
		});

		$('.selection').on("click", function() {
			$('body').addClass('oy-hidden');
		});

	});


	/*====================================
		Mobile Menu
	======================================*/ 
	var $offcanvasNav = $("#offcanvas-menu a");
		$offcanvasNav.on("click", function () {
			var link = $(this);
			var closestUl = link.closest("ul");
			var activeLinks = closestUl.find(".active");
			var closestLi = link.closest("li");
			var linkStatus = closestLi.hasClass("active");
			var count = 0;

		closestUl.find("ul").slideUp(function () {
			if (++count == closestUl.find("ul").length)
			activeLinks.removeClass("active");
		});
		if (!linkStatus) {
			closestLi.children("ul").slideDown();
			closestLi.addClass("active");
		}
	});  

	
		

	/*====================================
			Preloader JS
	======================================*/
	$(window).on('load', function (event) {
		$('#loading').delay(800).fadeOut(500);
	})
  
		  

})(jQuery);

new ModalVideo('.js-video-btn');


