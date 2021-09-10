import React from 'react'
import styled from 'styled-components'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { NAVIGATION } from 'libs/constants/navigation'
import { Typography } from 'components/atoms/Typography'

const Content = styled.div`
  background-color: ${(props) => props.theme.color.surface};
  padding: 20px 50px;
  margin: 0 20px;
  height: calc(100vh - 75px - 350px);
`

const AboutPage: React.FC = () => {
  const { banner, seo } = NAVIGATION.about

  return (
    <>
      <Seo {...seo} />
      <BannerPageTemplate banner={banner} pageWidth={1024}>
        <Content>
          <Typography variant="h4" align="center">
            About Me
          </Typography>
          <Typography>A software developer at Fabric.inc.</Typography>
        </Content>
      </BannerPageTemplate>
    </>
  )
}

export default AboutPage
