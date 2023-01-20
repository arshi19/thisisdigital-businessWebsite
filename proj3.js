function show(){
    gsap.registerPlugin(ScrollTrigger);



const locoScroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true
});

locoScroll.on("scroll", ScrollTrigger.update);


ScrollTrigger.scrollerProxy(".main", {
  scrollTop(value) {
    return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
  },
  getBoundingClientRect() {
    return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
  },

  pinType: document.querySelector(".main").style.transform ? "transform" : "fixed"
});

ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

ScrollTrigger.refresh();

}

show();
function swipper(){
    var swiper = new Swiper(".mySwiper", {
      spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
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
  }
  
  swipper();

  gsap.from(".main .page1 .mid .left",{
    y:100,
    opacity:0,
    duration:1
  })
  gsap.from(".main .page1 .mid .top",{
    x:  100,
    opacity:0,
    duration:1
  })
  gsap.from(".main .page1 .mid .right",{
    y:-100,
    opacity:0,
    duration:1
  })
  gsap.from(".main .page1 .mid .digital",{
    opacity:0,
    duration:.9
  })





  gsap.from(".main .page2 h5",{
    scrollTrigger:{
      trigger:".page2 h5",
      scroller:".main",
      // start:"top 80%",
      // markers:true
    },
    opacity:0,
    y:200,
    duration:1
  
  })

  gsap.from(".main .page2 h1",{
    scrollTrigger:{
      trigger:".page2 h1",
      scroller:".main",
      // start:"top 80%",
      // markers:true
    },
    opacity:0,
    y:200,
    duration:1
  
  })
  gsap.from(".main .page2 h6",{
    scrollTrigger:{
      trigger:".page2 h6",
      scroller:".main",
      start:"top 130%",
      // markers:true
    },
    opacity:0,
    y:200,
    duration:.7
  
  })
  
  
  // third page 
  
  gsap.from(".main .page3 .one",{
    scrollTrigger:{
      trigger:".page3 .one",
      scroller:".main",
      // start:"top 80%",
      // end:"top 0%",
      
      // markers:true
      // scrub:2,
    },
    opacity:0,
    x:-200,
    duration:1
  
  })
  gsap.from(".main .page3 .two",{
    scrollTrigger:{
      trigger:".page3 .two",
      scroller:".main",
      start:"top 140%",
      // end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    y:200,
    duration:1
  
  })

    
  gsap.from(".main .page3 .three",{
    scrollTrigger:{
      trigger:".page3 .three",
      scroller:".main",
      // start:"top 90%",
      // end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    x:200,
    duration:1
  })
  

  gsap.from(".main .page3 .four",{
    scrollTrigger:{
      trigger:".page3 .four",
      scroller:".main",
      // start:"top 60%",
      // end:"top 0%",
      // markers:true
      // scrub:2,
    },
    opacity:0,
    y:-200,
    duration:1
  
  })

  
  
  
  gsap.from(".main .page3 .right .learn",{
    scrollTrigger:{
      trigger:".page3.right .learn",
      scroller:".main",
      start:"top 90%",
      end:"top 0%",
      // markers:true
    },
    opacity:0,
    y:100,
    duration:1
  })

  gsap.from(".main .page4 > h1",{
    scrollTrigger:{
      // trigger:".page4 ",
      // scroller:".main",
      // start:"top 50%",
      // end:"top 0%",
      // markers:true
    },
    opacity:0,
    y:80,
    duration:1
  })
  
  
  // page five
  
  gsap.from(".main .page5 .top",{
    scrollTrigger:{
      trigger:".page5.top",
      scroller:".main",
      start:"top 100%",
      end:"top 0%",
      // markers:true
    },
    opacity:0,
    y:100,
    duration:1
  })
  
  gsap.from(".main .page5 .icon",{
    scrollTrigger:{
      trigger:".page5 .icon",
      scroller:".main",
      start:"top 100%",
      end:"top 0%",
      // markers:true
    },
    opacity:0,
    y:100,
    duration:1
  })
  
  // page seven


// gsap.from(".main .seventh .overflow",{
//   scrollTrigger:{
//     trigger:".seventh .overflow",
//     scroller:".main",
//     // start:"top 170%",
//     // end:"top 0%",
//     // markers:true
//   },
//   opacity:-4,
//   // y:100,
//   duration:1
// })


  
  
  