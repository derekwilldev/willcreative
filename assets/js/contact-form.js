$(document).ready(function() {

	var $navButton = $('div.contact-button__wrapper');
	var $contactForm = $('section.contact-form');

	$($navButton).on('click', function() {
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
