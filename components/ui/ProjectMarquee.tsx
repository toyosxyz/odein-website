import { FC, useEffect, useState } from "react"


export const ProjectMarquee:FC<any> = ({images})=>{
    const [imagesTop, setImagesTop] = useState([])
    const [imagesBottom, setImagesBottom] = useState([])

    useEffect(()=>{
        if(images){
            images = images.slice(0, 8)

            setImagesTop(images.slice(0, 4))
            setImagesBottom(images.slice(4, images.length))


        }
    }, [images])

    return(
        <section className="project-marquee">
            <div className="project-marquee_wrapper project-marquee_wrapper--top">
                {
                    imagesTop.map((image: any, index)=>(
                        <img src={image.fields.file.url} key={index} alt="" className="project-marquee__image" />
                    ))
                }
            </div>
            <div className="project-marquee_wrapper project-marquee_wrapper--bottom">
                {
                    imagesBottom.map((image: any, index)=>(
                        <img src={image.fields.file.url} key={index} alt="" className="project-marquee__image" />
                    ))
                }
            </div>
        </section>
    )
}