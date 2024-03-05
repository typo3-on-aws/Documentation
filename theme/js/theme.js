/*
 * t3rrific.com
 * (c)2020-2024 by Michael Schams <schams.net> | <t3rrific.com>
 */

$(function() {
	// Change nav bar on page scroll
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();
		if (scroll >= 100) {
			$("body").addClass("scrolled");
		} else {
			$("body").removeClass("scrolled");
		}
	});
    // Prism
    $('pre > code').each(function (i) {
        var language = $(this).attr('class');
        $(this).addClass('language-' + language);
        $(this).removeClass(language);
    });
});
