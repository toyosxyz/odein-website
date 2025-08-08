'use client'

import { FC, useEffect, useState } from "react"
import { AppLayout } from "../../components"
import { BlogPost } from "../../components/ui/BlogPost"
import { contentfulClient } from "../../utils/contentfulApi"
import es from '../../translations/es.json'

export default function Blog() {
  const [articles, setArticles] = useState([])
  const [title, setTitle] = useState("")
  
  // In App Router, we'll handle locale differently
  const locale = "en" as string

  useEffect(() => {
    setTitle(es.blog.title[locale as keyof typeof es.blog.title] || "Blog")
    
    contentfulClient.getEntries({
      content_type: "article",
      order: '-fields.publishDate',
      locale: locale
    })
    .then((response: any) => {
      setArticles(response.items)
    })
  }, [locale])

  return (
    <AppLayout
      title={locale === "es" ? title + " - Odein" : title + " - Odein"}
      description={title}
      className="blog-wrapper">
      <section className="blog">
        <div className="blog__title-wrapper">
          <h2 className="title-medium">{title}</h2>
        </div>
        <div className="blog__inner blog__posts-wrapper">
          {
            articles.map((article: any, index: number) => (
              <div key={index}>
                <BlogPost post={article} />
              </div>
            ))
          }
        </div>
      </section>
    </AppLayout>
  )
} 