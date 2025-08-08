'use client'

import { useRouter } from "next/navigation"
import { FC } from "react"
import Link from "next/link"

export const BlogCTA: FC = () => {
  const router = useRouter()

  return (
    <section className="blog-cta">
      <div className="blog-cta__inner">
        <h3 className="title">
          Ready to start your project?
        </h3>
        <p>
          Let's discuss how we can help you scale your e-commerce business.
        </p>
        <Link href="/contact" className="btn">
          Get in touch
        </Link>
      </div>
    </section>
  )
}