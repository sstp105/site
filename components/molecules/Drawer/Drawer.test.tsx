import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Drawer } from 'components/molecules/Drawer'
import { Typography } from 'components/atoms/Typography'

const noop = () => {}

describe('<Drawer /> component render tests', () => {
  test('should render <Drawer /> component and its content if open state is true', () => {
    render(
      <ThemeContext themeMode="light">
        <Drawer onClose={noop} open={true} testId="default-drawer">
          <Typography>Drawer content</Typography>
        </Drawer>
      </ThemeContext>
    )

    const drawer = screen.getByTestId('default-drawer')
    expect(drawer).toBeInTheDocument()

    const content = screen.getByText('Drawer content')
    expect(content).toBeInTheDocument()
  })

  test('should not render <Drawer /> component if open is false', () => {
    render(
      <ThemeContext themeMode="light">
        <Drawer onClose={noop} open={false} testId="hidden-drawer">
          <Typography>Hidden Content</Typography>
        </Drawer>
      </ThemeContext>
    )

    const content = screen.queryByText('Hidden Content')
    expect(content).not.toBeInTheDocument()
  })
})
