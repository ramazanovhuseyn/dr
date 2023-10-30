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
    var offset = $(window).width() > 768 ? 50 : 0;
    $('html, body').animate({
        scrollTop: element.offset().top - offset
    }, 1000);
}