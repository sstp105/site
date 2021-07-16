import React from 'react'
import { Seo } from 'components/molecules/Seo'
import { Header } from 'components/templates/shared/Header'
import { Spacer } from 'components/atoms/Spacer'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { HomeAbout } from 'components/templates/Home/HomeAbout'
import { Paper } from 'components/molecules/Paper'

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

      <div style={{ marginLeft: '100px', marginBottom: '100px' }}>
        <Paper>
          UI/UX Design
          <h1>dd</h1>
        </Paper>
      </div>
    </>
  )
}

export default Home
