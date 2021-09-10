import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Footer } from 'components/templates/Footer'
import { FOOTER } from 'libs/constants/text'

describe('Templates: <Footer /> component render tests', () => {
  test('Test case 1: should render the footer content', () => {
    render(
      <Theme themeMode="light">
        <Footer />
      </Theme>
    )

    const renderedFooterContent = screen.getByText(FOOTER)
    expect(renderedFooterContent).toBeInTheDocument()
  })
})
