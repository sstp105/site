import React from 'react'
import { IProjectBase } from 'types/schema/Project'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { IIconText } from 'types/schema/Profile'
import { PortfolioCard as ProjectCard } from 'components/templates/PortfolioCard'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import { INavigation } from 'types/schema/Navigation'
import { SectionHeader } from 'components/molecules/SectionHeader'
import path from 'path'
import fs from 'fs/promises'

interface IProjectPageProps {
  projects: Array<IProjectBase>
  pageData: INavigation
}

const ProjectPage: React.FC<IProjectPageProps> = (props) => {
  const { projects, pageData } = props
  const { seo, banner } = pageData

  const bannerProps = {
    image: banner.image,
    element: <SectionHeader title={banner.title} subtitle={banner.subtitle} />
  }

  return (
    <>
      <Seo {...seo} />
      <BannerPageTemplate banner={bannerProps}>
        {projects.map((elem, index: number) => {
          const { id, category, ...restProps } = elem
          const info: Array<IIconText> = [
            {
              icon: FONTAWESOME_ICONS.inbox,
              content: category
            }
          ]
          return (
            <ProjectCard
              key={id}
              info={info}
              pathTo={`/project/${id}`}
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
  const navigations = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/navigations.json'), 'utf-8'))
  const pageData = navigations.find((p) => p.pathname === "project");

  const projects = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/projects.json'), 'utf-8'))

  if (!projects || !navigations) {
    return {
      notFound: true
    }
  }

  return {
    props: { projects, navigations, pageData }
  }
}

export default ProjectPage
