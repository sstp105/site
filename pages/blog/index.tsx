import React from 'react'
import { IBlogBase } from 'types/schema/Blog'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { PortfolioCard as BlogCard } from 'components/templates/PortfolioCard'
import { IIconText } from 'types/schema/Profile'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { formatDate } from 'libs/utils/stringHelper'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { INavigation } from 'types/schema/Navigation'
import path from 'path'
import fs from 'fs/promises'

interface IBlogPageProps {
  blogs: Array<IBlogBase>
  pageData: INavigation
}

const BlogPage: React.FC<IBlogPageProps> = (props) => {
  const { blogs, pageData } = props
  const { seo, banner } = pageData

  const bannerProps = {
    image: banner.image,
    element: <SectionHeader title={banner.title} subtitle={banner.subtitle} />
  }
  return (
    <>
      <Seo {...seo} />
      <BannerPageTemplate banner={bannerProps}>
        {blogs.map((elem, index: number) => {
          const { id, summary, category, lastUpdatedDate, ...restProps } = elem
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
              key={id}
              info={info}
              pathTo={`/blog/${id}`}
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
  const navigations = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/navigations.json'), 'utf-8'))
  const pageData = navigations.find((p) => p.pathname === "blog");

  const blogs = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/blogs.json'), 'utf-8'))

  if (!blogs || !navigations || !pageData) {
    return {
      notFound: true
    }
  }

  return {
    props: { blogs, navigations, pageData }
  }
}

export default BlogPage
