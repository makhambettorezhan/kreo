$(document).ready(() => {
	$(window).on('scroll', () => {
		if($(window).scrollTop()) {
			$('.navbar').addClass('navbar-black');
		} else {
			$('.navbar').removeClass('navbar-black');
		}
	});
});