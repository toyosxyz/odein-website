"use client"

import { FC, useEffect, useRef } from "react"
import { animatePageIn } from "../../utils/pageAnimations"

export const Loader: FC = () => {
    const loaderRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        // Small delay to ensure element is fully rendered
        const timer = setTimeout(() => {
            animatePageIn()
        }, 100)
        console.log("timer", timer)
        
        return () => clearTimeout(timer)
    }, [])

    return (
        <div className="loader" id="Loader" ref={loaderRef}>
            <img loading="lazy" src="/Logo.svg" alt="" />
        </div>
    )
}