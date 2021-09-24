import React from 'react'
import { API } from 'libs/config/api'
import { IProjectBase } from 'types/schema/Project'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { IIconText } from 'types/schema/Profile'
import { PortfolioCard as ProjectCard } from 'components/templates/PortfolioCard'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { INavigation } from 'types/schema/Navigation'
import { SectionHeader } from 'components/molecules/SectionHeader'

interface IProjectPageProps {
  projects: Array<IProjectBase>
  navigation: INavigation
}

const ProjectPage: React.FC<IProjectPageProps> = (props) => {
  const { projects, navigation } = props
  const { seo, banner } = navigation

  const bannerProps = {
    image: banner.image,
    element: <SectionHeader title={banner.title} subtitle={banner.subtitle} />
  }

  return (
    <>
      <Seo {...seo} />
      <BannerPageTemplate banner={bannerProps}>
        {projects.map((elem, index: number) => {
          const { _id, category, ...restProps } = elem
          const info: Array<IIconText> = [
            {
              icon: FONTAWESOME_ICONS.inbox,
              content: category
            }
          ]
          return (
            <ProjectCard
              key={_id}
              info={info}
              pathTo={`/project/${_id}`}
              curIndex={index}
              {...restProps}
            />
          )
        })}
      </BannerPageTemplate>
    </>
  )
}

export async function getStaticProps() {
  const [projects, navigation] = await Promise.all([
    fetch(API.ROUTES('project'), API.HEADERS).then((res) => res.json()),
    fetch(API.ROUTES('navigation/project'), API.HEADERS).then((res) =>
      res.json()
    )
  ])

  if (!projects || !navigation) {
    return {
      notFound: true
    }
  }

  return {
    props: { projects, navigation }
  }
}

export default ProjectPage
