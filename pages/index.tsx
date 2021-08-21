import React from 'react'
import { Page } from 'components/atoms/Layout'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { IProfile } from 'types/Profile'
import { IBlogBase } from 'types/schema/Blog'
import { IProjectBase } from 'types/schema/Project'
import { ProfileContext } from 'context/ProfileContext'
import { homeComponents } from 'components/templates/Home'
import { API } from 'libs/config/vars'

interface IHomeProps {
  profile: IProfile
  projects: Array<IProjectBase>
  blogs: Array<IBlogBase>
}

const Home: React.FC<IHomeProps> = (props) => {
  return (
    <ProfileContext.Provider value={props}>
      <HomeHero />
      <Page>{homeComponents}</Page>
    </ProfileContext.Provider>
  )
}

export async function getStaticProps() {
  const [profileData, projectData, blogData] = await Promise.all([
    fetch(`${API.baseUrl}/profile`, API.headers).then((res) => res.json()),
    fetch(`${API.baseUrl}/project`, API.headers).then((res) => res.json()),
    fetch(`${API.baseUrl}/blog`, API.headers).then((res) => res.json())
  ])

  const profile: IProfile = profileData.data
  const projects: Array<IProjectBase> = projectData.data
  const blogs: Array<IBlogBase> = blogData.data

  if (!profile) {
    return {
      notFound: true
    }
  }

  return {
    props: { profile, projects, blogs }
  }
}

export default Home
