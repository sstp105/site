import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Typography } from 'components/atoms/Typography'

describe('<Typography /> component render tests', () => {
  test('should render the h1 element and its content', () => {
    render(
      <Theme themeMode="light">
        <Typography testId="h1-test" variant="h1">
          Heading One Test
        </Typography>
      </Theme>
    )

    const h1 = screen.getByTestId('h1-test')
    expect(h1.tagName).toBe('H1')

    const content = screen.getByText('Heading One Test')
    expect(content).toBeInTheDocument()
  })

  test('should render the h2 element and its content', () => {
    render(
      <Theme themeMode="light">
        <Typography testId="h2-test" variant="h2">
          Heading Two Test
        </Typography>
      </Theme>
    )

    const h2 = screen.getByTestId('h2-test')
    expect(h2.tagName).toBe('H2')

    const content = screen.getByText('Heading Two Test')
    expect(content).toBeInTheDocument()
  })

  test('should render the h3 element and its content', () => {
    render(
      <Theme themeMode="light">
        <Typography testId="h3-test" variant="h3">
          Heading Three Test
        </Typography>
      </Theme>
    )

    const h3 = screen.getByTestId('h3-test')
    expect(h3.tagName).toBe('H3')

    const content = screen.getByText('Heading Three Test')
    expect(content).toBeInTheDocument()
  })

  test('should render the h4 element and its content', () => {
    render(
      <Theme themeMode="light">
        <Typography testId="h4-test" variant="h4">
          Heading Four Test
        </Typography>
      </Theme>
    )

    const h4 = screen.getByTestId('h4-test')
    expect(h4.tagName).toBe('H4')

    const content = screen.getByText('Heading Four Test')
    expect(content).toBeInTheDocument()
  })

  test('should render the h5 element and its content', () => {
    render(
      <Theme themeMode="light">
        <Typography testId="h5-test" variant="h5">
          Heading Five Test
        </Typography>
      </Theme>
    )

    const h5 = screen.getByTestId('h5-test')
    expect(h5.tagName).toBe('H5')

    const content = screen.getByText('Heading Five Test')
    expect(content).toBeInTheDocument()
  })

  test('should render the h6 element and its content', () => {
    render(
      <Theme themeMode="light">
        <Typography testId="h6-test" variant="h6">
          Heading Six Test
        </Typography>
      </Theme>
    )

    const h6 = screen.getByTestId('h6-test')
    expect(h6.tagName).toBe('H6')

    const content = screen.getByText('Heading Six Test')
    expect(content).toBeInTheDocument()
  })
})
