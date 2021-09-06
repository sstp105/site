import React, { useContext } from 'react'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IBlogBase } from 'types/schema/Blog'
import { BlogList } from 'components/templates/BlogList'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/shared/Seo'
import { NavigationContext } from 'context/NavigationContext'

interface IBlogPageProps {
  blogs: Array<IBlogBase>
}

const BlogPage: React.FC<IBlogPageProps> = (props) => {
  const { blog } = useContext(NavigationContext)
  const { blogs } = props

  const bannerProps: IBannerProps = {
    image: {
      url: blog.banner
    },
    element: (
      <SectionHeader title={blog.seo.title} subtitle={blog.seo.description} />
    )
  }

  return (
    <>
      <Seo {...blog.seo} />
      <BannerPageTemplate banner={bannerProps}>
        <BlogList blogs={blogs} />
      </BannerPageTemplate>
    </>
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
