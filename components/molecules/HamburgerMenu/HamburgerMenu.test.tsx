import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { HamburgerMenu } from 'components/molecules/HamburgerMenu'

const noop = () => {}

describe('<HamburgerMenu /> component render tests', () => {
  test('should render <Hamburger /> component', () => {
    render(
      <ThemeContext themeMode="light">
        <HamburgerMenu testId="default-menu" onClick={noop} />
      </ThemeContext>
    )

    const menu = screen.getByTestId('default-menu')
    expect(menu).toBeInTheDocument()
  })
})
