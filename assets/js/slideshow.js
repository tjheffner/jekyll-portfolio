// Allows forward/back functionality for slideshow images.
$(window).load(function(){
		var pages = $('.slideshow li');
    var current = 0;
		var currentPage, nextPage;

		$('.slideshow').click(function(){
			// Set current page # equal to counter value.
			currentPage = pages.eq(current);

			// If slideshow is clicked, up the counter.
			if (current >= pages.length - 1) {
				current = 0;
			} else {
				current++;
			}

			// If the back button is clicked, decrease counter.
			if($(this).hasClass('prevButton')) {
				// Allow looping from first to last image for ease of UX.
				if (current <= 0) {
					current = pages.length - 1;
				}	else {
					current = current - 1;
				}
			}

			// Set nextpage to updated counter value.
			nextPage = pages.eq(current);

			// Swap display of pages.
			currentPage.hide();
			nextPage.show();
		});
});
