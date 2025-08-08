import { SetStateAction, useEffect, useState } from "react"
import { contentfulClient } from "../../utils/contentfulApi"


interface Project{
    image: {
        fields: {
            file: {
                url: string
            }
        }
    },
    link: string,
    title: string
}

export const FeaturedProject = ()=>{
    const [featuredProject, setFeaturedProject] = useState<Project>()
    
    useEffect(()=>{
        contentfulClient.getEntry('3VAF1TXmTUQigbQ5GdjevH')
        .then((entry: { fields: SetStateAction<Project | undefined> }) => {
            setFeaturedProject(entry.fields)
        })
        .catch(console.error)
    }, [])

    return(
            <section className="featured-project" style={{
                backgroundImage: `url(${featuredProject?.image.fields.file.url})`,
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover"
            }}>
                {
                    featuredProject ?
                    <div className="featured-project__content">
                        <h3 className="featured-project__title">{featuredProject.title}</h3>
                        <a href={`/projects/${featuredProject.link}`} className="link">Ver case study</a>
                    </div>
                    : null
                }
            </section>
    )
}