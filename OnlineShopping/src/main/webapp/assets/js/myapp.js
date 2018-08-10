$(function() {
	// Solving the menu Highlight problem
	switch (menu) {
	case 'About Us':
		$('#about').addClass('active');
		break;

	case 'Contact Us':
		$('#contact').addClass('active');
		break;

	case 'Home':
		$('#home').addClass('active');
		break;
	}

});