import { FC } from "react"


interface ProjectChallengeInterface{
    challenge?: string
    approach?: string
    side: string
}

export const ProjectChallenge:FC<ProjectChallengeInterface> = ({ challenge, approach, side })=>{
    return(
        <section className="text-with-btn project-challenge">
            <div className={`text-with-btn__inner text-with-btn__inner--${side}`}>
            {
                    challenge &&
                    <>
                        <div className="services__wrapper__item fade-in">
                            <h4 className="services__wrapper__item-title">
                            
                            </h4>
                            <p className="services__wrapper__item-description text-reveal-bottom">
                                {challenge.split("--").map((text, index)=>(
                                        <span key={index}>{text}<br></br></span>
                                ))}
                            </p>
                        </div>
                        <div className="divider fade-right"></div>
                    </>
                }
                
                { approach && 
                    <>
                        <div className="services__wrapper__item fade-in">
                            <p className="services__wrapper__item-description text-reveal-bottom">
                                <span>{approach}</span>
                            </p>
                        </div>
                        <div className="divider fade-right"></div>
                    </>
                }
            </div>
        </section>
    )
}