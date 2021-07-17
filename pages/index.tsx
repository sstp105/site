import React from 'react'
import { Seo } from 'components/molecules/Seo'
import { Header } from 'components/templates/shared/Header'
import { Spacer } from 'components/atoms/Spacer'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { HomeAbout } from 'components/templates/Home/HomeAbout'
import { HomeSkill } from 'components/templates/Home/HomeSkill'
import { HomeExperience } from 'components/templates/Home/HomeExperience'

const homeComponents = [<HomeAbout />, <HomeSkill />, <HomeExperience />]

const components = homeComponents.map((c, index) => (
  <React.Fragment key={index}>
    {c}
    <Spacer verticalSpace="200px" />
  </React.Fragment>
))

const Home: React.FC = () => {
  return (
    <>
      <Seo />
      <Header />
      <HomeHero />
      {components}
    </>
  )
}

export default Home
