$(window).bind("load", function() {
    $('#spinner').hide();
    $('body').css('overflow','auto');
});

$(document).ready(function(){ 

    function headingFade() {
        $('#page-heading').animate({'opacity':'1',"top":"50%"},1000);
    }
    function navFade() {
        $('#myNavbar').animate({'opacity':'1'},200);
        $('#menu-button-container').animate({'opacity':'1'},200);
        
    }
    function navHide() {
        $('#myNavbar').animate({'left':'-250px'},400);
        $('#myNavbar').removeClass('navOpened');
        $('#menu-button-container').animate({"left":"0px"},400);
        $('#menu-button-img').removeClass("flip");
    }
    function navShow() {
        $('#myNavbar').addClass('navOpened');
        $('#myNavbar').animate({'left':'0'},400);
        $('#menu-button-container').animate({"left":"250px"},400);
        $('#menu-button-img').addClass("flip");
    }

    setTimeout(headingFade, 1000);
    setTimeout(navFade, 2000);
    setTimeout(navHide, 3000);

    $('.slide, .slide1, .slide2, .slide3, .content').click(function(){
        if( $('#myNavbar').hasClass('navOpened')) {
            navHide();
        }
    })

    $('#menu-button-container').click(function() {
        if ( $('#myNavbar').hasClass('navOpened') ) {
            navHide();
        }
        else {
            navShow();
        }
    })

    var locale = getURLParameter('lang');
    if (locale == null) {
        select_language('en');
    } else {
        select_language(locale);
    }


    // Add smooth scrolling to all links
    $("a").on('click', function (event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function () {

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    $('.img-zoom').hover(function () {
        $(this).addClass('transition');
        $('#bigger-view').attr("src", $(this).attr("src"));

    }, function () {
        $(this).removeClass('transition');
    });


    $('.gallery').hover(function () {
        $('.hover_appear', this).show();
    }, function () {
        $('.hover_appear', this).hide();

    });



});



$(document).scroll(function () {

    var y = $(this).scrollTop();
    if (y > 200 && y < 250) {
        $('.desktop_note').fadeIn(0);
    } else {
        $('.desktop_note').fadeOut(0);
    };

});

/* Every time the window is scrolled ... */
$(window).scroll(function () {

    /* Check the location of each desired element */
    $('.skills').each(function (i) {

        var bottom_of_object = $('.skillblock').offset().top + $('.skillblock').outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();

        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object + Math.floor(Math.random() * 750) - 300) {

            var opacity = parseFloat($(this).css("font-size")) / 45;
            $(this).animate({ 'opacity': opacity }, 500);

        }

    });


        /* Check the location of each desired element */
    $('.content_centered').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            
            $(this).animate({'opacity':'1'}, 200);
                
        }
        
    });
    
     $('.quotes_container, .content').each( function(i){
        
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){    
            $(this).animate({'opacity':'1'}, 200);
        }
        
    }); 

});


$(function () {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('#ios-notice').removeClass('hidden');

        $('.skillblock').css('margin-top', '50px');
        $('.skills').each(function () {
            var randomFontSize = Math.floor(Math.random() * 20) + 7;
            //                    var randomNumber1 = Math.floor(Math.random() * 200) + 1;
            //                    var randomNumber2 = Math.floor(Math.random() * 200) + 1;
            //                    $(this).css('top',randomNumber1 + 'px');
            //                    $(this).css('left',randomNumber2 + 'px');
            $(this).css('top', '0px');
            $(this).css('left', '0px');
            $(this).css('font-size', randomFontSize + 'px');
        });
    }
});
function select_language(language) {
    $("[lang]").each(function () {
        if ($(this).attr("lang") == language)
            $(this).show();
        else
            $(this).hide();
    });
}

function getURLParameter(sParam) {
    var sPageURL = window.location.search.substring(1);
    var sURLVariables = sPageURL.split('&');

    for (var i = 0; i < sURLVariables.length; i++) {
        var sParameterName = sURLVariables[i].split('=');
        if (sParameterName[0] == sParam) {
            return sParameterName[1];
        }
    }
}

