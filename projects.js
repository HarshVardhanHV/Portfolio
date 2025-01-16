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

document.querySelectorAll('#nav-items .scroll').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();  // Prevent default behavior
        const targetId = e.target.getAttribute('href').substring(1);  // Get the section ID
        const targetSection = document.getElementById(targetId);  // Get the target section by ID
        
        if (targetSection) {
            // Scroll to the target section with smooth behavior
            window.scrollTo({
                top: targetSection.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


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

function firstPageAni(){
    var tl = gsap.timeline();

    if (window.innerWidth < 480) {
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
    
        .from("img", {
            x: '-500',
            opacity: 0,
            duration: 1.5,
            delay: -1.4,
            ease: Expo.easeInOut
        })
        .from(".image-text", {
            // x: '-500',
            opacity: 0,
            duration: 1,
            delay: -0.1,
            ease: Expo.easeInOut
        })
    
        .from("#iconset", {
            y: '+60',
            opacity: 0,
            duration: 3,
            delay: -1,
            ease: Expo.easeInOut
        })
    } else {
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
    
        .from("img", {
            x: '-1200',
            opacity: 0,
            duration: 3,
            delay: -0.5,
            ease: Power3
        })
    
        .from("#iconset", {
            y: '+60',
            opacity: 0,
            duration: 6,
            delay: -1.9,
            ease: Expo.easeInOut
        })
    }
}

firstPageAni();


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


document.addEventListener('DOMContentLoaded', () => {
    const container = document.querySelector('#container');
    const main = document.querySelector('#main');

    let isScrolling = false;

    window.addEventListener('scroll', (event) => {
        if (isScrolling) return;

        const scrollDirection = window.scrollY;

        const maxHorizontalScroll = container.scrollWidth - container.clientWidth;
        const currentHorizontalScroll = container.scrollLeft;

        if (scrollDirection > 0 && currentHorizontalScroll < maxHorizontalScroll) {
            container.scrollLeft += scrollDirection;
            isScrolling = true;
            setTimeout(() => {
                isScrolling = false;
            }, 50);
        }
    });

    window.addEventListener('wheel', (event) => {
        if (event.deltaX !== 0) {
            event.preventDefault();
        }
    }, { passive: false });

    // function circleMouseFollower() {
    //     window.addEventListener('mousemove', function(details) {
    //         const minicircle = document.querySelector('#minicircle');
    //         minicircle.style.transform = `translate(${details.clientX}px, ${details.clientY}px)`;
    //     });
    // }

    // circleMouseFollower();
});

if (window.innerWidth < 480) {
    gsap.to("#container a",{
        transform:"translateX(0%)",
        scrollTrigger:{
            trigger:"#container",
            scroller:"body",
            // markers:true,
            start:"top 0%",
            end:"top 0%",
            scrub:1.5,
            pin:true
        }
    })
} else {
    gsap.to("#container a",{
        transform:"translateX(-282%)",
        scrollTrigger:{
            trigger:"#container",
            scroller:"body",
            // markers:true,
            start:"top 0%",
            end:"top -282%",
            scrub:1.5,
            pin:true
        }
    })
}
