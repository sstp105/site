import React, { useContext } from 'react'
import { API } from 'libs/config/api'
import { IBlogBase } from 'types/schema/Blog'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { PortfolioCard as BlogCard } from 'components/templates/PortfolioCard'
import { IIconText } from 'types/schema/Profile'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { formatDate } from 'libs/utils/stringHelper'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { INavigation } from 'types/schema/Navigation'

interface IBlogPageProps {
  blogs: Array<IBlogBase>
  navigation: INavigation
}

const BlogPage: React.FC<IBlogPageProps> = (props) => {
  const { blogs, navigation } = props
  const { seo, banner } = navigation

  const bannerProps = {
    image: banner.image,
    element: <SectionHeader title={banner.title} subtitle={banner.subtitle} />
  }
  return (
    <>
      <Seo {...seo} />
      <BannerPageTemplate banner={bannerProps}>
        {blogs.map((elem, index: number) => {
          const { _id, summary, category, lastUpdatedDate, ...restProps } = elem
          const info: Array<IIconText> = [
            {
              icon: FONTAWESOME_ICONS.calendar,
              content: formatDate(lastUpdatedDate)
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
  const [blogData, pageData] = await Promise.all([
    fetch(`${API.baseUrl}/blog`, API.headers).then((res) => res.json()),
    fetch(`${API.baseUrl}/navigation/blog`, API.headers).then((res) =>
      res.json()
    )
  ])
  const blogs: Array<IBlogBase> = blogData.data
  const navigation: INavigation = pageData.data

  if (!blogs) {
    return {
      notFound: true
    }
  }

  return {
    props: { blogs, navigation }
  }
}

export default BlogPage
