import React from 'react'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IBlogBase } from 'types/schema/Blog'
import { BlogList } from 'components/templates/BlogList'
import { BannerPageTemplate } from 'components/templates/BannerPage'

interface IBlogPageProps {
  blogs: Array<IBlogBase>
}

const BlogPage: React.FC<IBlogPageProps> = (props) => {
  const { blogs } = props

  const bannerProps: IBannerProps = {
    image: {
      url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/TEST.jpg?alt=media&token=2f1724e2-0233-44bd-8773-f1fa4ea74a30'
    },
    element: <SectionHeader title="Blog" subtitle="Sharing My Thoughts" />
  }

  return (
    <BannerPageTemplate banner={bannerProps} pageWidth={1240}>
      <BlogList blogs={blogs} />
    </BannerPageTemplate>
  )
}

export async function getStaticProps() {
  const [blogData] = await Promise.all([
    fetch(`${API.baseUrl}/blog`, API.headers).then((res) => res.json())
  ])
  const blogs: Array<IBlogBase> = blogData.data

  if (!blogs) {
    return {
      notFound: true
    }
  }

  return {
    props: { blogs }
  }
}

export default BlogPage
