import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Banner, IBannerProps } from 'components/organisms/Banner/'
import { Typography } from 'components/atoms/Typography'

describe('Organisms: <Banner /> component render tests', () => {
  test('Test case 1: should render Banner background image url correctly', () => {
    const bannerProps: IBannerProps = {
      image: {
        url: 'banner-background-url.jpg'
      },
      element: <Typography variant="h1">Banner Title</Typography>,
      testId: 'test-banner-1'
    }

    render(
      <Theme themeMode="light">
        <Banner {...bannerProps} />
      </Theme>
    )

    const renderedBannerTitle = screen.getByText('Banner Title')
    expect(renderedBannerTitle).toBeInTheDocument()

    const renderedBannerImage = screen.getByTestId('test-banner-1')
    expect(renderedBannerImage).toHaveStyle(
      `background-image: url(${bannerProps.image.url})`
    )
  })
})
