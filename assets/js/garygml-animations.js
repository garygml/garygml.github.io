$(window).bind("load", function() {
    $('#spinner').hide();
    $('body').css('overflow','auto');
});

$(document).ready(function(){ 

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

    setTimeout(parallaxFade, 1000);
    setTimeout(headingFade, 2000);
    setTimeout(navFade, 2500);
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


    $(".skydiving-note").hover(()=>{
        $(".skydiving-note").css("opacity",1)
    },()=>{
        $(".skydiving-note").css("opacity",0);
    })

    lightGallery(document.getElementById('ece-lab'),{
        thumbnail:true,
        animateThumb: false
    });


});



// $(document).scroll(function () {

//     var y = $(this).scrollTop();
//     if (y > 200 && y < 250) {
//         $('.desktop_note').fadeIn(0);
//     } else {
//         $('.desktop_note').fadeOut(0);
//     };

// });

var skillsShown = false;

/* Every time the window is scrolled ... */
$(window).scroll(function () {

    var bottom_of_object = $('.skillblock').offset().top + $('.skillblock').outerHeight()/1.5;
    var bottom_of_window = $(window).scrollTop() + $(window).height();


    /* If the object is completely visible in the window, fade it it */
    if (bottom_of_window > bottom_of_object) {
        var list = [
            ['SPRING',90],['HIBERNATE',65],['PHOTOSHOP',38]
            ,['STRUTS',34],['HTML',34],['CSS',44]
            ,['JQUERY',35],['JAVA',97],['SQL',11]
            ,['LINUX',23],['TOMCAT',54],['JUnit',34]
            ,['JSON',57],['RESTful Web Service',23]
            ,['Ant Script',23],['XML',12]
            ,['Bootstrap',15],['UNIX',13]
            ,['AngularJS',13],['node.js',25],['C++',12]
            ,['Spring MVC',12],['Spring Boot',34]
            ,['git',34],['Netflix Zuul',23],['GraphQL',18]
            ,['GlassFish',18],['API',25],['Spring Data',17]
            ,['Neo4J',15],['Command Lines',12],['Log4J',12]
            ,['MongoDB',14],['Oracle',13],['MySQL',13]
            ,['Spring Security',17],['Spring Web',15]
            ,['Netflix Hystrix',12],['Raspberry Pi',7]
            ,['Microcontroller',17],['Design Pattern',8]
            ,['Dependency Injection',13],['Maven',24]
            ,['iPhone screen repair',2]
        ];
        if (!skillsShown) {
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
            this.skillsShown = true;
            console.log(skillsShown);
        }

    }

    


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

        // $('.skillblock').css('margin-top', '50px');
        // $('.skills').each(function () {
        //     var randomFontSize = Math.floor(Math.random() * 20) + 7;
        //     //                    var randomNumber1 = Math.floor(Math.random() * 200) + 1;
        //     //                    var randomNumber2 = Math.floor(Math.random() * 200) + 1;
        //     //                    $(this).css('top',randomNumber1 + 'px');
        //     //                    $(this).css('left',randomNumber2 + 'px');
        //     $(this).css('top', '0px');
        //     $(this).css('left', '0px');
        //     $(this).css('font-size', randomFontSize + 'px');
        // });
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

