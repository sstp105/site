import React from 'react'
import styled from 'styled-components'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { NAVIGATION } from 'libs/constants/navigation'

const Content = styled.div`
  height: calc(100vh - 75px - 350px);
`

const AboutPage: React.FC = () => {
  const { banner, seo } = NAVIGATION.about

  return (
    <>
      <Seo {...NAVIGATION.about.seo} />
      <BannerPageTemplate banner={banner}>
        <Content>
          <h1>About Me</h1>
        </Content>
      </BannerPageTemplate>
    </>
  )
}

export default AboutPage
