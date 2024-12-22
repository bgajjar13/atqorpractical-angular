var $ = jQuery.noConflict();
	$(document).ready(function(){
		$('.footer-nav h3').on('click', function() {
			let $li = $(this).parent().toggleClass('is-open');
			$('.footer-nav').not($li).removeClass('is-open');
		});
	});

