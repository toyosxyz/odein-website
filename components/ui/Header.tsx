'use client'

import { FC, useEffect, useState } from "react"

import { menuAnimations } from '../../js/menuAnimations'
import { contentfulClient } from "../../utils/contentfulApi";
import { CustomLink } from "./CustomLink";

export const Header: FC = () => {

  const [openMenu, setOpenMenu] = useState(false)
  const [el, setEl] = useState<HTMLElement>(null!)
  const [currentLocale, setCurrentLocale] = useState("en")
  const [project, setProject] = useState(null)

  const [showLogo, setShowLogo] = useState(true)

  useEffect(()=>{
    //Import contentful
    contentfulClient.getEntries({
        content_type: 'homePageProject',
        order: 'sys.createdAt'
      })
    .then((response: { items: any; }) => {
        console.log(response)
        setProject(response.items[0])
    })
    .catch(console.error)
}, [])

  useEffect(() => {
    if (typeof window !== 'undefined') {
      const root = document.getElementById('root');
      setEl(root!);

      setTimeout(()=>{
        menuAnimations(!showLogo)
      }, 500)
    }
  }, [el])
  
  useEffect(() => {
    if (typeof window !== 'undefined' && window.innerWidth < 1000) {
      const menuElement = document.querySelector('.site-header__menu') as HTMLElement;
      if (menuElement) {
        menuElement.style.width = openMenu ? "80vw" : "50px";
        menuElement.style.height = openMenu ? "375px" : "50px";
        const menuInnerElement = document.querySelector('.site-header__menu-inner') as HTMLElement;
        if (menuInnerElement) {
          openMenu ? menuInnerElement.style.display = "flex" : menuInnerElement.style.display = "none"
          setTimeout(()=>{
            openMenu ? menuInnerElement.classList.add("shown") : menuInnerElement.classList.remove("shown")
          }, 100)
        }
      }
    }
  }, [openMenu])

  let menuItems;
  menuItems = 
    [
      {
        "label": currentLocale == "es" ? "Inicio" :"Home",
        "url": "/"
      },
      {
        "label": currentLocale == "es" ? "Archivo" :"Work",
        "url": "/work"
      },
      {
        "label": currentLocale == "es" ? "Nosotros" :"About",
        "url": "/about"
      },
      // {
      //   "label": currentLocale == "es" ? "Noticias" :"News",
      //   "url": "/blog"
      // },
      {
        "label": currentLocale == "es" ? "Contacto" :"Get in touch",
        "url": "/contact"
      },
    ]
  return (
    <>
      <header className="site-header">
        <ul className="site-header__menu">
          <div className={`site-header__menu-inner`}>
            {
              menuItems.map((item, key) => {
                return <li key={key} className={item.url.includes("/contact") ? "site-header__menu-item--contact site-header__menu-item" : "site-header__menu-item"}><CustomLink locale={currentLocale} href={item.url}><span>{item.label}</span></CustomLink></li>
              })
            }
          </div>
          <div className={`toggle-mobile-menu desktop--hidden ${openMenu ? "open" : ""}`} onClick={()=>setOpenMenu(!openMenu)}>
          </div>
        </ul>
      </header>
    </>
  )
}
