$(document).ready(function() {

	var $navContactButton = $('div.contact-button__wrapper');
	var $navContactIcon = $('li.contact-icon');
	var $contactForm = $('section.contact-form');

	$($navContactButton).on('click', function() {
		swapAriaStatus($contactForm);
	});

	$($navContactIcon).on('click', function() {
		swapAriaStatus($contactForm);
	});

});


// swap aria status for contact form
function swapAriaStatus(form) {
	if ($(form).attr("aria-hidden") == "false") {
		$(form).attr("aria-hidden", "true");
	}
	else {
		$(form).attr("aria-hidden", "false");
	}
};
