import gsap from "gsap"
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context.shared-runtime"

export const animatePageIn = ()=>{
    const loader = (document.querySelector('.loader')) as HTMLElement
    const main = document.querySelector('main') as HTMLElement
    const logo = (document.querySelector('.loader img')) as HTMLElement
    console.log("loader", loader)
    
    if (!loader) {
        console.error("Loader element not found")
        return
    }
    
    const tl = gsap.timeline()

    // Set initial state
    tl.add('start')
    tl.set([loader], {
        clipPath: "inset(0 0 0 0)"
    })
    .set([logo], {
        opacity: 1,
        yPercent: 0
    })
    .set([main], {
        transform: "translateY(10px)",
        opacity: 0
    })

    
    tl.to([loader], {
        clipPath: "inset(100% 0 0 0)",
        duration: 0.7,
        ease: "power2.inOut",
    }, 'start')
    .to([logo], {
        opacity: 0,
        duration: 0.5,
        ease: "power2.inOut",
        yPercent: -10
    }, 'start')
    .to([main], {
        transform: "translateY(0)",
        opacity: 1,
        duration: 1,
        ease: "power2.inOut"
    }, 'start')
}

export const animatePageOut = (href: string, router: AppRouterInstance)=>{
    const loader = (document.querySelector('.loader')) as HTMLElement
    const logo = (document.querySelector('.loader img')) as HTMLElement
    console.log("loader", loader)
    
    if (!loader) {
        console.error("Loader element not found")
        return
    }
    
    const tl = gsap.timeline()

    // Set initial state
    tl.add('start')
    tl.set([loader], {
        clipPath: "inset(0 0 100% 0)"
    })
    .set([logo], {
        opacity: 0,
        yPercent: 30
    })

    
    tl.to([loader], {
        clipPath: "inset(0 0 0% 0)",
        duration: 0.5,
        ease: "power2.inOut",
    }, 'start')
    .to([logo], {
        opacity: 1,
        duration: 1.2,
        ease: "power2.inOut",
        yPercent: 0,
        onComplete: () => {
            router.push(href)
        }
    }, 'start')
}