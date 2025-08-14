'use client'

import { FC } from "react"
import { useRouter } from "next/navigation"

interface ProjectHeroProps {
  image?: string
  services?: string[]
  description?: string
  title?: string
  websiteLink?: string
  heading?: string
}

export const ProjectHero: FC<ProjectHeroProps> = ({ 
  image, 
  services, 
  description, 
  title,
  websiteLink,
  heading
}) => {
  const router = useRouter()

  return (
    <section className="project-hero">
      <div className="project-hero__inner">
        {image && (
          <div className="project-hero__image">
            <img src={image} alt={title} />
          </div>
        )}
        {title && (
            <div className="project-hero__label label">
              {title}
            </div>
          )}
        {heading && (
            <h1 className="project-hero__title">
              {heading}
            </h1>
          )}
      </div>
      <div className="project-hero__content">
          {services && services.length > 0 && (
            <div className="project-hero__services">
              <span className="project-hero__services-label">Services</span>
              {services.map((service, index) => (
                <span className="project-hero__services-item" key={index}>{service}</span>
              ))}
            </div>
          )}
          {description && (
            <div className="project-hero__description">
              <p>{description}</p>
          
              <a href={websiteLink} target="_blank">
                <span className="link">Visit website</span>
              </a>
            </div>
          )}
      </div>
    </section>
  )
}