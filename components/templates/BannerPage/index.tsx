import { Page } from 'components/atoms/Page'
import {
  Banner,
  IBannerProps
} from 'components/organisms/Banner/Banner.component'
import React from 'react'
import { breakPoints, Device } from 'styles/theme/media'

interface IBannerPageTemplate {
  banner: IBannerProps
  pageWidth?: Device
  children: React.ReactNode
}

export const BannerPageTemplate: React.FC<IBannerPageTemplate> = (props) => {
  const { banner, children, pageWidth } = props

  return (
    <>
      <Banner {...banner} />
      <Page width={pageWidth} margin={50}>
        {children}
      </Page>
    </>
  )
}

BannerPageTemplate.defaultProps = {
  pageWidth: 'desktop_md'
}
