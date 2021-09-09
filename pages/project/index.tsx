import React from 'react'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IProjectBase } from 'types/schema/Project'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { IIconText } from 'types/schema/Profile'
import { PortfolioCard as ProjectCard } from 'components/templates/PortfolioCard'
import { NAVIGATION } from 'libs/constants/navigation'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'

interface IProjectPageProps {
  projects: Array<IProjectBase>
}

const ProjectPage: React.FC<IProjectPageProps> = (props) => {
  const { banner, seo } = NAVIGATION.project
  const { projects } = props

  const bannerProps: IBannerProps = {
    image: {
      url: banner
    },
    element: <SectionHeader title={seo.title} subtitle={seo.description} />
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
  const [projectData] = await Promise.all([
    fetch(`${API.baseUrl}/project`, API.headers).then((res) => res.json())
  ])
  const projects: Array<IProjectBase> = projectData.data

  if (!projects) {
    return {
      notFound: true
    }
  }

  return {
    props: { projects }
  }
}

export default ProjectPage
