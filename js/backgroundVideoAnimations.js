import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const backgroundVideoAnimations = ()=>{
    gsap.registerPlugin(ScrollTrigger);
    const tVideo = gsap.timeline({
        scrollTrigger: {
          trigger: document.querySelector(".fixed-background-video"),
          start: "top 0%",
          end: "+=100%",
          scrub: 1,
        },
      });
      tVideo.to(".fixed-background-video", {
        duration: 3,
        opacity: 0,
        ease: Expo.easeInOut
    });
}
