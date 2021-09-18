import React from 'react'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { Seo } from 'components/templates/Seo'
import { NAVIGATION } from 'libs/constants/navigation'
import { Typography } from 'components/atoms/Typography'
import { VARS } from 'libs/config/vars'
import ServerErrorPage from 'pages/500'

const AboutPage: React.FC = () => {
  const { banner, seo } = NAVIGATION.about

  if (VARS.isProd) {
    return <ServerErrorPage />
  }

  return (
    <>
      <Seo {...seo} />
      <BannerPageTemplate banner={banner} pageWidth="desktop_sm">
        <Typography variant="h4" align="center">
          About Me
        </Typography>
        <Typography>A software developer at Fabric.inc.</Typography>
      </BannerPageTemplate>
    </>
  )
}

export default AboutPage
