import React from 'react'
import { API } from 'libs/config/vars'
import { IBlogBase } from 'types/schema/Blog'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { PortfolioCard as BlogCard } from 'components/templates/PortfolioCard'
import { IIconText } from 'types/schema/Profile'
import { NAVIGATION } from 'libs/constants/navigation'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'

interface IBlogPageProps {
  blogs: Array<IBlogBase>
}

const BlogPage: React.FC<IBlogPageProps> = (props) => {
  const { banner, seo } = NAVIGATION.blog
  const { blogs } = props

  return (
    <>
      <Seo {...seo} />
      <BannerPageTemplate banner={banner}>
        {blogs.map((elem, index: number) => {
          const { _id, summary, category, lastUpdatedDate, ...restProps } = elem
          const info: Array<IIconText> = [
            {
              icon: FONTAWESOME_ICONS.calendar,
              content: lastUpdatedDate.toString().split('T')[0]
            },
            {
              icon: FONTAWESOME_ICONS.inbox,
              content: category
            }
          ]
          return (
            <BlogCard
              key={_id}
              info={info}
              pathTo={`/blog/${_id}`}
              curIndex={index}
              description={summary}
              {...restProps}
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
