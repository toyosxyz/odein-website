'use client'

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import es from '../../translations/es.json'
import { CustomLink } from "./CustomLink"

export const About = () => {
  const router = useRouter()
  const locale = "en" as string // Default to English for now

  //@ts-ignore
  const [title, setTitle] = useState(es.about.title[locale])
  //@ts-ignore
  const [description, setDescription] = useState(es.about.description[locale])

  return (
    <section className="about">
      <div className="about__inner">
        <div className="label">Who we are</div>
        <h3 className="title">
          Odein is an all-founder agency rewriting the rules of e-commerce development. We create Shopify stores that blend emotional impact with strategic precision.
        </h3>
        <div className="about__text-wrapper">
          <CustomLink href={"/about"}><span className="link">{locale === "es" ? "Sobre nosotros" : "About us"}</span></CustomLink>
        </div>
      </div>
    </section>
  )
}