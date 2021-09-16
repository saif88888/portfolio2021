$(document).ready(function () {
	$('#menu').click(function () {
		$(this).toggleClass('fa-times');
		$('header').toggleClass('toggle');
	});

	$(window).on('scroll load', function () {
		$('#menu').removeClass('fa-times');
		$('header').removeClass('toggle');
	});

	//smooth scrolling

	document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
		anchor.addEventListener('click', function (e) {
			e.preventDefault();

			document
				.querySelector(this.getAttribute('href'))
				.scrollIntoView({
					behavior: 'smooth',
				});
		});
	});
});

//Get the button
var mybutton = document.getElementById('myBtn');

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {
	scrollFunction();
};

function scrollFunction() {
	if (
		document.body.scrollTop > 20 ||
		document.documentElement.scrollTop > 20
	) {
		mybutton.style.display = 'block';
	} else {
		mybutton.style.display = 'none';
	}
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
	document.body.scrollTop = 0;
	document.documentElement.scrollTop = 0;
}
