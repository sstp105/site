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
      url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/friend_2.jpg?alt=media&token=4605a0dd-f5b1-47ed-915a-8ce2f7eb4c20'
    },
    element: (
      <>
        <SectionHeader
          title={title}
          subtitle="Sharing My Thoughts"
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
  const [blogListData] = await Promise.all([
    fetch(`${API.baseUrl}/blog`, API.headers).then((res) => res.json())
  ])

  const blogList: Array<IBlog> = blogListData.data
  const paths = blogList.map((elem) => {
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
  const [blogData] = await Promise.all([
    fetch(`${API.baseUrl}/blog/${params.id}`, API.headers).then((res) =>
      res.json()
    )
  ])
  const blog: IBlog = blogData.data

  if (!blog) {
    return {
      notFound: true
    }
  }

  return {
    props: blog
  }
}

export default BlogDetailPage
