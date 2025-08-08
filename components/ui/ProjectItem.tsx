import Link from "next/link"
import { FC } from "react"



export const ProjectItem: FC<{item: any}> = ({item})=>{

    console.log(item)
    if(!item){
        return (<></>)
    }
    const { 
        title,
        projectlink,
        isplus,
        image,
        video,
     } = item.fields
    const imageType = image.fields.file.contentType
    const imageUrl = image.fields.file.url
    const imageAlt = image.fields.title
    const videoUrl = video ? video.fields.file.url : null

    return(
        <a href={`/projects/${projectlink}`} key={"FeaturedWorkItem"}>
            <>
                <div className="work__item fade-in--mobile">
                    {videoUrl && <div className="work__item__video no-padding">
                        <video className="lazy" autoPlay playsInline muted loop poster={imageUrl}>
                            <source src={videoUrl} />
                            <img loading="lazy" src={imageUrl} alt="" />
                        </video>
                    </div>}
                </div>
                <div className="work__item__info">
                    <p className="">{title}</p>
                    {/* <div className="work__item__services">
                        {description}
                    </div> */}
                    {isplus ? <img src={"/LogoShopifyPlus.png"} className=""></img> : null}
                </div>
            </>
        </a>
    )
}