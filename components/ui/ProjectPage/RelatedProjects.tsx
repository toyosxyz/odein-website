import React from "react"
import { FC } from "react"


interface RelatedProjectsInterface{
    projects?: []
}

export const RelatedProjects: FC<RelatedProjectsInterface>= ({ projects })=>{
    return(
        <section className="related-projects page-width">
            <h4 className="related-projects__title">Échale un vistazo</h4>
            {
                projects && 
                <div className="related-projects__inner">
                    {
                        projects.map((project: any, index)=>{
                            const { 
                                title,
                                handle,
                                isPLus,
                                image,
                                video,
                                services
                                } = project.fields
                            const imageType = image.fields.file.contentType
                            const imageUrl = image.fields.file.url 
                            return(
                                <a href={'/projects/'+handle} key={index} className={`work__item work__item--${index}`} data-modal-id={"WorkItemPage"+index}>
                                    <div className="work__item__image" style={{ backgroundImage: `url(${imageUrl})`, backgroundSize: "cover", backgroundRepeat: "no-repeat" }}></div>
                                    {isPLus ? <img src={"/LogoShopifyPlus.png"} className="work_item_info-plus-logo"></img> : null}
                                    <div className="work__item__info">
                                        <h3 className="work__item__info-title">{title}</h3>
                                    </div>
                                </a>
                            )
                        })
                    }
                </div>
            }
        </section>
    )
}