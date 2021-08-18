import React from 'react'
import { Page } from 'components/atoms/Layout'
import { HomeHero } from 'components/templates/Home/HomeHero'
import { IProfile } from 'types/Profile'
import { ProfileContext } from 'context/ProfileContext'
import { homeComponents } from 'components/templates/Home'

const Home: React.FC<{ profile: IProfile }> = ({ profile }) => {
  return (
    <ProfileContext.Provider value={profile}>
      <HomeHero />
      <Page>{homeComponents}</Page>
    </ProfileContext.Provider>
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
