import react, { FC, useEffect, useRef, useState } from "react";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { scrollTriggerAnimations } from "../../js/scrollTriggerAnimations"
import { contentfulClient } from "../../utils/contentfulApi";
import Link from "next/link";



export const Work: FC<{ translation: any }> = ({ translation: t }) => {

    const [el, setEl] = useState<HTMLElement>(null!)
    const[currentLocale, setCurrentLocale] = useState("en")
    const [projects, setProjects] = useState([])
    const [loadedProjects, setLoadedProjects] = useState(false)

    useEffect(() => {
        if (typeof window !== 'undefined') {
            const root = document.getElementById('root');
            setEl(root!);
        }
    })


    useEffect(()=>{
        if (typeof window !== 'undefined' && loadedProjects) {
            setTimeout(()=>{
                scrollTriggerAnimations()
            }, 500)
        }
    }, [loadedProjects])

    useEffect(()=>{
        //Import contentful
        contentfulClient.getEntries({
            content_type: 'homePageProject',
            order: 'sys.createdAt'
          })
        .then((response: { items: any; }) => {
            setProjects(response.items)
            setLoadedProjects(true)
        })
        .catch(console.error)
    }, [])

    const refSlider = useRef<HTMLDivElement>(null)
    gsap.registerPlugin(ScrollTrigger)




    useEffect(()=>{
        const origin = navigator.language
        if (origin.includes("es")) {
            setCurrentLocale("es")
        }
    })
    
    return (
        <div className="work" id="About">

            <div className="work__outer">
                <div className="work__wrapper" id="SliderWork" ref={refSlider}>
                    {
                        projects.length ? 
                        projects.map((project: any, index) => {
                            const { 
                                description,
                                title,
                                projectlink,
                                isplus,
                                image,
                                video,
                                projectReference
                             } = project.fields
                            const imageType = image.fields.file.contentType
                            const imageUrl = image.fields.file.url
                            const imageAlt = image.fields.title
                            const videoUrl = video ? video.fields.file.url : null

                            return(
                                <Link href={`/projects/${projectlink}`} key={"Work"+index}>
                                    <div className="work__item fade-in--mobile">
                                        {videoUrl && <div className="work__item__video no-padding">
                                            <video className="lazy" autoPlay playsInline muted loop poster={imageUrl}>
                                                <source src={videoUrl} />
                                                <img loading="lazy" src={imageUrl} alt="" />
                                            </video>
                                        </div>}
                                        {
                                            imageType == "image/jpeg" ?
                                                <div className="work__item__image" style={{ backgroundImage: `url(${imageUrl})` }}></div>
                                                :
                                                <div className="work__item__image no-padding">
                                                    <video className="lazy" autoPlay playsInline muted loop poster={imageUrl}>
                                                        <source src={imageUrl} />
                                                        <img loading="lazy" src={imageUrl} alt="" />
                                                    </video>
                                                </div>
                                        }
                                        {isplus ? <img src={"LogoShopifyPlus.png"} className="work_item_info-plus-logo"></img> : null}
                                        <div className="work__item__info">
                                            <h3 className="work__item__info-title">{title}</h3>
                                            {/* <div className="work__item__services">
                                                {description}
                                            </div> */}
                                        </div>
                                    </div>
                                </Link>                          
                        )})
                        : null
                    }
                </div>

            </div>


        </div>
    )
}
