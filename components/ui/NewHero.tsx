import { useEffect, useState } from "react"


export const NewHero = ()=>{
    
    const [currentTime, setCurrentTime ] = useState("14:32:22")

    useEffect(()=>{
        setTimeout(()=>{
            const dateTime = new Date()
            setCurrentTime(dateTime.getHours().toString().padStart(2, "0") + ":" + dateTime.getMinutes().toString().padStart(2, "0") + ":" + dateTime.getSeconds().toString().padStart(2, "0"))
        }, 1000)
    })

    return(
        <section className="hero-section">
            <div className="hero-section__logo-svg">
                <img loading="lazy" src="../../Logo.svg" alt="Site Logo. Go to home page" />
            </div>
            <h1 className="hero-section__title">
                We build digital flagship stores
            </h1>
        </section>
    )
}