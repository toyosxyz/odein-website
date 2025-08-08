import Link from "next/link"
import { FC } from "react"


interface TextWithBtnProps {
    btnLink?: String,
    btnText?: String,
    mainText: String,
    side: String,
}

export const TextWithBtn: FC<TextWithBtnProps> = ({ btnLink, btnText, mainText, side})=>{
    const texts = mainText.split("--")
    return(
        <section className="text-with-btn">
            <div className={`text-with-btn__inner text-with-btn__inner--${side}`}>
                {
                    texts.map((text, index)=>(
                        <h2 key={index} className="text-with-btn__main-text text-reveal-bottom"><span>{text}</span></h2>
                    ))
                }
                { btnText && btnLink ? 
                    <a className="link" href={`${btnLink}`}>{btnText}</a> 
                : null }
            </div>
        </section>
    )
}