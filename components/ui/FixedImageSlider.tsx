import { useEffect, useState } from "react"
import { contentfulClient } from "../../utils/contentfulApi"
import { fixedImageSlider } from '../../js/fixedImageSlider'


export const FixedImageSlider = ()=>{
    const [images,setImages] = useState([])
    const [mobileImages,setMobileImages] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(()=>{
        //Import contentful
        contentfulClient.getEntries({
            content_type: 'sliderImages',
            order: 'sys.createdAt'
          })
        .then((response: {items: any}) => {
            setImages(response.items[0].fields.images)
            setMobileImages(response.items[1].fields.images)
            setLoaded(true)
        })
        .catch(console.error)
    }, [])
    
    
    useEffect(()=>{
        if(typeof window !== undefined && loaded){
            fixedImageSlider()
        }
    }, [loaded])

    // console.log(images)
    return(
        <>
            <div className="fixed-image-slider mobile--hidden">
                {
                    images.map((image: any, index)=>(
                        <>
                            <img key={index} src={image.fields.file.url} alt={image.fields.title} className={"fixed-image-slider__image" + " fixed-image-slider__image--"+index} />
                        </>
                    ))
                }
            </div>
            <div className="fixed-image-slider desktop--hidden">
                {
                    mobileImages.map((image: any, index)=>(
                        <>
                            <img key={"Mobile"+index} src={image.fields.file.url} alt={image.fields.title} className={"fixed-image-slider__image" + " fixed-image-slider__image--"+index} />
                        </>
                    ))
                }
            </div>
        </>
    )
}