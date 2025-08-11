import { useEffect, useState } from "react"
import { contentfulClient } from "../../../utils/contentfulApi"


import { InfiniteSlider } from "../../../js/InfiniteSlider"
import Link from "next/link"
export const WorkProjects = ()=>{

    const [projects, setProjects] = useState([])
    const [isLoaded, setIsLoaded] = useState(false)

    useEffect(() => {
        contentfulClient.getEntries({
            content_type: 'workPageProject',
            order: '-fields.isPlus'
        })
        .then((response: { items: any; }) => {
            setProjects(response.items)
            setIsLoaded(true)
        })
        .then(()=>{
            setTimeout(()=>{
            if(typeof window !== 'undefined'){
                const cursor = document.querySelector('.cursor')
                if(!cursor) return;
                document.querySelectorAll('.work__grid-item').forEach(item => {
                    item.addEventListener('mouseenter', () => {
                        const title = item.querySelector('.work__item__info-title')?.textContent || '';
                        cursor.classList.add('shown');
                        cursor.textContent = title;
                    });
        
                    item.addEventListener('mouseleave', () => {
                        cursor.classList.remove('shown');
                    });
                    });
                    document.querySelector('.work')?.addEventListener('mouseleave', ()=>{
                        setTimeout(()=>{
                            cursor.textContent = '';
                        }, 300)
                    })
                }
            }, 100) // Reduced from 1000ms to 100ms
        })
        .catch(console.error)
    }, [])

    return (
        <div className="work" id="Work">

            <div className="work__outer">
                <div className="work__wrapper work__wrapper-grid" id="SliderWork">
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
                                projectReference,
                                websiteLink
                             } = project.fields
                            const imageType = image.fields.file.contentType
                            const imageUrl = image.fields.file.url
                            const imageAlt = image.fields.title
                            const videoUrl = video ? video.fields.file.url : null

                            console.log(project)

                            return(
                                <a href={websiteLink} key={"Project"+index} target="_blank" className={"work__grid-item fade-in--mobile"+" work__grid-item--"+(index+1)}>
                                    {videoUrl && 
                                        <video className="lazy" autoPlay playsInline muted loop poster={imageUrl}>
                                            <source src={videoUrl} />
                                            <img loading="lazy" src={imageUrl} alt="" />
                                        </video>
                                    }
                                    {isPlus ? <img src={"LogoShopifyPlus.png"} className="work_item_info-plus-logo"></img> : null}
                                    {
                                        imageType == "image/jpeg" && !videoUrl ?
                                            <div className="work__item__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                                            :
                                            <div className="work__item__image no-padding">
                                                <video className="lazy" autoPlay playsInline muted loop poster={imageUrl}>
                                                    <source src={videoUrl} />
                                                    <img loading="lazy" src={imageUrl} alt="" />
                                                </video>
                                            </div>
                                    }
                                    <div className="work__item__info">
                                        <h3 className="work__item__info-title">{title}</h3>
                                    </div>
                                </a>
                            )
                        })
                        : null
                    }
                </div>

            </div>


        </div>
    )
}