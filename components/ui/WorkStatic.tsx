'use client'

import react, { FC, useEffect, useRef, useState } from "react";


import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import { scrollTriggerAnimations } from "../../js/scrollTriggerAnimations"
import { contentfulClient } from "../../utils/contentfulApi";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { CustomLink } from "./CustomLink";


export const WorkStatic = () => {
    const [projects, setProjects] = useState([])
    const [loadedProjects, setLoadedProjects] = useState(false)

    const router = useRouter()
    const locale = "en" as string


    useEffect(()=>{
        if (typeof window !== 'undefined' && loadedProjects && window.innerWidth > 768) {
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "#Work",
                    start: "top -10%",
                    end: "65% top",
                    scrub: true
                }
            });
                
            gsap.utils.toArray(".work__grid-item").forEach((layer: any) => {
                const depth = layer.dataset.depth;
                const movement = -(layer.offsetHeight * depth)
                tl.to(layer, {y: movement, ease: "none"}, 0)
            });
        }
    }, [loadedProjects])

    useEffect(()=>{
        //Import contentful
        contentfulClient.getEntries({
            content_type: 'homePageProject',
            order: 'sys.createdAt'
          })
        .then((response: { items: any; }) => {
            setProjects(response.items.slice(0, 3))
            setLoadedProjects(true)
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
                            projectReference
                         } = project.fields
                        const imageType = image.fields.file.contentType
                        const imageUrl = image.fields.file.url
                        const imageAlt = image.fields.title
                        const videoUrl = video ? video.fields.file.url : null

                        return(
                            <CustomLink href={`/projects/${projectlink}`} key={"Project"+index} className={"work__grid-item fade-in--mobile"+" work__grid-item--"+(index+1)}>
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
                            </CustomLink>
                        )
                    })
                    : null
                }
            </div>

        </div>


        </div>
    )
}
