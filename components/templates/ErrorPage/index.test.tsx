import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { ERROR_PAGE } from 'libs/constants/error'
import { ErrorPageTemplate } from '.'

describe('Templates: <ErrorPageTemplate /> component render tests', () => {
  test('Test case 1: should render the error title and description', () => {
    const { title, description } = ERROR_PAGE[404]

    render(
      <Theme themeMode="light">
        <ErrorPageTemplate {...ERROR_PAGE[404]} />
      </Theme>
    )

    const renderedTitle = screen.getByText(title)
    expect(renderedTitle).toBeInTheDocument()

    const renderedDescription = screen.getByText(description)
    expect(renderedDescription).toBeInTheDocument()
  })
})
