$(function() {
	//share-buttons new window !
	$('.share-buttons').click(function(e){e.preventDefault();	window.open($(this).attr('href'),		'fbShareWindow','height=450,' +' width=550,' +		' top='+($(window).height()/2-275)+', left='+($(window).width()/2-225)+', toolbar=0, location=0, menubar=0, directories=0, scrollbars=0');	return false});
	//owl-carousel
	$(".carousel").owlCarousel({
		autoPlay: true
	});

	//form Json + crossbrowser email validation
	$('form').submit(function(e){e.preventDefault();
		var form = $(this);
		var userinput = $(form).find("input[type=email]").val();
		var pattern = /^\b[A-Z0-9._%-]+@[A-Z0-9.-]+\.[A-Z]{2,4}\b$/i
		if(!pattern.test(userinput))
		{
			alert('not a valid e-mail address');
		} else {
			alert(JSON.stringify($(form).serializeArray()))
			$(form).find("input[type=email]").val("");
		}
	});

	//SVG Fallback
	//if(!Modernizr.svg) {
	//	$("img[src*='svg']").attr("src", function() {
	//		return $(this).attr("src").replace(".svg", ".png");
	//	});
	//};

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

