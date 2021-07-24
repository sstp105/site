import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Page } from 'components/atoms/Layout'

describe('<Page /> component render tests', () => {
  test('should render the Page container and children elements', () => {
    render(
      <ThemeContext themeMode="light">
        <Page testId="default-page">
          <h1>Page Container Test</h1>
        </Page>
      </ThemeContext>
    )

    const pageContainer = screen.getByTestId('default-page')
    const childrenElement = screen.getByText('Page Container Test')

    expect(pageContainer).toBeInTheDocument()
    expect(childrenElement).toBeInTheDocument()
  })
})
