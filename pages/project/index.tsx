import React, { useContext } from 'react'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IProjectBase } from 'types/schema/Project'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { NavigationContext } from 'context/NavigationContext'
import { IIconText } from 'types/schema/Profile'
import { PortfolioCard as ProjectCard } from 'components/templates/PortfolioCard'

interface IProjectPageProps {
  projects: Array<IProjectBase>
}

const ProjectPage: React.FC<IProjectPageProps> = (props) => {
  const { project } = useContext(NavigationContext)
  const { projects } = props

  const bannerProps: IBannerProps = {
    image: {
      url: project.banner
    },
    element: (
      <SectionHeader
        title={project.seo.title}
        subtitle={project.seo.description}
      />
    )
  }

  return (
    <>
      <Seo {...project.seo} />
      <BannerPageTemplate banner={bannerProps}>
        {projects.map((elem, index: number) => {
          const { _id, banner, title, description, category, tags } = elem
          const info: Array<IIconText> = [
            {
              icon: 'fas fa-inbox',
              content: category
            }
          ]
          return (
            <ProjectCard
              key={_id}
              banner={banner}
              title={title}
              description={description}
              tags={tags.slice(0, 3)}
              info={info}
              pathTo={`/project/${_id}`}
              curIndex={index}
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
