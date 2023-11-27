//When page load completes
$(window).bind("load", function() {
    $('#spinner').hide();
    $('body').css('overflow','auto');
});

$(document).ready(function(){ 

    // Start Up Animations
    setTimeout(parallaxFade, 1000);
    setTimeout(headingFade, 2000);
    setTimeout(navFade, 2500);
    setTimeout(navHide, 3000);

    // Menu Behaviors
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

    // Language Selection based on URL lang param
    var locale = getURLParameter('lang');
    if (locale == null) {
        select_language('en');
    } else {
        select_language(locale);
    }

    // Add smooth scrolling when clicking on menu links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
            console.log($(this))
    
            // Store hash
            var hash = this.hash;
            console.log(hash)
    
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


    // Notes Clicking Show/ Hide
    $('.note-container .note-click').on('click', function() {
        $(this).parent('.note-container').children('.note-body').addClass('animated');
        $(this).parent('.note-container').children('.note-body').addClass('animatedFadeInUp');
        $(this).parent('.note-container').children('.note-body').addClass('fadeInUp');
        $(this).css("opacity",0);
    });

    $('.note-container .note-body').on('click', function() {
        if ($(this).hasClass('fadeInUp')){
            $(this).css("opacity",0);
            $(this).removeClass('animated');
            $(this).removeClass('animatedFadeInUp');
            $(this).removeClass('fadeInUp');
            $(this).parent('.note-container').children('.note-click').css("opacity",1);
        } 
    });      

    // Galleries
    lightGallery(document.getElementById('ece-lab'),{
        plugins: [lgFullscreen, lgThumbnail],
        speed: 500
    });

    lightGallery(document.getElementById('photo-gallery'),{
        plugins: [lgFullscreen],
        speed: 500
    });

    lightGallery(document.getElementById('karaoke-gallery'),{
        plugins: [lgFullscreen, lgVideo],
        speed: 500
    });

    // Karaoke Thank You Note
    $('.karaoke-link').click(function(){
        $('#karaoke-thank-you').animate({'opacity':'1'},2000);;
    })

});

// When Scrolling
$(window).scroll(function () {

    $('.skillblock').not('.shown').each( function(){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight()/1.5;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
    
        /* If the object is completely visible in the window, fade it it */
        if (bottom_of_window > bottom_of_object) {
                var list = [
                    ['SPRING',90],['HIBERNATE',65],['PHOTOSHOP',38]
                    ,['JavaScript',34],['HTML',34],['CSS',44]
                    ,['JQuery',35],['Java',97],['SQL',11]
                    ,['LINUX',23],['TOMCAT',54],['JUnit',34]
                    ,['JSON',57],['RESTful Web Service',23]
                    ,['Cassandra',23],['XML',12]
                    ,['Bootstrap',15],['UNIX',13]
                    ,['AngularJS',13],['node.js',25],['C++',12]
                    ,['Spring MVC',12],['Struts',12],['Spring Boot',34]
                    ,['git',34],['Kubernetes',23],['GraphQL',18]
                    ,['GlassFish',18],['API',25],['Spring Data',17]
                    ,['Neo4J',15],['Command Lines',12],['Log4J',12]
                    ,['MongoDB',14],['Oracle',13],['MySQL',13]
                    ,['Spring Security',17],['Spring Web',15]
                    ,['Jenkins',12],['Raspberry Pi',7]
                    ,['Microcontroller',17],['Design Pattern',8]
                    ,['Dependency Injection',13],['Maven',24]
                    ,['iPhone screen repair',2]
                ];
                WordCloud(document.getElementById('skillblock'), { 
                    list: list, 
                    color:'rgba(255,255,255,0.3)',
                    backgroundColor: 'transparent',
                    shuffle: true,
                    drawOutOfBound: false,
                    wait: 300,
                    rotateRatio: 0.5,
                    fontFamily:"Times New Roman, Charcoal, sans-serif",
                    gridSize:35,
                    weightFactor: 2,
                    shape: "square"
                    } );
                $(this).addClass('shown');
        }
    }); 
    
     $('.content').not('.shown').each( function(){
        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 10 + $(window).height() / 4;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){    
            $(this).animate({'opacity':'1'}, 200);
            $(this).addClass('shown');
        }
    }); 

});

// Mobile Devices notice
$(function () {
    if (navigator.userAgent.match(/(iPod|iPhone|iPad|Android)/)) {
        $('#ios-notice').removeClass('hidden');
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

function parallaxFade() {
    $('.parallax-mirror').animate({'opacity':'1'},1000);
}

function headingFade() {
    $('#page-heading').animate({'opacity':'1'},1000);
    $('.parallax-mirror').animate({'opacity':'1'},1000);
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



