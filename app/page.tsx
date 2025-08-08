'use client'

import { AppLayout } from '../components'
import { Services } from '../components/ui/Services'
import es from '../translations/es.json'
import { useEffect, useState } from 'react'
import { NewHero } from '../components/ui/NewHero'
import { FixedImageSlider } from '../components/ui/FixedImageSlider'
import { WorkStatic } from '../components/ui/WorkStatic'
import gsap from "gsap"
import { ScrollTrigger } from "gsap/dist/ScrollTrigger"
import { TestimonialsSlider } from '../components/ui/TestimonialsSlider'
import { About } from '../components/ui/About'
import { Clients } from '../components/ui/Clients'
import { ClientsSlider } from '../components/ui/ClientsSlider'

export default function Home() {
  const [locale, setLocale] = useState("en")

  useEffect(() => {
    // In App Router, we need to handle locale differently
    // For now, defaulting to "en"
    setLocale("en")
  }, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      gsap.registerPlugin(ScrollTrigger)
      gsap.utils.toArray(".parallax-image").forEach((layer: any) => {
        const depth = layer.dataset.depth
        const movement = -(layer.offsetHeight * depth)
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: layer,
            start: "top top",
            end: "bottom top",
            scrub: true
          }
        })
        tl.to(layer, { y: movement, ease: "none" })
      })
    }
  }, [])

  return (
    <AppLayout
      //@ts-ignore  
      title={es.SEO.title[locale]}
      //@ts-ignore  
      description={es.SEO.description[locale]}>
      <FixedImageSlider />
      <NewHero />
      <About />
      <WorkStatic />
      <Clients />
      <Services />
      {/* <BlogSection /> */}
      {/* <TestimonialsSlider /> */}
      {/* <div className="video-full-screen">
        <img src="/GridOdein.jpg" alt="" className='parallax-image' data-depth="0.1" />
      </div> */}
    </AppLayout>
  )
} 