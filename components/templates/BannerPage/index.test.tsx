import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Typography } from 'components/atoms/Typography'
import { BannerPageTemplate } from 'components/templates/BannerPage'
import { TESTCASE_1 } from 'components/templates/BannerPage/__mock__'

describe('Templates: <BannerPageTemplate /> component render tests', () => {
  test('Test case 1: should render its banner and content elements', () => {
    const { banner, content } = TESTCASE_1
    render(
      <Theme themeMode="light">
        <BannerPageTemplate banner={banner}>
          <Typography>{content}</Typography>
        </BannerPageTemplate>
      </Theme>
    )

    const renderedBannerTitle = screen.getByText('Banner Title')
    expect(renderedBannerTitle).toBeInTheDocument()

    const renderedContent = screen.getByText(content)
    expect(renderedContent).toBeInTheDocument()
  })
})
