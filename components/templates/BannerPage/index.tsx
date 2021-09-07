import { Page } from 'components/atoms/Page'
import {
  Banner,
  IBannerProps
} from 'components/organisms/Banner/Banner.component'
import React from 'react'

interface IBannerPageTemplate {
  banner: IBannerProps
  pageWidth?: number
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
  pageWidth: 1240
}
