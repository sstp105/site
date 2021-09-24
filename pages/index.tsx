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
import 'aos/dist/aos.css'
import { AOS_INIT_CONFIG, createAOSAnimation } from 'libs/config/aos'
import { INavigation } from 'types/schema/Navigation'
import { API } from 'libs/config/api'

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
  const [profile, projects, blogs, pageData] = await Promise.all([
    fetch(API.ROUTES('profile'), API.HEADERS).then((res) => res.json()),
    fetch(API.ROUTES('project'), API.HEADERS).then((res) => res.json()),
    fetch(API.ROUTES('blog'), API.HEADERS).then((res) => res.json()),
    fetch(API.ROUTES('navigation/home'), API.HEADERS).then((res) => res.json())
  ])

  if (!profile || !projects || !blogs || !pageData) {
    return {
      notFound: true
    }
  }

  return {
    props: {
      profile: profile.data,
      projects: projects.data,
      blogs: blogs.data,
      pageData: pageData.data
    }
  }
}

export default HomePage
