$(function () {

	"use strict";

	var wind = $(window);

	//animation scroll js
	$('a[href*="#"]:not([href="#').on('click', function () {
		if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
			if (target.length) {
				$('html, body').animate({
					scrollTop: target.offset().top - 70
				}, 1000);
				return false;
			}
		}
	});
	// navbar scrolling background
	wind.on("scroll", function () {

		var bodyScroll = wind.scrollTop(),
			navbar = $(".navigation");

		if (bodyScroll > 100) {

			navbar.addClass("newnavigation");

		} else {

			navbar.removeClass("newnavigation");
		}
	});});
