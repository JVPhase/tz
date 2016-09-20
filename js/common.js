$(document).ready(function(){
    $('.main_menu li').hover(
        function() {
            $(this).addClass("active");
            $(this).find('ul').stop(true, true);
            $(this).find('.invis_area').stop(true, true);
            $(this).find('ul').slideDown();
            $(this).find('.invis_area').slideDown();
        },
        function() {
            $(this).removeClass("active");
            $(this).find('ul').slideUp('fast');
            $(this).find('.invis_area').slideUp('fast');
        }
    );
});

$(function(){
	$(".slideshow").slidesjs({
		width: 1320,
		height: 600,
		play: {
			active: false,
			// [boolean] Generate the play and stop buttons.
			// You cannot use your own buttons. Sorry.
			effect: "slide",
			// [string] Can be either "slide" or "fade".
			interval: 2000,
			// [number] Time spent on each slide in milliseconds.
			auto: true,
			// [boolean] Start playing the slideshow on load.
			swap: false,
			// [boolean] show/hide stop and play buttons
			pauseOnHover: false,
			// [boolean] pause a playing slideshow on hover
			restartDelay: 2000
			// [number] restart delay on inactive slideshow
		},
		navigation: {
			active: false,
			// [boolean] Generates next and previous buttons.
			// You can set to false and use your own buttons.
			// User defined buttons must have the following:
			// previous button: class="slidesjs-previous slidesjs-navigation"
			// next button: class="slidesjs-next slidesjs-navigation"
			effect: "slide"
			// [string] Can be either "slide" or "fade".
		},
		pagination: {
			active: false,
			// [boolean] Create pagination items.
			// You cannot use your own pagination. Sorry.
			effect: "slide"
			// [string] Can be either "slide" or "fade".
		}
    });
});

$(function(){
	$("#slides").slidesjs({
		width: $(window).width(),
		height: 600,
		play: {
			active: false,
			// [boolean] Generate the play and stop buttons.
			// You cannot use your own buttons. Sorry.
			effect: "fade",
			// [string] Can be either "slide" or "fade".
			interval: 2000,
			// [number] Time spent on each slide in milliseconds.
			auto: true,
			// [boolean] Start playing the slideshow on load.
			swap: false,
			// [boolean] show/hide stop and play buttons
			pauseOnHover: false,
			// [boolean] pause a playing slideshow on hover
			restartDelay: 2000
			// [number] restart delay on inactive slideshow
		},
		navigation: {
			active: false,
			// [boolean] Generates next and previous buttons.
			// You can set to false and use your own buttons.
			// User defined buttons must have the following:
			// previous button: class="slidesjs-previous slidesjs-navigation"
			// next button: class="slidesjs-next slidesjs-navigation"
			effect: "slide"
			// [string] Can be either "slide" or "fade".
		},
		pagination: {
			active: false,
			// [boolean] Create pagination items.
			// You cannot use your own pagination. Sorry.
			effect: "slide"
			// [string] Can be either "slide" or "fade".
		}
    });
});