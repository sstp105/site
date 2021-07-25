import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Spacer } from 'components/atoms/Spacer'

describe('<Spacer /> component render tests', () => {
  test('should render the Spacer component', () => {
    render(
      <ThemeContext themeMode="light">
        <Spacer testId="default-spacer" />
      </ThemeContext>
    )

    const spacer = screen.getByTestId('default-spacer')
    expect(spacer).toBeInTheDocument()
  })
})
