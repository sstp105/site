import React, { useContext, useEffect } from 'react'
import AOS from 'aos'
import { API } from 'libs/config/vars'
import { Page } from 'components/atoms/Layout'
import { Seo } from 'components/templates/shared/Seo'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { IProfile } from 'types/schema/Profile'
import { IBlogBase } from 'types/schema/Blog'
import { IProjectBase } from 'types/schema/Project'
import { ProfileContext } from 'context/ProfileContext'
import { homeComponents } from 'components/templates/Home'
import { Spacer } from 'components/atoms/Spacer'
import 'aos/dist/aos.css'
import { NavigationContext } from 'context/NavigationContext'

interface IHomePageProps {
  profile: IProfile
  projects: Array<IProjectBase>
  blogs: Array<IBlogBase>
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { home } = useContext(NavigationContext)

  useEffect(() => {
    AOS.init({
      offset: 300,
      duration: 1000,
      easing: 'ease',
      delay: 100
    })
  }, [])

  return (
    <>
      <Seo {...home.seo} />
      <ProfileContext.Provider value={props}>
        <HomeHero />
        <Page>
          {Object.keys(homeComponents).map((key) => {
            const { id, component } = homeComponents[key]
            return (
              <React.Fragment key={id}>
                <section
                  id={id}
                  style={{ position: 'relative' }}
                  data-aos="fade-up"
                >
                  {component}
                </section>
                <Spacer verticalSpace="200px" />
              </React.Fragment>
            )
          })}
        </Page>
      </ProfileContext.Provider>
    </>
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

export default HomePage
