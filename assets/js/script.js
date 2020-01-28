// $(".tab").click(function(event){
// 	event.preventDefault();
// 	$tab = $(this);
// 	if(!$tab.hasClass('active')) {
// 		$(".tab").removeClass("active");
// 		// $(".tab-content").fadeOut();
// 		$tab.addClass('active');
// 		// $tab.siblings("div").fadeIn();
// 	}
// });

$(".tab").click(function(event){
	event.preventDefault();
	$tab = $(this);
	var data_attr = $tab.attr('data-att');
	$(".tab").removeClass('active');
	$(".tab-content").removeClass('active-content');
	$(".tab-content").each(function() {
		if (data_attr == $(this).attr('data-att')){
			$tab.addClass('active');
			$(this).addClass('active-content');
		}
	});
});

// slick slider functionality
$('.slider').slick({
	infinite: true,
	dots: true,
	speed: 900,
	autoplay: true,
	autoplayspeed: 200
});