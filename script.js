
/* =========================================
              Navigation
============================================ */

/* Show & Hide White Navigation */
$(function () {

    // show/hide nav on page load
    showHideNav();

    $(window).scroll(function () {

        // show/hide nav on window's scroll
        showHideNav();
    });

    function showHideNav() {

        if ($(window).scrollTop() > 50) {

            // Show white nav
            $("nav").addClass("white-nav-top");
            // $("ul li a").addClass("color");

        } else {

            // Hide white nav
            $("nav").removeClass("white-nav-top");
            // $("nav").removeClass("navbar-light");

        }
    }
});

// #########run wow.js###############

    $(function(){
        new WOW().init();
    })

    

