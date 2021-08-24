import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { HamburgerMenu } from 'components/molecules/HamburgerMenu'

const noop = () => {}

describe('<HamburgerMenu /> component render tests', () => {
  test('should render <Hamburger /> component', () => {
    render(
      <Theme themeMode="light">
        <HamburgerMenu testId="default-menu" onClick={noop} />
      </Theme>
    )

    const menu = screen.getByTestId('default-menu')
    expect(menu).toBeInTheDocument()
  })
})
