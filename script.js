// -----Nav hover animation---

document.querySelector("#nav").addEventListener("mouseenter",function(){
    gsap.to(".cover",{
        duration:.2,
        height:"100%",
        opacity:1
    })
})

document.querySelector("#nav").addEventListener("mouseleave",function(){
    gsap.to(".cover",{
        duration:.2,
        height:0,
        opacity:0
    })
})


// -----First page animation---
gsap.from("#content h1",{
    y:50,
    duration:.5,
    opacity:0
})
gsap.from("#content p",{
    y:50,
    duration:.5,
    opacity:0,
    delay:.5
})
gsap.to("#content a",{
    opacity:1,
    duration:.5,
    delay:1
})


// -----Second page animation---

gsap.from("#section2 h1",{
    scrollTrigger:{
        trigger: "#section2 h1",
        start: "top 80%",
        // markers: true
    },
    y:20,
    opacity:0,
    duration:1
})

gsap.from("#section2 p",{
    scrollTrigger:{
        trigger: "#section2 h1",
        start: "top 80%",
        // markers: true
    },
    y:20,
    opacity:0,
    delay:.5,
    duration:1
})

gsap.from(".leftcard",{
    scrollTrigger:{
        trigger: ".leftcard",
        start: "top 60%",
        // markers: true
    },
    x:-100,
    opacity:0,
    duration:2
})

gsap.from(".centercard",{
    scrollTrigger:{
        trigger: ".centercard",
        start: "top 70%",
        // markers: true
    },
    y:50,
    opacity:0,
    delay:.5,
    duration:1
})

gsap.from(".rightcard",{
    scrollTrigger:{
        trigger: ".rightcard",
        start: "top 70%",
        // markers: true
    },
    x:100,
    opacity:0,
    duration:2
})


// -----third page animation---

gsap.from("#menu #onemenu #onemenucontent",{
    scrollTrigger:{
        trigger: "#menu #onemenu",
        start: "top 80%",
        // markers: true
    },
    x:-100,
    opacity:0,
    duration:2
})

gsap.from("#menu #onemenu #onemenuimage",{
    scrollTrigger:{
        trigger: "#menu #twomenu",
        start: "top 80%",
        // markers: true
    },
    x:100,
    opacity:0,
    duration:2,
    delay:.5
})

gsap.from("#menu #twomenu #twomenucontent",{
    scrollTrigger:{
        trigger: "#menu #twomenu",
        start: "top 80%",
        // markers: true
    },
    x:-100,
    opacity:0,
    duration:2
})

gsap.from("#menu #twomenu #twomenuimage",{
    scrollTrigger:{
        trigger: "#menu #twomenu",
        start: "top 80%",
        // markers: true
    },
    x:100,
    opacity:0,
    duration:2,
    delay:.5
})
gsap.from("#menu a",{
    scrollTrigger:{
        trigger: "#menu a",
        start: "top 80%",
        // markers: true
    },
    opacity:0,
    duration:1
})


// -----fourth page animation---
var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    autoplay: {
      delay: 3500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


// -----fifth page animation---

gsap.from("#section3 #overlay #top",{
    scrollTrigger:{
        trigger: "#section3 #overlay",
        start: "top 80%",
        // markers: true
    },
    y:50,
    opacity:0,
    duration:1
})

gsap.from("#section3 #overlay #bottom img",{
    scrollTrigger:{
        trigger: "#section3 #overlay #bottom",
        start: "top 50%",
        // markers: true
    },
    y:50,
    opacity:0,
    stagger:.5,
    duration:1
})

gsap.from("#section3 #overlay #bottom h4",{
    scrollTrigger:{
        trigger: "#section3 #overlay #bottom",
        start: "top 40%",
        // markers: true
    },
    y:-50,
    opacity:0,
    // stagger:.5,
    delay:1,
    duration:1
})


// -----sixth page animation---

gsap.from("#lastsection .left",{
    scrollTrigger:{
        trigger: "#lastsection .left",
        start: "top 75%",
        // markers: true
    },
    y:50,
    opacity:0,
    duration:1
})

gsap.from("#lastsection .contactcolumn>h3",{
    scrollTrigger:{
        trigger: "#lastsection .contactcolumn>h3",
        start: "top 75%",
        // markers: true
    },
    opacity:0,
    duration:1
})

gsap.from(".day",{
    scrollTrigger:{
        trigger: "#lastsection .contactcolumn",
        start: "top 75%",
        // markers: true
    },
    y:50,
    opacity:0,
    stagger:.5,
    duration:1,
    ease:Expo.easeInOut
})

gsap.from("#contactdiv h2",{
    scrollTrigger:{
        trigger: "#lastsection .contactcolumn",
        start: "top 75%",
        // markers: true
    },
    y:50,
    opacity:0,
    stagger:.5,
    duration:1,
    ease:Expo.easeInOut
})