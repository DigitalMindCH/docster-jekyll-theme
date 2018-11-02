$(document).ready(function () {
    $('#nav').onePageNav();

    $('a[href^="http"]').attr('target', '_blank');

    $('.toggle').click(function () {
        $('.overview').toggleClass('open');
    });

    $('.children').click(function () {
        $('.overview').toggleClass('open');
    });

    $('.parent').find('a').click(function () {
        $(this).parent().find('ul').slideToggle();
    })
});
