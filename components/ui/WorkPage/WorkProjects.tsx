import { JSXElementConstructor, ReactElement, ReactFragment, ReactPortal, useEffect, useState } from "react"
import { contentfulClient } from "../../../utils/contentfulApi"
import Link from "next/link"

export const WorkProjects = ()=>{

    const [projects, setProjects] = useState([])

    useEffect(()=>{
        
        contentfulClient.getEntries({
            content_type: 'workPageProject',
            order: 'sys.createdAt'
          })
        .then((response: { items: any; }) => {
            setProjects(response.items)
        })
        .catch(console.error)
    }, [])

    return(
        <section className="work-projects page-width">
            {
                projects.length ? 
                projects.map((project:any, index) => {
                    const { 
                        description,
                        title,
                        projectlink,
                        isPlus,
                        image,
                        video,
                        services,
                        websiteLink
                        } = project.fields
                    const imageType = image.fields.file.contentType
                    const imageUrl = image.fields.file.url
                    const imageAlt = image.fields.title
                    const videoUrl = video ? video.fields.file.url : null

                    return(
                        <>
                            <a target="_blank" rel="noreferrer" href={websiteLink} key={index} className={`work__item work__item--${index} fade-in--mobile`} data-modal-id={"WorkItemPage"+index}>
                                <div className="work__item__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                                {isPlus ? <img src={"LogoShopifyPlus.png"} className="work_item_info-plus-logo"></img> : null}
                                <div className="work__item__info">
                                    <h3 className="work__item__info-title">{title}</h3>
                                </div>
                            </a>
                        </>
                )})
                : null
            }
        </section>
    )
}