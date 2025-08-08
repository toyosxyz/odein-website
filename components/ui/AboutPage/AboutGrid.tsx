import Link from "next/link"

import es from '../../../translations/es.json'

export const AboutGrid = ()=>{

    const locale = "en"
    const aboutUs = [
        {
            "linkedin": "https://www.linkedin.com/in/toyos/",
            "name": "Alejandro Toyos",
            "image": "/team/AT.jpg"
        },
        {
            "linkedin": "https://www.linkedin.com/in/guillem-hernandez-elevadesk/",
            "name": "Guillem Hernandez",
            "image": "/team/GH.jpeg"
        },
        {
            "linkedin": "https://www.linkedin.com/in/pablodelahaza/",
            "name": "Pablo de la Haza",
            "image": "/team/PH2.jpg"
        },
    ]

    return(
        <section className="about-grid">
            <div className="label">THE Team</div>
            <h3 className="title-medium">Small team. Big impact.</h3>
            <div className="about-grid__wrapper">
                {
                    aboutUs.map((item, index)=>(
                        <Link href={item.linkedin} target="_blank" key={"Project"+index}>

                        <div key={index} className="about-grid__item">
                            <div className="about-grid__item__image" style={{ backgroundImage: `url(${item.image})` }}></div>
                            <h4 className="title-small">{item.name}</h4>
                        </div>
                        </Link>
                    ))
                }
            </div>
        </section>
    )
}