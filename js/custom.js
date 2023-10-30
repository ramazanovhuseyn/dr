$(document).ready(function() {
    $('#prices').on('click', function() {
        scrollToDiv($('.price'));
    });
    $('#about-us').on('click', function() {
        scrollToDiv($('.about-us'));
    });
    $('#services').on('click', function() {
        scrollToDiv($('.service'));
    });
    $('#courses').on('click', function() {
        scrollToDiv($('.students'));
    });
    $('#contact').on('click', function() {
        scrollToDiv($('.footer'));
    });
});

function scrollToDiv(element) {
    var offset = $(window).width() > 768 ? 50 : 65;
            $('html, body').animate({
            scrollTop: element.offset().top - offset
        }, 1000);
}

//close navbar when click on submenus
$('.navbar-nav a').on('click', function(){
    $('.navbar-collapse').removeClass('show')
});