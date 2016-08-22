/* Creates forward/back functionality for slideshow images using a counter.
 */
$(window).load(function() {
	var pages = $('.slideshow li');
	var counter = 0;
	var currentPage, nextPage;

	function newPage() {
		// Set nextpage to updated counter value.
		nextPage = pages.eq(counter);

		// Swap display of pages.
		currentPage.hide();
		nextPage.show();
	}

	// Counter increases if next button or the actual image is clicked.
	$('.slideshow .nextButton, .slideshow >ul > li > img').click(function() {
		currentPage = pages.eq(counter);

		// This line allows the slideshow to be looped through more than once.
		currentPage.show();

		counter++

		// Counter can't go past # of items in slideshow.
		if (counter >= pages.length) {
		counter = 0;
		}

		newPage();
	});

	// Counter decreases if back button is clicked.
	$('.slideshow .prevButton').click(function() {
		currentPage = pages.eq(counter);

		// Allow looping from first to last image for ease of UX.
		if (counter <= 0) {
			counter = pages.length - 1;
		}	else {
			counter = counter - 1;
		}

		newPage();
	});

});
