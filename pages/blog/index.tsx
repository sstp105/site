import React, { useContext } from 'react'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IBlogBase } from 'types/schema/Blog'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/shared/Seo'
import { NavigationContext } from 'context/NavigationContext'
import { PortfolioCard as BlogCard } from 'components/templates/PortfolioCard'
import { IIconText } from 'types/schema/Profile'

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
        {blogs.map((elem, index: number) => {
          const {
            _id,
            banner,
            title,
            summary,
            category,
            lastUpdatedDate,
            tags
          } = elem
          const info: Array<IIconText> = [
            {
              icon: 'far fa-calendar-alt',
              content: lastUpdatedDate.toString().split('T')[0]
            },
            {
              icon: 'fas fa-inbox',
              content: category
            }
          ]
          return (
            <BlogCard
              key={_id}
              banner={banner}
              title={title}
              description={summary}
              tags={tags}
              info={info}
              pathTo={`/blog/${_id}`}
              curIndex={index}
            />
          )
        })}
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
