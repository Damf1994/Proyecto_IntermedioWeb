$(document).ready(function(){
	$('.sidenav').sidenav();
	$('.parallax').parallax();
	$('.datepicker').datepicker();
	$('.carousel').carousel();
	$('.slider').slider();
	$('.materialboxed').materialbox();

	$('input.autocomplete').autocomplete({
      data: {
        "Efectivo": null,
		"Tarjeta": null,
		"Bitcoins": null,
		
      },
    });

    $('.carousel.carousel-slider').carousel({
    fullWidth: true
  });
       
});