import { useEffect, useState } from "react"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, EffectFade } from 'swiper'
import { contentfulClient } from "../../utils/contentfulApi";

import 'swiper/css';
import 'swiper/css/bundle';
import { ClientsSlider } from "./ClientsSlider";


export const TestimonialsSlider = ()=>{

    const [testimonials, setTestimonials] = useState([])
    const [loadedTestimonials, setLoadedTestimonials] = useState(false)


    useEffect(()=>{
        if(!loadedTestimonials){
            //Import contentful
            contentfulClient.getEntries({
                content_type: 'testimonialsSlider',
                order: 'sys.createdAt'
              })
            .then((response: { items: any; }) => {
                setTestimonials(response.items[0].fields.testimonial)
                setLoadedTestimonials(true)
            })
            .catch(console.error)
        }
    })


    return(
        <section className="testimonials-slider">
            <h3 className="testimonials-slider__title">Y no lo decimos nosotros...</h3>
            <Swiper className="testimonials-slider__slider swiper" 
                modules={[Navigation, EffectFade, Autoplay]}
                slidesPerView={1} 
                navigation 
                autoplay={{
                    delay: 6000,
                }}
                loop 
                effect="fade"
                fadeEffect={{crossFade: true}}
                speed={2000}>
                {
                    testimonials.map((testimonial: any, index)=>{
                        //@ts-ignore
                        const {
                            image,
                            author,
                            message
                        } = testimonial.fields
                        const imageUrl = image.fields.file.url
                        return(
                            <SwiperSlide className="testimonials-slider__slide" key={index}>
                                <div className="testimonials-slider__slide-image">
                                    <img src={imageUrl} alt={"Odein Testimonial by " +author} />
                                </div>
                                <div className="testimonials-slider__slide-content">
                                    <div className="testimonials-slider__slide-quote">
                                        <img src="/QuoteImage.png" alt="" />
                                    </div>
                                    <p className="testimonials-slider__slide-message">{message}</p>
                                    <p className="testimonials-slider__slider-author">{author}</p>
                                </div>
                            </SwiperSlide>
                        )
                    })
                }
            </Swiper>
            <ClientsSlider />
        </section>
    )
}