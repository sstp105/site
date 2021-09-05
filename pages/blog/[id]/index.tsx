import React, { useEffect } from 'react'
import hljs from 'highlight.js'
import { API } from 'libs/config/vars'
import { IBlog } from 'types/schema/Blog'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Article } from 'components/organisms/Article'

// TODO: tags 添加到 SectionHeader中
const BlogDetailPage: React.FC<IBlog> = (props) => {
  const { preview, title, tags } = props

  const bannerProps: IBannerProps = {
    image: {
      url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/friend_2.jpg?alt=media&token=4605a0dd-f5b1-47ed-915a-8ce2f7eb4c20'
    },
    element: <SectionHeader title={title} subtitle="Sharing My Thoughts" />
  }

  useEffect(() => {
    hljs.initHighlightingOnLoad()
  }, [])

  return (
    <BannerPageTemplate banner={bannerProps} pageWidth={800}>
      <Article article={preview} />
    </BannerPageTemplate>
  )
}

export async function getServerSideProps(context) {
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
