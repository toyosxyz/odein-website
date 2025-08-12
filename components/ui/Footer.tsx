'use client'

import Link from "next/link";
import router, { useRouter } from "next/navigation";
import react, { FC, useEffect, useState } from "react"

export const Footer: FC = () => {
    const router = useRouter()
    const locale = "en" as string

    const footerLinks = 
        [
            {
                "title": "info@odein.io",
                "link": "mailto:info@odein.io"
            },
            {
                "title": "linkedin.com/company/odein",
                "link": "https://www.linkedin.com/company/odein"
            }
        ]
    return (
        <footer className="site-footer">
            <div className="site-footer__wrapper page-width">
                <div className="site-footer__row">
                    <div className="site-footer__block-wrapper">
                        <h3 className="site-footer__title">
                           Let&apos;s make<br/>this happen.
                        </h3>
                    </div>
                    <div className="site-footer__block-wrapper">
                        <span>{"Contact"}</span>
                        <ul className="site-footer__social-links">
                            {footerLinks.map((link, index)=>(
                                <li className="site-footer__social-link" key={"FooterLink"+index}>
                                    <Link className="link" href={link.link}>{link.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <div className="site-footer__copyright-wrapper">
                            <span>@2025 Odein - The Shopify agency</span>
                        </div>
                    </div>
                </div>   
                <div className="site-footer__logo">
                    <img src="/Logo.svg" alt="Site Logo. Go to home page" />
                </div>    
            </div>
        </footer>
    )
}
