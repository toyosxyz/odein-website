import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const scrollTriggerAnimationsWork = ()=>{

  setTimeout(()=>{
    gsap.registerPlugin(ScrollTrigger);

    //Hero items animations
    const heroTl = gsap.timeline()
    heroTl.to('.project-hero',{filter: "none"})
    heroTl.to('.text-reveal-bottom.project-hero__title span', { opacity: 1 , y: 0}, "+=0.5")


    //Fade right item animations
    const textRevealTexts = gsap.utils.toArray('.text-reveal-bottom:not(.project-hero__title) span')
    textRevealTexts.forEach(function (container) {
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: container.parentElement,
          start: "top 60%",
          end: "top 60%",
          scrub: 1,
        //   markers: true
        }
      })
      revealTl.to(
          container,
          { opacity: 1 , y: 0}
        );
      });
    
    if(window.innerWidth > 768){
    //Fade up item animations
    const fadeUp = gsap.utils.toArray('.fade-up')
    fadeUp.forEach(function (container) {
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top 60%",
          end: "top 60%",
          scrub: 1,
        //   markers: true
        }
      })
      revealTl.to(
          container,
          { opacity: 1 , y: 0}
        );
      });
    
    //Fade up images animations
      const parallaxImages = gsap.utils.toArray('.parallax-image')
      parallaxImages.forEach(function (container) {
        const revealTl = gsap.timeline({
          scrollTrigger: {
            trigger: container,
            start: "top 20%",
            scrub: 1,
          //   markers: true
          }
        })
        revealTl.from(
            container,
            { y: 40}
          );
        });
    }


    //Move marquee items
    const marqueeTop = gsap.utils.toArray('.project-marquee_wrapper--top')
    marqueeTop.forEach(function (container) {
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        //   markers: true
        }
      })
      revealTl.fromTo(
          container,
          { x: "10%"},
          { x: "-10%"}
        );
    });
    
    const marqueeBottom = gsap.utils.toArray('.project-marquee_wrapper--bottom')
    marqueeBottom.forEach(function (container) {
      const revealTl = gsap.timeline({
        scrollTrigger: {
          trigger: container,
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        //   markers: true
        }
      })
      revealTl.fromTo(
          container,
          { x: "-10%"},
          { x: "10%"}
        );
    });
    
  }, 1500)
}