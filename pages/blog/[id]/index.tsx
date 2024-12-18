import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import path from 'path'
import fs from 'fs/promises'
import { IBlog } from 'types/schema/Blog'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Article } from 'components/organisms/Article'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ChipList } from 'components/organisms/ChipList'
import { ISeo, Seo } from 'components/templates/Seo'

interface IBlogDetailPageProps {
  blog: IBlog
}

const BlogDetailPage: React.FC<IBlogDetailPageProps> = (props) => {
  const { blog } = props
  const { preview, title, tags, summary } = blog

  // Init Highlight.js for code block highlight
  useEffect(() => {
    hljs.initHighlightingOnLoad()
  }, [])

  const bannerProps: IBannerProps = {
    image: {
      url: '/images/blog_banner.png'
    },
    element: (
      <>
        <SectionHeader
          title={title}
          subtitle={summary}
          transform="capitalize"
        />
        <ChipList
          items={tags}
          variant="contained"
          size="small"
          justify="center"
        />
      </>
    )
  }
  const seoProps: ISeo = {
    title,
    description: summary
  }

  return (
    <>
      <Seo {...seoProps} />
      <BannerPageTemplate banner={bannerProps} pageWidth="tablet">
        <Article article={preview} />
      </BannerPageTemplate>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const blogList = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/blogs.json'), 'utf-8'))

  const paths = blogList.map((elem) => {
    return {
      params: {
        id: elem.id
      }
    }
  })
  return {
    paths: paths,
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context

  const navigations = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/navigations.json'), 'utf-8'))
  const blogList = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/blogs.json'), 'utf-8'))
  const blog = blogList.find((p) => p.id === params?.id);

  if (!blog) {
    return {
      notFound: true
    }
  }

  return {
    props: { blog, navigations }
  }
}

export default BlogDetailPage
