import React from 'react'
import styled from 'styled-components'
import { homeComponents } from 'components/templates/Home'
import { Spacer } from 'components/atoms/Spacer'
import { Page } from 'components/atoms/Layout'
import { HomeHero } from 'components/templates/Home/HomeHero'

const StyledWrapper = styled.div`
  position: relative;
`
const components = Object.keys(homeComponents).map((key) => {
  const { id, component } = homeComponents[key]

  return (
    <React.Fragment key={id}>
      <StyledWrapper id={id}>{component}</StyledWrapper>
      <Spacer verticalSpace="200px" />
    </React.Fragment>
  )
})

const Home: React.FC = () => {
  return (
    <>
      <HomeHero />
      <Page>{components}</Page>
    </>
  )
}

export default Home
