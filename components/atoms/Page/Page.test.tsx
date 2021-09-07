import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Page } from 'components/atoms/Page'

describe('<Page /> component render tests', () => {
  test('should render the Page container and children elements', () => {
    render(
      <Theme themeMode="light">
        <Page testId="default-page">
          <h1>Page Container Test</h1>
        </Page>
      </Theme>
    )

    const pageContainer = screen.getByTestId('default-page')
    const childrenElement = screen.getByText('Page Container Test')

    expect(pageContainer).toBeInTheDocument()
    expect(childrenElement).toBeInTheDocument()
  })
})
