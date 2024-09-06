// const scroll = new LocomotiveScroll({
//     el: document.querySelector('#main'),
//     smooth: true
// });

function circleMouseFollower() {
    window.addEventListener("mousemove", function(details) {
        const minicircle = document.querySelector("#minicircle");
        minicircle.style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    });
}

circleMouseFollower();


// function handleOpacity() {
//     const elements = document.querySelectorAll('h1');

//     elements.forEach(function(element) {
//         element.addEventListener("mousemove", function() {
//             // document.querySelector("#minicircle").style.background = "grey";
//             document.querySelector("#minicircle").style.mixBlendMode = "soft-light"; //soft-light
//             document.querySelector("#minicircle").style.width = "40px";
//             document.querySelector("#minicircle").style.height = "40px";
//             document.querySelector("#minicircle").style.margin = "-19px";
//         })

//         element.addEventListener("mouseleave", function() {
//             // document.querySelector("#minicircle").style.background = "white";
//             document.querySelector("#minicircle").style.mixBlendMode = "difference";
//             document.querySelector("#minicircle").style.width = "10px";
//             document.querySelector("#minicircle").style.height = "10px";
//             document.querySelector("#minicircle").style.margin = "-5px";
//         })
//     })
// }

// window.addEventListener('DOMContentLoaded', (event) => {
//     handleOpacity();
// })


function firstPageAni(){
    var tl = gsap.timeline();

    tl.to(".pro .pro-head", {
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

    .from("video", {
        // x: '-1500',
        opacity: 0,
        duration: 2,
        delay: -0.5,
        ease: Power3
    })

    .from("#iconset", {
        y: '+10',
        opacity: 0,
        duration: 2,
        delay: -1.9,
        ease: Expo.easeInOut
    })
    
}

firstPageAni();


document.getElementById("menu-toggle").addEventListener("click", function() {
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

document.getElementById("nav-items").addEventListener("click", function() {
    var navItems = document.querySelectorAll(".nav-item");
    var menuToggle = document.querySelectorAll("#menu-toggle");

    gsap.to(navItems, {
        y: -100,
        opacity: 0,
        duration: 0.1,
        stagger: 0.3,
        ease: Power3,
        onComplete: function() {
            document.getElementById("nav-items").style.display = "none";
        },
        // onComplete: function() {
        //     document.getElementById("menu-toggle").style.display = "unset";
        // }
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
})






gsap.to("#container video",{
    transform:"translateX(-185%)",
    scrollTrigger:{
        trigger:"#container",
        scroller:"body",
        // markers:true,
        start:"top 0%",
        end:"top -185%",
        scrub:1,
        pin:true
    }
})

// gsap.from("#container video",{
//     transform:"translateX(0)",
//     scrollTrigger:{
//         trigger:"#container",
//         scroller:"body",
//         // markers:true,
//         start:"down -170%",
//         end:"down 0",
//         scrub:2,
//         pin:true
//     }
// })
