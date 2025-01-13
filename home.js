// smooth scrolling locomotivejs
//          attach loco scroll css
//          attach locomotive scroll min js
//          some code from loco github for js

// gsap
//          attach gsap

// scrolltrigger
// var timeout;

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

function firstPageAni(){
    var tl = gsap.timeline();

    tl.to(".bound", {
        y: 0,
        // opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut,
        stagger: .2
    })

    .from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })

    .from("#homefooter", {
        y: '+10',
        opacity: 0,
        duration: 2,
        delay: -1.4,
        ease: Expo.easeInOut
    })
    
}

// function circleMouseFollower(){
//     window.addEventListener("mousemove", function(details){
//         document.querySelector("#minicircle").style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
//         // console.log(dets.clientX, dets.clientY);
//     });
// }
// circleMouseFollower();

function circleMouseFollower() {
    window.addEventListener("mousemove", function(details) {
        const minicircle = document.querySelector("#minicircle");
        minicircle.style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    });
}

circleMouseFollower();

firstPageAni();

document.querySelectorAll('#nav-items .scroll').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        const targetSection = document.querySelector(targetId);

        if (targetSection) {
            scroll.scrollTo(targetSection);
        }
    });
});

document.querySelectorAll(".elem").forEach(function(elem) {

    elem.addEventListener("mouseleave", function (details) {
        gsap.to(elem.querySelector("img"), {
            opacity: 0,
            ease: Power3,
            duration: 0.5,
        });

        gsap.to(elem.querySelector(".elem h1"), {
            opacity: 0.4,
            x: 0,
            // ease: Power3,
            // top: diff,
            // left: details.clientX,
            duration: 0.5,
        });

        gsap.to(elem.querySelector(".elem i"), {
            opacity: 0.4,
            x: 0,
            // ease: Power3,
            // top: diff,
            // left: details.clientX,
            duration: 1,
        });
    });

    elem.addEventListener("mouseenter", function () {
        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3.easeOut,
            duration: 0.5,
        });
    });

    elem.addEventListener("mousemove", function (details) {
        var diff = details.clientY - elem.getBoundingClientRect().top;

        gsap.to(elem.querySelector("img"), {
            opacity: 1,
            ease: Power3,
            top: diff,
            left: details.clientX,
            duration: 0.1,
        });

        gsap.to(elem.querySelector(".elem h1"), {
            opacity: 0.2,
            x: 20,
            // ease: Power3,
            // top: diff,
            // left: details.clientX,
            duration: 0.5,
        });

        gsap.to(elem.querySelector(".elem i"), {
            opacity: 0.2,
            x: -20,
            // ease: Power3,
            // top: diff,
            // left: details.clientX,
            duration: 1,
        });
    });
});







// document.getElementById("menu-toggle").addEventListener("click", function() {
//     var menuToggle = this;
//     var navItems = document.querySelectorAll(".nav-item");
//     var isMenuOpen = menuToggle.classList.toggle("open");
// });


//no idea

document.getElementById("menu-toggle").addEventListener("click", function(event) {
    event.stopPropagation();
    var menuToggle = this;
    var navItems = document.querySelectorAll(".nav-item");
    // var x = document.querySelector("#menu-toggle");
    var isMenuOpen = menuToggle.classList.toggle("open");

    if (isMenuOpen) {
        document.getElementById("nav-items").style.display = "flex";
        gsap.to(menuToggle, {
            y: +15,
            opacity: 0,
            duration: 0.1,
            stagger: 0.3,
            ease: Power3,
        });
        gsap.to(navItems, {
            y: 0,
            opacity: 1,
            duration: 0.1,
            stagger: 0.1,
            ease: Power3,
            onComplete: function() {
                document.getElementById("menu-toggle").style.display = "none";
            }
        });
        
    }
    // else {
    //     gsap.to(navItems, {
    //         y: -100,
    //         opacity: 0,
    //         duration: 0.1,
    //         stagger: 0.3,
    //         ease: Power3,
    //         onComplete: function() {
    //             document.getElementById("nav-items").style.display = "none";
    //         }
    //     });
    //     gsap.to(menuToggle, {
    //         y: 0,
    //         duration: 0.1,
    //         opacity: 1,
    //         stagger: 0.3,
    //         ease: Power3,
    //     });
    // }
});


document.getElementById("nav-items").addEventListener("click", function(event) {
    event.stopPropagation();
});

document.addEventListener("click", function(event) {
    var menuToggle = document.getElementById("menu-toggle");
    var navItems = document.querySelectorAll(".nav-item");
    var isMenuOpen = menuToggle.classList.contains("open");

    if (isMenuOpen && !event.target.closest("#menu-toggle") && !event.target.closest("#nav-items")) {
        menuToggle.classList.remove("open");
        gsap.to(navItems, {
            y: -100,
            opacity: 0,
            duration: 0.1,
            stagger: 0.3,
            ease: Power3,
            onComplete: function() {
                document.getElementById("nav-items").style.display = "none";
            },
        });
        gsap.to(menuToggle, {
            y: 0,
            duration: 1,
            opacity: 1,
            stagger: 0.3,
            ease: Power3,
            onStart: function() {
                document.getElementById("menu-toggle").style.display = "unset";
            }
        });
    }
});





