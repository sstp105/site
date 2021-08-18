import React from 'react'
import styled from 'styled-components'
import { homeComponents } from 'components/templates/Home'
import { Spacer } from 'components/atoms/Spacer'
import { Page } from 'components/atoms/Layout'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { IProfile } from 'types/Profile'

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

const Home: React.FC<{ profile: IProfile }> = ({ profile }) => {
  const {
    avatar,
    contacts,
    firstName,
    lastName,
    jobTitle,
    socialMedias,
    albums,
    bio,
    experiences,
    resumeLink,
    skills,
    tools
  } = profile

  const heroProps = {
    avatar,
    contacts,
    firstName,
    lastName,
    jobTitle,
    socialMedias
  }
  return (
    <>
      <HomeHero {...heroProps} />
      <Page>{components}</Page>
    </>
  )
}

export async function getStaticProps() {
  const res = await fetch(`${process.env.API}/profile`, {
    headers: { Authorization: process.env.AUTHORIZATION_TOKEN }
  })

  const data = await res.json()
  const profile: IProfile = data.data

  if (!profile) {
    return {
      notFound: true
    }
  }

  return {
    props: { profile }
  }
}

export default Home
