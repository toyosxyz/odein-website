import { SetStateAction, useEffect, useState } from "react"
import { contentfulClient } from "../../utils/contentfulApi"


export const ClientsSlider = ()=>{

    const [clients, setClients] = useState([])

    useEffect(()=>{
        contentfulClient.getEntry('1MPNlk2ar3kT78MXJcjqK5')
        .then((entry: { fields: { images: SetStateAction<never[]> } }) => {
            setClients(entry.fields.images)
        })
        .catch(console.error)
    }, [])

    return(
        <div className="clients-slider">
            <div className="clients-slider__inner">
                {
                    clients.map((client, index)=>{
                        //@ts-ignore
                        const imageSrc = client.fields.file.url
                        //@ts-ignore
                        const imageAlt = client.fields.title
                        return(
                            <div className="clients-slider__image-wrapper" key={"ClientSlide"+index}>
                                <img src={imageSrc} alt={imageAlt}/>
                            </div>
                        )
                    })
                }
                {
                    clients.map((client, index)=>{
                        //@ts-ignore
                        const imageSrc = client.fields.file.url
                        //@ts-ignore
                        const imageAlt = client.fields.title
                        return(
                            <div className="clients-slider__image-wrapper" key={"ClientSlide"+index}>
                                <img src={imageSrc} alt={imageAlt}/>
                            </div>
                        )
                    })
                }                    
            </div>
        </div>
    )
}