import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Overlay } from 'components/atoms/Overlay'

describe('<Overlay /> component render tests', () => {
  test('should render the overlay modal', () => {
    render(
      <Theme themeMode="light">
        <Overlay testId="default-overlay" onClose={() => null} />
      </Theme>
    )

    const overlayContainer = screen.getByTestId('default-overlay')
    expect(overlayContainer).toBeInTheDocument()
  })
})
