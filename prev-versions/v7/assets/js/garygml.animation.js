$(window).bind("load", function() {
    $('#spinner').hide();
});

$(document).ready(function() {
	$('#fullpage').fullpage({
        scrollOverflow: true,
        menu: '.menu ul',
       	parallax: true,
        parallaxKey: 'Z2FyeWdlbWluZ2xpYW5nLmluZm9fWXZFY0dGeVlXeHNZWGc9cEN4',
        parallaxOptions: {
            type: 'reveal',
            percentage: 62
        },
        slidesNavigation: true,
    });

    lightGallery(document.getElementById('ece-lab'),{
        thumbnail:true,
        animateThumb: false
    });

    // $('h1, h2, h3, p, img').hover(function(){
    //     $(this).addClass("hover");
    // }, function(){
    //     $(this).removeClass("hover");
    // });

    // Navigation

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
    setTimeout(navFade, 1500);
    setTimeout(navHide, 2000);

    $('#menu-button-container').click(function() {
        if ( $('#myNavbar').hasClass('navOpened') ) {
            navHide();
        }
        else {
            navShow();
        }
    })
    $('.section, .content').click(function(){
        if( $('#myNavbar').hasClass('navOpened')) {
            navHide();
        }
    })

    // Cover Note

    $(".cover-note").hover(()=>{
        $(".cover-note").css("opacity",1)
    },()=>{
        $(".cover-note").css("opacity",0);
    })

    // Language Locale
    var locale = getURLParameter('lang');
    if (locale == null) {
        select_language('en');
    } else {
        select_language(locale);
    }

    //skill word cloud
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
    $('#view-skill-button').click(()=>{
        $('#view-skill-button').hide();
        WordCloud(document.getElementById('skillblock'), { 
            list: list, 
            color:'rgba(255,255,255,0.8)',
            backgroundColor: 'transparent',
            shuffle: true,
            drawOutOfBound: false,
            wait: 50,
            rotateRatio: 0.5,
            fontFamily:"Impact, Charcoal, sans-serif",
            gridSize:35,
            weightFactor: 2,
            shape: "square"
            } );
    })



});

$(window).scroll(function () {

        /* Check the location of each desired element */
    $('h1,h2,h3,p,img,a').each( function(i){

        var bottom_of_object = $(this).offset().top + $(this).outerHeight() / 2;
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        /* If the object is completely visible in the window, fade it it */
        if( bottom_of_window > bottom_of_object ){
            $(this).animate({'opacity':'1'}, 200);  
        }
        
    });

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