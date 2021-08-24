import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Link } from 'components/atoms/Link'

describe('<Spacer /> component render tests', () => {
  test('should render the Spacer component', () => {
    render(
      <Theme themeMode="light">
        <Link testId="default-link" href="https://yangli.me/">
          Home Page
        </Link>
      </Theme>
    )

    const a = screen.getByTestId('default-link') as HTMLAnchorElement

    expect(a).toBeInTheDocument()
    expect(a.href).toBe('https://yangli.me/')
  })
})
