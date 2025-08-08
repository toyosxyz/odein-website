'use client'

import { FC } from "react"
import { useRouter } from "next/navigation"

interface ProjectHeroProps {
  clientLogo?: string
  image?: string
  services?: string[]
  client?: string
  date?: string
  description?: string
  title?: string
}

export const ProjectHero: FC<ProjectHeroProps> = ({ 
  clientLogo, 
  image, 
  services, 
  client, 
  date, 
  description, 
  title 
}) => {
  const router = useRouter()

  return (
    <section className="project-hero">
      <div className="project-hero__inner">
        {clientLogo && (
          <div className="project-hero__client-logo">
            <img src={clientLogo} alt={client} />
          </div>
        )}
        {image && (
          <div className="project-hero__image">
            <img src={image} alt={title} />
          </div>
        )}
        <div className="project-hero__content">
          <div className="project-hero__meta">
            {services && services.length > 0 && (
              <div className="project-hero__services">
                {services.join(', ')}
              </div>
            )}
            {client && (
              <div className="project-hero__client">
                {client}
              </div>
            )}
            {date && (
              <div className="project-hero__date">
                {date}
              </div>
            )}
          </div>
          {title && (
            <h1 className="project-hero__title">
              {title}
            </h1>
          )}
          {description && (
            <p className="project-hero__description">
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  )
}