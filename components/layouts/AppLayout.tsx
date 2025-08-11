'use client'

import { FC, ReactNode, useEffect, useState } from "react"
import { Header } from "../ui/Header"
import { Footer } from "../ui/Footer";
import { scrollingAnimations } from "../../js/scrollingAnimations"
import { popupForm } from "../../js/popupForm"
import Script from "next/script";
import { SendMailPopup } from "../ui/SendMailPopup";
import es from '../../translations/es.json'
import en from '../../translations/en.json'

interface Props {
  title: string;
  description?: string;
  children: ReactNode;
  className?: string
}

export const AppLayout: FC<Props> = ({ children, title, description = "", className }) => {
  useEffect(() => {
    //Load JS files
    scrollingAnimations()
    popupForm()
  }, []);

  return (
    <>
      <Script id="LazyLoadGA" strategy="lazyOnload" src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}`} />

      <Script id="GACode" strategy="lazyOnload">
        {`
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${process.env.NEXT_PUBLIC_GOOGLE_ANALYTICS}', {
        page_path: window.location.pathname,
        });
    `}
      </Script>
      <Header />
      <main id="root" className={"no-scroll data-scroll-container "+className} data-scroll-container>
        {children}
        <Footer />
      </main>
      <div className="cursor label-style"></div>
    </>
  )
}
