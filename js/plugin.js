$(function () {
    'use strict';
    // Header Height
    $('.header, .overlay-spin').innerHeight($(window).height());
    $('.header .icon').on('click', function () {
        $('html, body').animate({
            scrollTop: $('.header').innerHeight()
        }, 1000);
    });

    // PreventDefault
    $('a, button').on('click', function (e) {
        e.preventDefault()
    });

    //NavBar
    $('.navover').innerHeight($('.navbar').innerHeight());
    $(window).on('scroll', function () {
        if ($('body, html').scrollTop() >= $(window).height()) {
            $('.navbar').css({
                position: 'fixed',
                top: 0,
                left: 0
            });
        } else {
            $('.navbar').css({
                position: 'relative',
                top: 0,
                left: 0
            });
        }
        
    });

    //NavBar Links
    $('.nav-link').on('click', function () {
        $('.nav-item .nav-link').removeClass('active');
        $(this).addClass('active');
    });

    // Some Work
    $('.works-list ul li').on('click', function () {
        $(this).addClass('active').siblings().removeClass('active');
        if ($(this).data('show') == 'all') {
            $('.work-image').css({
                opacity: 1
            });
        } else {
            $('.work-image').css('opacity', 0.1);
            $($(this).data('show')).css({
                opacity: 1,
                
            })
        }
    });
    

    

    // Form Inputs
    $('.contact-us form input:not([type="submit"]), .contact-us form textarea').on('blur', function () {
        if ($(this).val() != '') {
            $(this).parent().addClass('has-data');
        } else {
            $(this).parent().removeClass('has-data');
        }
        
    });

    // Go Up
    $(window).on('scroll', function () {
        if ($(this).scrollTop() >= 1000) {
            $('.up').fadeIn(500);
        } else {
            $('.up').fadeOut(500);
        }
    });
    $('.up').on('click', function () {
        $('html, body').animate({
            scrollTop: 0
        }, 2000);
    });

    

});

// Start Spin
$(window).on('load', function () {
    'use strict';
    $('.sk-folding-cube').fadeOut(1000, function () {
        $(this).parent('.overlay-spin').fadeOut(1000, function () {
            $('body').css({
                overflow: 'auto'
            });
        });
    });
    
});
// End Spin