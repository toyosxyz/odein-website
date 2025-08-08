import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const workAnimations = ()=>{
    const header = document.querySelector('.site-header')
    const headerHeight = header.offsetHeight
    const distanceTop = (headerHeight / 2) - (document.querySelector('.hero-section__logo-svg').offsetHeight / 2)
    gsap.registerPlugin(ScrollTrigger);
    const tLogo = gsap.timeline({
        scrollTrigger: {
            trigger: document.querySelector(".hero-section"),
            start: "top 0%",
            end: "+=80%",
            scrub: 1,
        }
    });
    tLogo.to(".hero-section__logo-svg", {
        top: "-50",
        width: 200,
        left: "50%",
        zIndex: 9999
    });
}