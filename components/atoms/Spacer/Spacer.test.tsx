import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Spacer } from 'components/atoms/Spacer'

describe('<Spacer /> component render tests', () => {
  test('should render the Spacer component', () => {
    render(
      <Theme themeMode="light">
        <Spacer testId="default-spacer" />
      </Theme>
    )

    const spacer = screen.getByTestId('default-spacer')
    expect(spacer).toBeInTheDocument()
  })
})
