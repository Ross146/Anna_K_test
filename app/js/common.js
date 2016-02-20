$(function() {
	//share-buttons new window !
	$('.share-buttons').click(function(e){e.preventDefault();	window.open($(this).attr('href'),		'fbShareWindow','height=450,' +' width=550,' +		' top='+($(window).height()/2-275)+', left='+($(window).width()/2-225)+', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');	return false});

	$(".carousel").owlCarousel({
		autoPlay: true
	});

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	//E-mail Ajax Send
	//Documentation & Example: https://github.com/agragregra/uniMail
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

	//Chrome Smooth Scroll
	try {
		$.browserSelector();
		if($("html").hasClass("chrome")) {
			$.smoothScroll();
		}
	} catch(err) {

	};

	$("img, a").on("dragstart", function(event) { event.preventDefault(); });

});

