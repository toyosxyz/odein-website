'use client'

import { useRouter } from "next/navigation"
import { FC, useEffect, useState } from "react"
import { contentfulClient } from "../../utils/contentfulApi"
import { BlogPost } from "./BlogPost"

export const Blog: FC = () => {
  const router = useRouter()

  const [articles, setArticles] = useState([])

  useEffect(() => {
    contentfulClient.getEntries({
      content_type: "article",
      order: '-fields.publishDate',
      limit: 6
    })
    .then((response: any) => {
      setArticles(response.items)
    })
    .catch(console.error)
  }, [])

  return (
    <section className="blog">
      <div className="blog__inner">
        <div className="label">Blog</div>
        <h3 className="title">
          Latest Articles
        </h3>
        <div className="blog__grid">
          {articles.map((article: any, index: number) => (
            <BlogPost key={index} post={article} />
          ))}
        </div>
      </div>
    </section>
  )
}