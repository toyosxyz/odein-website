'use client'

import { useParams } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { AppLayout } from "../../../components"

// import Swiper styles
import 'swiper/css'
import { contentfulClient } from "../../../utils/contentfulApi"
import { ProjectHero } from "../../../components/ui/ProjectPage/ProjectHero"
import { scrollTriggerAnimationsWork } from "../../../js/scrollTriggerAnimationsWork"
import { ProjectChallenge } from "../../../components/ui/ProjectPage/ProjectChallenge"
import { RelatedProjects } from "../../../components/ui/ProjectPage/RelatedProjects"
import { ProjectMarquee } from "../../../components/ui/ProjectMarquee"

interface Project {
  title: string
  approach: string
  challenge: string
  description: string
  handle: string
  image: any
  image2: any
  image3: any
  image4: any
  services: [string]
  relatedProjects: []
  websiteLink: string
  heading: string
}

export default function ProjectPage() {
  const params = useParams()
  const [projectData, setProjectData] = useState<Project>()

  useEffect(() => {
    if (!projectData) {
      //Import contentful
      contentfulClient.getEntries({
        content_type: 'regularProject',
        order: 'sys.createdAt',
        locale: "en" // In App Router, we'll handle locale differently
      })
        .then((response: { items: any; }) => {
          const currentProjectHandle = params.name
          const currentProject = response.items.find((item: any) => item.fields.handle == currentProjectHandle)
          setProjectData(currentProject.fields)
        })
        .catch(console.error)
    }
  }, [projectData, params.name])

  return (
    <AppLayout title={`${projectData?.title} Case Study - Odein`} description={projectData?.description}>
      <ProjectHero heading={projectData?.heading} websiteLink={projectData?.websiteLink} image={projectData?.image.fields.file.url} services={projectData?.services || [""]} description={projectData?.description} title={projectData?.title} />
      {
        projectData?.image2.map((image: any, index: any) => (
          <div className="project-image parallax-image" key={index}>
            <img src={image.fields.file.url} alt={projectData?.title} />
          </div>
        ))
      }
    </AppLayout>
  )
} 