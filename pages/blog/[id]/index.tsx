import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import { API } from 'libs/config/api'
import { IBlog } from 'types/schema/Blog'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Article } from 'components/organisms/Article'
import { GetStaticPaths, GetStaticProps } from 'next'
import { ChipList } from 'components/organisms/ChipList'
import { ISeo, Seo } from 'components/templates/Seo'

const BlogDetailPage: React.FC<IBlog> = (props) => {
  const { preview, title, tags, summary } = props

  // Init Highlight.js for code block highlight
  useEffect(() => {
    hljs.initHighlightingOnLoad()
  }, [])

  const bannerProps: IBannerProps = {
    image: {
      url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/blog_banner.webp?alt=media&token=fd2f5759-1c83-4383-ac54-7934d19d8a0b'
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
  const [blogList] = await Promise.all([
    fetch(API.ROUTES('blog'), API.HEADERS).then((res) => res.json())
  ])

  const paths = blogList.data.map((elem) => {
    return {
      params: {
        id: elem._id
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
  const [blog] = await Promise.all([
    fetch(API.ROUTES(`blog/${params.id}`), API.HEADERS).then((res) =>
      res.json()
    )
  ])

  if (!blog) {
    return {
      notFound: true
    }
  }

  return {
    props: blog.data
  }
}

export default BlogDetailPage
