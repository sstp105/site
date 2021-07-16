import React from 'react'
import { Seo } from 'components/molecules/Seo'
import { Header } from 'components/templates/shared/Header'
import { Spacer } from 'components/atoms/Spacer'
import { HomeHero } from 'components/templates/Home/HomeIntro'
import { HomeAbout } from 'components/templates/Home/HomeAbout'

const homeComponents = [<HomeHero />, <HomeAbout />]

const components = homeComponents.map((c, index) => (
  <React.Fragment key={index}>
    {c}
    {/* <Spacer verticalSpace="200px" /> */}
  </React.Fragment>
))

const Home: React.FC = () => {
  return (
    <>
      <Seo />
      <Header />
      {components}
      <Spacer verticalSpace="200px" />
    </>
  )
}

export default Home
