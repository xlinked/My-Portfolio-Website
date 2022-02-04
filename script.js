//Hamburger
var hamburger = document.querySelector(".hamburger-menu")
var mobileNav = document.querySelector(".mobile-nav-container")

hamburger.addEventListener("click", () => {
    mobileNav.classList.toggle("change");
});
//END Hamburger

// Sticky Header Scroll        
const body = document.body;
const scrollUp = "scroll-up";
const scrollDown = "scroll-down";
let lastScroll = 0;

window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll <= 0) {
        body.classList.remove(scrollUp);
        return;
    }

    if (currentScroll > lastScroll && !body.classList.contains(scrollDown)) {
        // down
        body.classList.remove(scrollUp);
        body.classList.add(scrollDown);
    } else if (
        currentScroll < lastScroll &&
        body.classList.contains(scrollDown)
    ) {
        // up
        body.classList.remove(scrollDown);
        body.classList.add(scrollUp);
    }
    lastScroll = currentScroll;
}); 

// About section fade in on scroll.
$(document).on("scroll", function() {
    var pageTop = $(document).scrollTop();
    var pageBottom = pageTop + $(window).height();
    var grids1 = $("#about-grid-1");

    for (var i = 0; i < grids1.length; i++) {
        var grid1 = grids1[i];

        if ($(grid1).position().top < pageBottom) {
            $(grid1).addClass("visible");
        } else {
            $(grid1).removeClass("visible");
        }
    }
    
    // Skill section fade in on scroll.
    var skills = $("#skill-inner-container");
    for (var i = 0; i < skills.length; i++) {
        var skill = skills[i];

        if ($(skill).position().top < pageBottom) {
            $(skill).addClass("visible");
        } else {
            $(skill).removeClass("visible");
        }
    }

    // Project section fade in on scroll.
    var ports = $("#portfolio-inner-container");
    for (var i = 0; i < ports.length; i++) {
        var port = ports[i];

        if ($(port).position().top < pageBottom) {
            $(port).addClass("visible");
        } else {
            $(port).removeClass("visible");
        }
    }


    // Project-1 through project-4 section fade in on scroll.
    var pros1 = $(".project-1");
    for (var i = 0; i < pros1.length; i++) {
        var pro1 = pros1[i];

        if ($(pro1).position().top < pageBottom) {
            $(pro1).addClass("visible");
        } else {
            $(pro1).removeClass("visible");
        }
    }
    var pros2 = $(".project-2");
    for (var i = 0; i < pros2.length; i++) {
        var pro2 = pros2[i];

        if ($(pro2).position().top < pageBottom) {
            $(pro2).addClass("visible");
        } else {
            $(pro2).removeClass("visible");
        }
    }
    var pros3 = $(".project-3");
    for (var i = 0; i < pros3.length; i++) {
        var pro3 = pros3[i];

        if ($(pro3).position().top < pageBottom) {
            $(pro3).addClass("visible");
        } else {
            $(pro3).removeClass("visible");
        }
    }
    var pros4 = $(".project-4");
    for (var i = 0; i < pros4.length; i++) {
        var pro4 = pros4[i];

        if ($(pro4).position().top < pageBottom) {
            $(pro4).addClass("visible");
        } else {
            $(pro4).removeClass("visible");
        }
    }   
});
