'use client'

import { FC, useEffect, useState } from "react"
import { useRouter } from "next/navigation";
import { contentfulClient } from "../../utils/contentfulApi"
import Link from "next/link"
import { ProjectItem } from "./ProjectItem"

export const WorkNew: FC = () => {
  const router = useRouter()

  const [projects, setProjects] = useState([])

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: 'regularProject',
      order: 'sys.createdAt'
    })
    .then((response: { items: any }) => {
      setProjects(response.items)
    })
    .catch(console.error)
  }, [])

  return (
    <section className="work-new">
      <div className="work-new__inner">
        <div className="label">Work</div>
        <h3 className="title">
          Our Projects
        </h3>
        <div className="work-new__grid">
          {projects.map((project: any, index: number) => (
            <ProjectItem key={index} item={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
