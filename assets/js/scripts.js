jq2 = jQuery.noConflict();
jq2(function( $ ) {
	$('.mobile-btn img').on('click', function() {
		if ($('.mobile-btn').hasClass('active')) {
			$(this).parents('.mobile-btn').removeClass('active');
			$('.menu').slideUp(300);
		} else {
			$(this).parents('.mobile-btn').addClass('active');
			$('.menu').slideDown(300);
		}
	});
});