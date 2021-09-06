import React, { useContext } from 'react'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IProjectBase } from 'types/schema/Project'
import { ProjectList } from 'components/templates/ProjectList'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/shared/Seo'
import { NavigationContext } from 'context/NavigationContext'

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
        <ProjectList projects={projects} />
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
