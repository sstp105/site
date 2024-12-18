import path from 'path'
import fs from 'fs/promises'
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
  const navigations = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/navigations.json'), 'utf-8'))
  const pageData = navigations.find((p) => p.pathname === "home");
  const profile = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/profiles.json'), 'utf-8'))
  const projects = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/projects.json'), 'utf-8'))
  const blogs = JSON.parse(await fs.readFile(path.join(process.cwd(), 'public/data/blogs.json'), 'utf-8'))

  if (!profile || !projects || !blogs || !navigations) {
    return {
      notFound: true
    }
  }

  return {
    props: { profile, projects, blogs, pageData, navigations }
  }
}

export default HomePage
