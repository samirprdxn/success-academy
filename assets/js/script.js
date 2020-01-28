$('.hamburger').click(function(e) {
	e.preventDefault();
	$this = $(this);
	$this.siblings('.nav_list').toggleClass('block');
	$this.children('.hamburger_line1').toggleClass('ham1');
	$this.children('.hamburger_line2').toggleClass('ham3');
	$this.children('.hamburger_line3').toggleClass('ham2');
});

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
	speed: 900
	,
	responsive: 
	[{
		breakpoint: 995,
		settings: {
			dots: true
		}
	}]
});

var modal_content;
$modal = $('.modal');
$modal_container = $('.modal-container');
$html = $('html');
// display image modal
$('.open-image').click(function(){
	$html.addClass('remove-scroll');
	$modal.addClass('show-modal');
	modal_content = $("<img></img>");
	modal_content.attr("src", $(this).attr('src'));
	$modal_container.append(modal_content);
});
// modal closed when clicked on cross
$('.close').click(function(){
	$html.removeClass('remove-scroll');
	$modal.removeClass('show-modal');
	$modal_container.find('img').remove();
	$modal_container.find('video').remove();
});
// avoid bubbling i.e don't close modal when clicked on modal container
$modal_container.click(function( event ) {
  	event.stopPropagation();
});
// modal closed when clicked on modal 
$modal.click(function(e){
	if ($(this).hasClass('show-modal')) {
		$html.removeClass('remove-scroll');
		$modal.removeClass('show-modal');
		$modal_container.find('img').remove();
		$modal_container.find('video').remove();
	}
});