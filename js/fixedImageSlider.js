import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

export const fixedImageSlider = ()=>{
    const sliders = document.querySelectorAll(".fixed-image-slider")

    // gsap.registerPlugin(ScrollTrigger);
    // const tImageSlider = gsap.timeline({
    //     scrollTrigger: {
    //       trigger: document.querySelector(".fixed-image-slider"),
    //       start: "top 0%",
    //       end: "+=100%",
    //       scrub: 1,
    //     },
    //   });
    //   tImageSlider.to(".fixed-image-slider", {
    //     duration: 30,
    //     opacity: 0,
    //     ease: Expo.easeInOut
    // });


    sliders.forEach(slider=>{
        //Animation for slider
        const slides = slider.querySelectorAll('img')
        let currentIndex = 0
        animateSlides(0)
    
        setInterval(()=>{
            currentIndex++
            if(currentIndex >= slides.length){
                currentIndex = 0
            }
            animateSlides(currentIndex)
        }, 3700)
        
        function animateSlides(currentIndex){
            slides.forEach(slide=>{slide.style.opacity = "0";})
            //Apply animation to selected slide
            gsap.to(slides[currentIndex], {
                duration: 3.5,
                scale: 1.1
            })
            slides[currentIndex].style.opacity = "1"
            setTimeout(()=>{
                //Reset previous slide
                gsap.to(slides[currentIndex-1], {
                    duration: 0.2,
                    scale: 1
                })
            }, 300)
        }
    })


}
