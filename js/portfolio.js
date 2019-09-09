/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
// Year
const date = new Date();
const year = document.querySelector("#year");
year.innerHTML = date.getFullYear();

const goToByScroll = function(id) {
    $('html,body').animate({
        scrollTop: $("#" + id).offset().top
    }, 1000);
}

AOS.init();

$(document).ready(function () {
    // Smooth scrolling using jQuery easing
    // $('a[href*="#"]').click(function () {
    //     if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
    //         var target = $(this.hash);
    //         target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    //         if (target.length) {
    //             $('html, body').animate({
    //                 scrollTop: (target.offset().top - 60)
    //             }, 1000);
    //             return false;
    //         }
    //     }
    // });

    $("a[href*='#'").bind("click", function (event) { //just pass scroll-me class and start scrolling
        const $anchor = $(this);
        const hash = $(this.hash);
        if ($(hash).length !== 0) {
            $('html, body').stop().animate({
                scrollTop: ($($anchor.attr('href')).offset().top - 60)
            }, 1000);
        }
        event.preventDefault();
    });

    // Onscroll
    $(window).scroll(function () {
        var scroll = $(window).scrollTop();

        //>=, not <=
        if (scroll >= 50) {
            //clearHeader, not clearheader - caps H
            // $("#navbar-main").removeClass("transparent");
            $("#navbar-main").addClass("animate-top");
            $(".navbar-brand").removeClass("text-dark");
            for (const elements of $("ul.navbar-nav li.nav-item a.nav-link")) {
                elements.classList.remove("text-dark")
            }
        } else {
            $("#navbar-main").removeClass("animate-top");
            $(".navbar-brand").addClass("text-dark");
            for (const elements of $("ul.navbar-nav li.nav-item a.nav-link")) {
                elements.classList.add("text-dark")
            }
            // $("#navbar-main").addClass("transparent");
        }
    });
});

new TypeIt('#front-text', {
    strings: "Welcome to ",
    speed: 200,
    waitUntilVisible: true
})
.type("My Portfo")
.delete("My Portfo".length)
.pause(300)
.options({ speed: 100, deleteSpeed: 150 })
.type("<em>My Website</em>")
.go();

new TypeIt('#about-me', {
    strings: "About Me",
    speed: 250,
    waitUntilVisible: true
})
.go();

new TypeIt('#my-skills', {
    strings: "My Skills",
    speed: 250,
    waitUntilVisible: true
})
.go();