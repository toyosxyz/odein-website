import gsap, { Expo } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";


export const menuAnimations = (isOnHome)=>{
    const t1 = gsap.timeline({ paused: true })
    
    t1.to(".menu-mobile" ,{
        clipPath: "polygon(0 0, 100% 0, 100% 100%, 0 100%)",
        width: "100vw",
        top: 0,
        right: 0,
        borderRadius: 0,
        ease: Expo.easeInOut
      })
      
      t1.to(".site-header__menu-item", {
        y: 0,
        duration: 0.75,
        opacity: 1,
        ease: "power1.inOut",
        stagger: 0.1
      }, "<")
      
      t1.to(".menu-mobile .work__item__video", {
        duration: 1,
        paddingBottom: "70%",
        ease: "power2.out",
      }, "<")
      
      t1.to(".menu-mobile .work__item__info", {
        duration: 1.2,
        opacity: 1,
        y: 0,
        ease: "power2.out",
      }, "<")

        t1.to('.site-header__logo', {
        filter: "invert(1)"
      }, "<")
        
      t1.to('.toggle-mobile-menu', {
        filter: "invert(1)"
      }, "<")
      
      t1.reverse()



      document.querySelectorAll('.site-header__menu-item').forEach(item => {
        item.addEventListener('mouseenter', (e) => {
          const menu = e.target.closest('.site-header__menu');
          const rect = e.target.getBoundingClientRect();
          const menuRect = menu.getBoundingClientRect();
          
          menu.style.setProperty('--hover-width', `${rect.width}px`);
          menu.style.setProperty('--hover-left', `${rect.left - menuRect.left}px`);
          menu.style.setProperty('--hover-opacity', '0.6');
        });
      });
      
      // Reset when mouse leaves the menu
      document.querySelector('.site-header__menu').addEventListener('mouseleave', (e) => {
        e.target.style.setProperty('--hover-opacity', '0');
      });


    if(isOnHome && window.innerWidth > 768){
        const header = document.querySelector('.site-header')
        const headerHeight = header.offsetHeight
        const distanceTop = (headerHeight / 2) - 9
        gsap.registerPlugin(ScrollTrigger);
        const tLogo = gsap.timeline({
            scrollTrigger: {
                trigger: document.querySelector(".hero-section"),
                start: "top 0%",
                end: "+=80%",
                scrub: 0.2,
            }
        });
        // tLogo.to(".hero-section__logo-svg", {
        //     top: distanceTop > 50 ? distanceTop : 50 || 50,
        //     width: 120,
        //     zIndex: 9999,
        //     // onRepeat: ()=>{
        //     //     document.querySelector(".hero-section__logo-svg").style.mixBlendMode = "none"
        //     // },
        //     // onComplete: ()=>{
        //     //     document.querySelector(".hero-section__logo-svg").style.mixBlendMode = "difference"
        //     // }
        // });
        
        
        // const tInfo = gsap.timeline({
        //     scrollTrigger: {
        //         trigger: document.querySelector(".hero-section"),
        //         start: "top 0%",
        //         end: 50,
        //         scrub: 1,
        //     }
        // });
        // tInfo.to(".hero-section__bottom-content", {
        //     y: 50,
        //     opacity: 0,
        //     ease: Expo.easeInOut
        // });
    }

      
    //Header items animation
    const menuItems = document.querySelectorAll('.site-header__menu-item');
    const linkButtons = document.querySelectorAll('.link');
    const cursor = document.querySelector('.cursor');

    const editCursor = e => {
        const { clientX: x, clientY: y } = e;
        cursor.style.left = x + 'px';
        cursor.style.top = y + 'px';
    };
    window.addEventListener('mousemove', editCursor);


    const animateMenuItem = function (e) {
        const span = this.querySelector('span');
        if (!span) return;

        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 25,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        span.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') span.style.transform = '';
    };

    const animateLink = function (e) {
        const { offsetX: x, offsetY: y } = e,
        { offsetWidth: width, offsetHeight: height } = this,

        move = 3,
        xMove = x / width * (move * 2) - move,
        yMove = y / height * (move * 2) - move;

        this.style.transform = `translate(${xMove}px, ${yMove}px)`;

        if (e.type === 'mouseleave') this.style.transform = '';
    };

    if(window.innerWidth > 768){
        menuItems.forEach(item => {
            item.addEventListener('mousemove', animateMenuItem);
            item.addEventListener('mouseleave', animateMenuItem);
        });

        /*linkButtons.forEach(link => {
            link.addEventListener('mousemove', animateLink);
            link.addEventListener('mouseleave', animateLink);
        });*/
    }



    //Custom hover animation
    const hoveredItems = document.querySelectorAll('.hovered-item')
    hoveredItems.forEach(item=>item.addEventListener("mouseenter", cursor.classList.add("hovering")))
    hoveredItems.forEach(item=>item.addEventListener("mouseleave", cursor.classList.remove("hovering")))
}