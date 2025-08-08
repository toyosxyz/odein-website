import Link from "next/link"
import { FC } from "react"


interface TextWithBtnProps {
    btnLink?: String,
    btnText?: String,
    mainText: String,
    borderTop: boolean,
    borderBottom: boolean
}

export const TextWithBtn: FC<TextWithBtnProps> = ({ btnLink, btnText, mainText, borderTop, borderBottom})=>{
    return(
        <section className="text-with-btn">
            <div className="text-with-btn__inner page-width" style={{
                borderTop: borderTop ? "1px solid rgba(255,255,255,0.3)" : "none",
                borderBottom: borderBottom ? "1px solid rgba(255,255,255,0.3)" : "none"
            }}>
                <h2 className="text-with-btn__main-text">{mainText}</h2>
                { btnText && btnLink ? 
                    <a className="link" href={`${btnLink}`}>{btnText}</a> 
                : null }
            </div>
        </section>
    )
}