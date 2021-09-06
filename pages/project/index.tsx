import React from 'react'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IProjectBase } from 'types/schema/Project'
import { ProjectList } from 'components/templates/ProjectList'
import { BannerPageTemplate } from 'components/templates/BannerPage'

interface IProjectPageProps {
  projects: Array<IProjectBase>
}

const ProjectPage: React.FC<IProjectPageProps> = (props) => {
  const { projects } = props

  const bannerProps: IBannerProps = {
    image: {
      url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/archive.jpg?alt=media&token=a1668206-b86e-4d8d-941d-278ab83e44dc'
    },
    element: <SectionHeader title="Projects" subtitle="Learning By Doing" />
  }

  return (
    <BannerPageTemplate banner={bannerProps}>
      <ProjectList projects={projects} />
    </BannerPageTemplate>
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
