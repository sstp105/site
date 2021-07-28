import React from 'react'
import {
  HomeHero,
  HomeAbout,
  HomeSkill,
  HomeExperience,
  HomePortfolio,
  HomeBlog,
  HomeContact
} from 'components/templates/Home'
import { Spacer } from 'components/atoms/Spacer'
import { Page } from 'components/atoms/Layout'

const homeComponents = [
  <HomeAbout key={'home-about'} />,
  <HomeSkill key={'home-skill'} />,
  <HomeExperience key={'home-experience'} />,
  <HomePortfolio key={'home-portfolio'} />,
  <HomeBlog key={'home-blog'} />,
  <HomeContact key={'home-contact'} />
]

const components = homeComponents.map((c, index) => (
  <React.Fragment key={index}>
    {c}
    <Spacer verticalSpace="200px" />
  </React.Fragment>
))

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <Page>{components}</Page>
    </>
  )
}

export default Home
