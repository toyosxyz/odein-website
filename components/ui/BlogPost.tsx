'use client'

import { useRouter } from "next/navigation"
import { FC } from "react"
import Link from "next/link"

interface BlogPostProps {
  post: any
}

export const BlogPost: FC<BlogPostProps> = ({ post }) => {
  const router = useRouter()

  const { title, slug, publishDate, excerpt, featuredImage } = post.fields

  return (
    <article className="blog-post">
      <Link href={`/blog/${slug}`}>
        <div className="blog-post__image">
          {featuredImage && (
            <img 
              src={featuredImage.fields.file.url} 
              alt={title} 
            />
          )}
        </div>
        <div className="blog-post__content">
          <h3 className="blog-post__title">{title}</h3>
          <p className="blog-post__excerpt">{excerpt}</p>
          <time className="blog-post__date">
            {new Date(publishDate).toLocaleDateString()}
          </time>
        </div>
      </Link>
    </article>
  )
}