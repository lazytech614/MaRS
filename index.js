var body = document.querySelector("body");
var crsr = document.querySelector(".cursor");
var crsr_blur = document.querySelector(".cursor-blur");
var nav_icons = document.querySelectorAll(".nav h4");

body.addEventListener("mousemove", function(e){
    crsr.style.left = e.x+"px";
    crsr.style.top = e.y+"px";
    crsr_blur.style.left = e.x-200+"px";
    crsr_blur.style.top = e.y-200+"px";
})

gsap.to(".nav",{
    backgroundColor: "black",
    duration: 0.5,
    height: "110px",
    scrollTrigger: {
        trigger: ".nav",
        scroller: "body",
        start: "top -10%",
        end: "top -11%",
        scrub: 1,
    }
})

gsap.to(".main",{
    backgroundColor: "black",
    scrollTrigger: {
        trigger: ".main",
        scroller: "body",
        start: "top -25%",
        end: "top -100%",
        scrub: 4,
    }
})

gsap.from(".about img, .about-in",{
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    }
})

gsap.from("#top-colon",{
    y: -70,
    x: -70,
    scrollTrigger: {
        trigger: "#top-colon",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 4,
    }
})

gsap.from("#bottom-colon",{
    y: 70,
    x: 70,
    scrollTrigger: {
        trigger: "#top-colon",
        scroller: "body",
        start: "top 50%",
        end: "top 47%",
        scrub: 4,
    }
})

gsap.from("#question",{
    y: 100,
    opacity: 0,
    duration: 1,
    scrollTrigger: {
        trigger: "#question",
        scroller: "body",
        start: "top 70%",
        end: "top 65%",
        scrub: 2,
    }
})

// nav_icons.forEach(function(elem){
//     elem.addEventListener("mouseenter", function(){
//         crsr.style.scale = 3;
//         crsr.style.backgroundColor = "transparent";
//         crsr.style.border = "1px solid white";
//     })
//     elem.addEventListener("mouseleave", function(){
//         crsr.style.scale = 1;
//         crsr.style.backgroundColor = "#95C11E";
//         crsr.style.border = 0;
//     })
// })



