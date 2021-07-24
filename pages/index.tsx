import React from 'react'
import { Spacer } from 'components/atoms/Spacer'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { HomeAbout } from 'components/templates/Home/HomeAbout'
import { HomeSkill } from 'components/templates/Home/HomeSkill'
import { HomeExperience } from 'components/templates/Home/HomeExperience'
import { HomeContact } from 'components/templates/Home/HomeContact'
import { HomePortfolio } from 'components/templates/Home/HomePortfolio'
import { HomeBlog } from 'components/templates/Home/HomeBlog'
import { Page } from 'components/atoms/Layout/Page'

const homeComponents = [
  <HomeAbout key={1} />,
  <HomeSkill key={2} />,
  <HomeExperience key={3} />,
  <HomePortfolio key={4} />,
  <HomeBlog key={4} />,
  <HomeContact key={5} />
]

const components = homeComponents.map((c, index) => (
  <React.Fragment key={index}>
    {c}
    {/* Mobile disable or decrease verticalSpace */}
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
