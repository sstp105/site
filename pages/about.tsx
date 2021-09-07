import { SectionHeader } from 'components/molecules/SectionHeader'
import { IBannerProps } from 'components/organisms/Banner/Banner.component'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { NavigationContext } from 'context/NavigationContext'
import React, { useContext } from 'react'
import styled from 'styled-components'

const Content = styled.div`
  height: calc(100vh - 75px - 350px);
`

const AboutPage: React.FC = () => {
  const { about } = useContext(NavigationContext)

  const bannerProps: IBannerProps = {
    image: {
      url: about.banner
    },
    element: (
      <SectionHeader title={about.seo.title} subtitle={about.seo.description} />
    )
  }

  return (
    <>
      <Seo {...about.seo} />
      <BannerPageTemplate banner={bannerProps}>
        <Content>
          <h1>About Me</h1>
        </Content>
      </BannerPageTemplate>
    </>
  )
}

export default AboutPage
