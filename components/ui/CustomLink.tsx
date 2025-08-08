"use client "

import { usePathname, useRouter } from "next/navigation"
import { animatePageOut } from "../../utils/pageAnimations"

export const CustomLink = ({ href, children, className }: { href: string, children: React.ReactNode, className?: string }) => {
    const router = useRouter()
    const pathname = usePathname()

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault()
        if (pathname !== href) {
            animatePageOut(href, router)
        }
    }
    return (
        <a href={href} className={className} onClick={(e)=>handleClick(e)}>
            {children}
        </a>
    )
}