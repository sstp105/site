import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Overlay } from 'components/atoms/Overlay'

describe('<Overlay /> component render tests', () => {
  test('should render the overlay modal', () => {
    render(
      <ThemeContext themeMode="light">
        <Overlay testId="default-overlay" onClose={() => null} />
      </ThemeContext>
    )

    const overlayContainer = screen.getByTestId('default-overlay')
    expect(overlayContainer).toBeInTheDocument()
  })
})
