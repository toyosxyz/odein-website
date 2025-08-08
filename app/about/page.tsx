'use client'

import { AppLayout } from '../../components'
import { AboutGrid } from '../../components/ui/AboutPage/AboutGrid'
import { AboutHero } from '../../components/ui/AboutPage/AboutHero'
import { Clients } from '../../components/ui/Clients'
import { Services } from '../../components/ui/Services'
import { TextWithBtn } from '../../components/ui/TextWithBtnNew'
import { Culture } from '../../components/ui/AboutPage/Culture'
import { Logo } from '../../components/ui/Logo'

export default function AboutPage() {
  // In App Router, we'll handle locale differently
  // For now, defaulting to English
  const locale = "en" as string

  const text1 = locale === "es" ? "Tenemos lo que tu tienda necesita." : "We have everything you'll need to succeed."
  const text2 = locale === "es" ? "Y nuestros clientes lo confirman." : "And our clients can back that up."

  return (
    <AppLayout
      title={"Sobre Nosotros - Odein"}
      description={""}>
        <Logo />
        <AboutHero />
        <Services />
        <AboutGrid />
        <Culture /> 
    </AppLayout>
  )
} 