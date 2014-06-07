$.backstretch("/assets/images/front/bg.jpg");
$("html").niceScroll();  

$("[data-role='toggle-form']").on('click', function(e) {
	e.preventDefault();
	var target = $(this).data('target');
	$(target).fadeIn();
});