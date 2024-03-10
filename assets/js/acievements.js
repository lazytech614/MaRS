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