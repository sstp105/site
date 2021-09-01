import React from 'react'
import styled from 'styled-components'
import { Banner } from 'components/organisms/Banner/Banner.component'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { API } from 'libs/config/vars'
import { IProjectBase } from 'types/schema/Project'
import { ProjectList } from 'components/templates/ProjectList'

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  margin: 0 20px;
  ${(props) => props.theme.media.desktop_sm} {
    display: block;
  }
  height: 800px;
`

const MainSection = styled.div`
  width: 1240px;
  border-radius: 5px;
  color: ${(props) => props.theme.color.typography};
  margin: 50px 0;
  margin-right: 20px;
  ${(props) => props.theme.media.desktop_sm} {
    width: 100%;
  }
`

interface IProjectPageProps {
  projects: Array<IProjectBase>
}

const Project: React.FC<IProjectPageProps> = (props) => {
  const { projects } = props

  return (
    <>
      <Banner
        image={{
          url: 'https://firebasestorage.googleapis.com/v0/b/yang-cms.appspot.com/o/archive.jpg?alt=media&token=a1668206-b86e-4d8d-941d-278ab83e44dc'
        }}
        element={
          <SectionHeader title="Projects" subtitle="Learning By Doing" />
        }
      />
      <Wrapper>
        <MainSection>
          <ProjectList projects={projects} />
        </MainSection>
      </Wrapper>
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

export default Project
