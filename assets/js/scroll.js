$(document).ready(function(){
	var altura = $('.container').offset().top + 19;
		
	$(window).on('scroll', function(){
		if ( $(window).scrollTop() > altura ){
			$('.logo').addClass('logo-fixed');
			$('.tm-nav').addClass('tm-nav-fixed');
			$('.tm-header').addClass('tm-header-fixed');
			$('.tm-banner').addClass('tm-banner-fixed');
		} else {
			$('.logo').removeClass('logo-fixed');
			$('.tm-nav').removeClass('tm-nav-fixed');
			$('.tm-header').removeClass('tm-header-fixed');
			$('.tm-banner').removeClass('tm-banner-fixed');
		}	
	});
});