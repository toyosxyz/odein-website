import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const scrollTriggerAnimations = ()=>{

    const globalMargins = window.innerWidth < 768 ? window.innerWidth * 0.041 : window.innerWidth * 0.041

    gsap.registerPlugin(ScrollTrigger);

    let fadeInItems;
    let fadeInItemsAfter;
    let start;
    if(window.innerWidth>768){
        fadeInItems = gsap.utils.toArray(".fade-in")
        fadeInItemsAfter = gsap.utils.toArray(".fade-in-after")
        start = "top 80%"
    }else{
        fadeInItems = gsap.utils.toArray(".fade-in, .fade-in--mobile")
        fadeInItemsAfter = gsap.utils.toArray(".fade-in-after, .fade-in--mobile, .fade-in")
        start = "top 100%"
    }

  if(window.innerWidth > 768){

    const sections = gsap.utils.toArray(".work__item");
    let maxWidth = 0;

    const getMaxWidth = () => {
      maxWidth = 0;
      sections.forEach(section => {
        maxWidth += section.offsetWidth;
        maxWidth += gsap.getProperty(section, 'marginLeft');
      });
      maxWidth += 20;
      maxWidth += window.innerWidth;
      maxWidth -= sections[0].offsetWidth;
      return maxWidth;
    };

    getMaxWidth();
    ScrollTrigger.addEventListener("refreshInit", getMaxWidth);


    const itemsMaxWidth = ()=>{
      let max = 0
      const sections = gsap.utils.toArray(".work__item");
      sections.forEach(section=>{
        max+=section.offsetWidth+window.innerWidth*0.02
      })
      return (max - window.innerWidth*0.02 - window.innerWidth) + (globalMargins * 2)
    }



    const slider = document.querySelector('.work__wrapper')
    const horizontal_slider_timeline = gsap.timeline()
    horizontal_slider_timeline.to(slider, {
      x: -itemsMaxWidth(),
      ease: "none",
      scrollTrigger: {
        trigger: slider,
        start: 'top 10%', 
        end: `+=100%`,
        //markers: true,
        pinSpacing: true,
        pin: true, 
        scrub: 1,
    } });

    
    const fadeInTl = gsap.timeline()

    fadeInItems.forEach(function (container) {
      fadeInTl.fromTo(
          container,
          { opacity: 0 , y: 50},
          {
            opacity: 1,
            y: 0,
            stagger: 0.3,
            scrollTrigger: {
              trigger: container,
              scrub: false,
              start: start,
              end: "top 20%",
              immediateRender: true,
              pinnedContainer: ".work__wrapper"
            //   markers: true
            }
          }
        );
      });



    //Fade right item animations
    const fadeRightItems = gsap.utils.toArray('.fade-right')
    fadeRightItems.forEach(function (container) {
      const tFadeRight = gsap.timeline({
        scrollTrigger: {
            trigger: container,
            start: "top 80%",
            end: "top 80%",
            scrub: 1,
            pinnedContainer: ".work__wrapper"
        }
      });
      tFadeRight.to(container, {
        width: "100%"
      })
      
    });
    
    
    
    //Fade right item animations
    const textRevealTexts = gsap.utils.toArray('.text-reveal-bottom span')
    textRevealTexts.forEach(function (container) {
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.parentElement,
          start: "top 50%",
          end: "top 50%",
          scrub: 1,
          pinnedContainer: ".work__wrapper"
        //   markers: true
        }
      })
      revealTl.to(
          container,
          { opacity: 1 , y: 0}
        );
      });
    
    
      //Fade top item animations
    const workItemTransforms = gsap.utils.toArray('.work__item')
    workItemTransforms.forEach(function (container) {
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.parent,
          start: "top 80%",
          end: "top 0",
          scrub: 1,
          pinnedContainer: ".work__wrapper"
        //   markers: true
        }
      })
      revealTl.to(
          container,
          { opacity: 1 , y: 0}
        );
      });
  }
}