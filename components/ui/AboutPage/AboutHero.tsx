import es from '../../../translations/es.json'

export const AboutHero = ()=>{

    //@ts-ignore
    const title = es.aboutPage.title1["en"]
    //@ts-ignore
    const description = es.aboutPage.description1["en"]

    return(
        <section className="about-hero">
            <div className="about-hero__inner">
                <div className="label">About us</div>
                <h2 className="title">
                    We're an all-founder Shopify development agency rewriting the rules of e-commerce development. 
                </h2>
                <img src="/AboutHero.jpg" alt="About us" />
                <div className="about-hero__content">
                    <div className="about-hero__paragraph">
                        <p>
                            We are a founder-led Shopify development agency. A passionate team of creative minds, dedicated to turning ideas into reality through innovative tech solutions.
                        </p>
                    </div>
                    <div className="about-hero__paragraph">
                        <p>
                            We work closely with a few selected clients to understand their unique needs and objectives, crafting tech solutions that not only meet but exceed expectations.                        
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}