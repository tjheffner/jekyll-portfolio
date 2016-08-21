// Allows forward/back functionality for slideshow images.
$(window).load(function(){
	var pages = $('.slideshow li');
  var counter = 0;
	var currentPage, nextPage;

	// Counter increases if next button or the actual image is clicked.
	$('.slideshow .nextButton, .slideshow >ul > li > img').click(function(){
		// Set page # equal to counter value.
		currentPage = pages.eq(counter);
		currentPage.show();
		// Up the counter
		counter++

		// Counter can't go past # of items in slideshow.
		if (counter >= pages.length) {
			counter = 0;
		}

		// Set nextpage to updated counter value.
		nextPage = pages.eq(counter);

		// Swap display of pages.
		currentPage.hide();
		nextPage.show();
	});

	// If the back button is clicked, decrease counter.
	$('.slideshow .prevButton').click(function(){
		currentPage = pages.eq(counter);

		// Allow looping from first to last image for ease of UX.
		if (counter <= 0) {
			counter = pages.length - 1;
		}	else {
			counter = counter - 1;
		}

		// Set nextpage to updated counter value.
		nextPage = pages.eq(counter);

		// Swap display of pages.
		currentPage.hide();
		nextPage.show();
	});

});
