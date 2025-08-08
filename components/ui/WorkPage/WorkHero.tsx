import { useEffect, useState } from "react"

import { workAnimations } from '../../../js/workAnimations'

export const WorkHero = ()=>{
    
    const [currentTime, setCurrentTime ] = useState("14:32:22")

    useEffect(()=>{
        if(typeof window !== undefined && window.innerWidth > 768){
            workAnimations()
        }
    })

    return(
        <section className="hero-section work-hero-section">
            <h2 className="title">Work</h2>
        </section>
    )
}