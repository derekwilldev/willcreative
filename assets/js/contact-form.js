$(document).ready(function() {
	// create contact buttons and merge them
	var $footerContactButton = $('div.contact-button__wrapper');
	var $footerContactIcon = $('li.contact-icon');
	var $footerContact = $.merge($footerContactButton, $footerContactIcon);

	var $contactFormSection = $('section.contact-form');
	var $mainContainer = $('div.main');

	// Up/down sliding contact section
	$($footerContact).on('click', function() {
		swapAriaStatus($contactFormSection);
	});

	// If click event outside open contact section, close it
	$($mainContainer).on('click', function() {
		closeContactForm($contactFormSection);		
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

// close contact form if opened
function closeContactForm(form) {
	if ($(form).attr("aria-hidden") == "false") {
		$(form).attr("aria-hidden", "true");
	}
};
