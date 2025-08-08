'use client'

import { AppLayout } from '../../components'
import { WorkHero } from '../../components/ui/WorkPage/WorkHero'
import { WorkProjects } from '../../components/ui/WorkPage/WorkProjectsV2'
import { Logo } from '../../components/ui/Logo'

export default function WorkPage() {
  return (
    <AppLayout
      title={"Nuestros Trabajos - Odein"}
      description={""}>
        <Logo />
        <section className="about">
            <div className="about__inner">
                <div className="label">Work</div>
                <h3 className="title">
                    Recent Projects
                </h3>

            </div>
        </section>
      <WorkProjects />
    </AppLayout>
  )
} 