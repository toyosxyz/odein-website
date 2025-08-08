'use client'

import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { contentfulClient } from "../../utils/contentfulApi"
import { BlogPost } from "./BlogPost"

export const BlogRelated: FC = () => {
  const router = useRouter()

  const [articles, setArticles] = useState([])

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: "article",
      order: '-fields.publishDate',
      limit: 3
    })
    .then((response: any) => {
      setArticles(response.items)
    })
    .catch(console.error)
  }, [])

  return (
    <section className="blog-related">
      <div className="blog-related__inner">
        <h3 className="title">
          Related Articles
        </h3>
        <div className="blog-related__grid">
          {articles.map((article: any, index: number) => (
            <BlogPost key={index} post={article} />
          ))}
        </div>
      </div>
    </section>
  )
}