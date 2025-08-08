'use client'

import router, { useRouter } from "next/navigation";
import { FC, useEffect, useState } from "react"
import ReactDOM from "react-dom";

import axios from 'axios'

import es from '../../translations/es.json'
import { FixedImageSlider } from "./FixedImageSlider";

interface IServices{
    title?: string
}

export const Services:FC<IServices> = ({title}) => {

  const router = useRouter()
  const locale = "en" as string

  const services = 
    [
      {
        "label": "UX/UI Design",
        "url": "/icons/Design.svg",
        "description": "We design Shopify experiences that do more than look good — they convert. Every pixel, interaction, and flow is crafted to connect emotionally with your audience while guiding them toward action."
      },
      {
        "label": "Development",
        "url": "/icons/StoreSetup.svg",
        "description": "From custom themes to complex functionality, we bring your vision to life with clean, scalable code. Our builds are fast, reliable, and tailored to your business goals — no templates, no shortcuts."
      },
      {
        "label": "Integrations",
        "url": "/icons/Consultancy.svg",
        "description": "We connect the tools that power your business. From ERPs to marketing platforms, we ensure your Shopify store works seamlessly with your tech stack, unlocking efficiency and new growth opportunities."
      },
      {
        "label": "Migrations",
        "url": "/icons/Consultancy.svg",
        "description": "Moving platforms shouldn't mean losing momentum. We handle migrations with precision, preserving your data, SEO, and store performance — so you can step into Shopify with confidence."
      },
    ]

  // useEffect(()=>{
  //   if(typeof window !== undefined){
  //     const reviews = axios.get('https://judge.me/api/v1/reviews?api_token=u2V1cqKs2DuX5l3r22PIfbDMvTk&shop_domain=elevadesk.myshopify.com')
  //     console.log(reviews)
  //   }
  // },[])

  //@ts-ignore
  const sectionTitle = es.services.title[locale]
  //@ts-ignore
  const description = es.services.description[locale]

  return (
    <section className="services" id="Services">
      <h3 className="title">
      We create digital flagship stores for digital-first brands.
      </h3>
      <div className="services__wrapper">
          {
            services.map((item, index) => (
              <>
                <div key={index} className="services__wrapper__item">
                  {/* <img src={item.url} alt="" className="services__icon" /> */}
                    <h4 className="services__wrapper__item-title">
                      {item.label}
                    </h4>
                    <p className="services__wrapper__item-description">{item.description}</p>
                    {/* <a href={item.url} className="btn">start now</a> */}
                </div>
              </>
            ))
          }
         </div>
         <div className="services__showreel">
           <video src="/GridVideo.mp4" autoPlay muted loop playsInline />
           {/* <img src="/GridOdein.jpg" alt="" /> */}
         </div>
    </section >
  )
}