function handleHoverOpacity() {
    const elements = document.querySelectorAll('h2, h5, p, a, i'); 

    elements.forEach(function(element) {
        element.addEventListener("mouseenter", function() {
            // document.querySelector("#minicircle").style.opacity = "0.5";
            document.querySelector("#minicircle").style.width = "15px";
            document.querySelector("#minicircle").style.height = "15px";
            document.querySelector("#minicircle").style.margin = "-8px";
        });

        element.addEventListener("mouseleave", function() {
            // document.querySelector("#minicircle").style.opacity = "1";
            document.querySelector("#minicircle").style.width = "10px";
            document.querySelector("#minicircle").style.height = "10px";
            document.querySelector("#minicircle").style.margin = "-5px";
        });
    });
}

window.addEventListener('DOMContentLoaded', (event) => {
    handleHoverOpacity();
});





function handleOpacity() {
    const elements = document.querySelectorAll('h1');

    elements.forEach(function(element) {
        element.addEventListener("mousemove", function() {
            // document.querySelector("#minicircle").style.background = "grey";
            document.querySelector("#minicircle").style.mixBlendMode = "soft-light"; //soft-light
            document.querySelector("#minicircle").style.width = "40px";
            document.querySelector("#minicircle").style.height = "40px";
            document.querySelector("#minicircle").style.margin = "-19px";
        })

        element.addEventListener("mouseleave", function() {
            // document.querySelector("#minicircle").style.background = "white";
            document.querySelector("#minicircle").style.mixBlendMode = "difference";
            document.querySelector("#minicircle").style.width = "10px";
            document.querySelector("#minicircle").style.height = "10px";
            document.querySelector("#minicircle").style.margin = "-5px";
        })
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    handleOpacity();
})




function handlemeOpacity() {
    const elements = document.querySelectorAll('.me');

    elements.forEach(function(element) {
        element.addEventListener("mousemove", function() {
            // document.querySelector("#minicircle").style.background = "grey";
            document.querySelector("#minicircle").style.mixBlendMode = "soft-light"; //soft-light
            document.querySelector("#minicircle").style.width = "15px";
            document.querySelector("#minicircle").style.height = "15px";
            document.querySelector("#minicircle").style.margin = "-8px";
        })

        element.addEventListener("mouseleave", function() {
            // document.querySelector("#minicircle").style.background = "white";
            document.querySelector("#minicircle").style.mixBlendMode = "difference";
            document.querySelector("#minicircle").style.width = "10px";
            document.querySelector("#minicircle").style.height = "10px";
            document.querySelector("#minicircle").style.margin = "-5px";
        })
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    handlemeOpacity();
})




function handleVideoOpacity() {
    const elements = document.querySelectorAll('.elem');

    elements.forEach(function(element) {
        element.addEventListener("mousemove", function() {
            // document.querySelector("#minicircle").style.background = "grey";
            document.querySelector("#minicircle").style.mixBlendMode = "initial"; //soft-light
            document.querySelector("#minicircle").style.opacity = "0.4";
            document.querySelector("#minicircle").style.width = "100px";
            document.querySelector("#minicircle").style.height = "100px";
            document.querySelector("#minicircle").style.margin = "-53px";
            document.querySelector("#minicircle").style.paddingLeft = "35px";
            document.querySelector("#minicircle").style.paddingTop = "37px";
            document.querySelector("#minicircle").style.color = "black";
        })

        element.addEventListener("mouseleave", function() {
            // document.querySelector("#minicircle").style.background = "white";
            document.querySelector("#minicircle").style.mixBlendMode = "difference";
            document.querySelector("#minicircle").style.opacity = "1";
            document.querySelector("#minicircle").style.width = "10px";
            document.querySelector("#minicircle").style.height = "10px";
            document.querySelector("#minicircle").style.margin = "-5px";
            document.querySelector("#minicircle").style.paddingLeft = "0px";
            document.querySelector("#minicircle").style.paddingTop = "0px";
            document.querySelector("#minicircle").style.color = "transparent";
        })
    })
}

window.addEventListener('DOMContentLoaded', (event) => {
    handleVideoOpacity();
})



// gsap.from("#second .elem1",{
//     y:300,
//     // delay:2,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:"#second .elem",
//         scroller:"body",
//         markers:true,
//         start:"top 100%"
//     }
// })
// gsap.from("#second .elem2",{
//     y:300,
//     delay:0.2,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:"#second .elem",
//         scroller:"body",
//         markers:true,
//         start:"top 100%"
//     }
// })
// gsap.from("#second .elemlast",{
//     y:300,
//     delay:0.4,
//     duration:0.5,
//     scrollTrigger:{
//         trigger:"#second .elem",
//         scroller:"body",
//         markers:true,
//         start:"top 100%"
//     }
// })