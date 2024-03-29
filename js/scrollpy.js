$(function () {
    $(window).on("load resize", function () {
        $(".fill-screen").css("height", window.innerHeight);
    });
   
  // add Bootstrap's scrollspy
  $('body').scrollspy({
    target: '.navbar',
    offset: 160
});

$('nav a, .down-button a').bind('click', function () {
    $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top - 100
    }, 1500, 'easeInOutExpo');
    event.preventDefault();
});

// parallax scrolling with stellar.js
$(window).stellar();

// using wow.js

new WOW().init();

 // initialize NanoGallery
 $(document).ready(function () {
    $("#nanoGallery3").nanoGallery();
});

});