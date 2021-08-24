import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Chip } from 'components/molecules/Chip'

describe('<Chip /> component render tests', () => {
  test('should render <Chip /> component data content', () => {
    render(
      <Theme themeMode="light">
        <Chip label="Chip Test" />
      </Theme>
    )

    const chip = screen.getByText('Chip Test')
    expect(chip).toBeInTheDocument()
  })

  test('should render <Chip /> component and its icon', () => {
    render(
      <Theme themeMode="light">
        <Chip
          iconTestId="chip-icon"
          label="Chip Test"
          icon="font-awesome-classname"
        />
      </Theme>
    )

    const icon = screen.getByTestId('chip-icon')
    expect(icon).toBeInTheDocument()
  })
})
