import React, { useEffect } from 'react'
import AOS from 'aos'
import { Page } from 'components/atoms/Page'
import { Seo } from 'components/templates/Seo'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { ProfileContext } from 'context/ProfileContext'
import { homeComponents } from 'components/templates/Home'
import { Spacer } from 'components/atoms/Spacer'
import { IProfile } from 'types/schema/Profile'
import { IBlogBase } from 'types/schema/Blog'
import { IProjectBase } from 'types/schema/Project'
import { API } from 'libs/config/api'
import 'aos/dist/aos.css'
import { AOS_INIT_CONFIG, createAOSAnimation } from 'libs/config/aos'
import { INavigation } from 'types/schema/Navigation'

interface IHomePageProps {
  profile: IProfile
  projects: Array<IProjectBase>
  blogs: Array<IBlogBase>
  pageData: INavigation
}

const HomePage: React.FC<IHomePageProps> = (props) => {
  const { pageData } = props

  useEffect(() => {
    AOS.init(AOS_INIT_CONFIG)
  }, [])

  return (
    <>
      <Seo {...pageData.seo} />
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
                  data-aos={createAOSAnimation('fade-up')}
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
  const [profileData, projectData, blogData, navigationData] =
    await Promise.all([
      fetch(`${API.baseUrl}/profile`, API.headers).then((res) => res.json()),
      fetch(`${API.baseUrl}/project`, API.headers).then((res) => res.json()),
      fetch(`${API.baseUrl}/blog`, API.headers).then((res) => res.json()),
      fetch(`${API.baseUrl}/navigation/home`, API.headers).then((res) =>
        res.json()
      )
    ])

  const profile: IProfile = profileData.data
  const projects: Array<IProjectBase> = projectData.data
  const blogs: Array<IBlogBase> = blogData.data
  const pageData: INavigation = navigationData.data

  if (!profile) {
    return {
      notFound: true
    }
  }

  return {
    props: { profile, projects, blogs, pageData }
  }
}

export default HomePage
