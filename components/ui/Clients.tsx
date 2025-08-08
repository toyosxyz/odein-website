'use client'

import { useRouter } from "next/navigation"
import { FC, SetStateAction, useEffect, useState } from "react"
import { contentfulClient } from "../../utils/contentfulApi"
import { ClientsSlider } from "./ClientsSlider"

import es from '../../translations/es.json'
import Link from "next/link"
import { CustomLink } from "./CustomLink"

interface IClients{
    title?: string
}

export const Clients:FC<IClients> = ({title})=>{
    
    const router = useRouter()
    const locale = "en" as string

    //@ts-ignore
    const sectionTitle = es.clients.title[locale]
    //@ts-ignore
    const description = es.clients.description[locale]

    const [clients, setClients] = useState([])

    useEffect(()=>{
        contentfulClient.getEntry('1MPNlk2ar3kT78MXJcjqK5')
        .then((entry: { fields: { images:any } }) => {
            setClients(entry.fields.images.slice(0, 8))
        })
        .catch(console.error)
    }, [])

    
    return(
        <section className="clients">
            <div className="clients__inner">
                <div className="clients__logos-wrapper">
                    {
                        clients.map((client, index)=>{
                            //@ts-ignore
                            const imageSrc = client.fields.file.url
                            //@ts-ignore
                            const imageAlt = client.fields.title
                            return(
                                <div className="clients__client-logo" key={index}>
                                    <img src={imageSrc} alt={imageAlt} />
                                </div>
                            )
                        })
                    }
                </div>
                <CustomLink href={"/work"}><span className="link">View all work</span></CustomLink>
            </div>
        </section>
    )
}