/**
 * TYPO3-on-AWS
 *
 * (c)2019 by Michael Schams <schams.net>
 * https://typo3-on-aws.org
 */

(function($) {
    "use strict";
    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 120)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Prism
    $('pre > code').each(function (i) {
        var language = $(this).attr('class');
        $(this).addClass('language-' + language);
        $(this).removeClass(language);
    });

})(jQuery);
