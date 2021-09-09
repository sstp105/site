import React from 'react'
import styled from 'styled-components'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { NAVIGATION } from 'libs/constants/navigation'

const Content = styled.div`
  height: calc(100vh - 75px - 350px);
`

const AboutPage: React.FC = () => {
  const { banner, seo } = NAVIGATION.about

  const bannerProps: IBannerProps = {
    image: {
      url: banner
    },
    element: <SectionHeader title={seo.title} subtitle={seo.description} />
  }

  return (
    <>
      <Seo {...NAVIGATION.about.seo} />
      <BannerPageTemplate banner={bannerProps}>
        <Content>
          <h1>About Me</h1>
        </Content>
      </BannerPageTemplate>
    </>
  )
}

export default AboutPage
