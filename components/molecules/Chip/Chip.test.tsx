import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Chip } from 'components/molecules/Chip'

describe('<Chip /> component render tests', () => {
  test('should render <Chip /> component data content', () => {
    render(
      <ThemeContext themeMode="light">
        <Chip label="Chip Test" />
      </ThemeContext>
    )

    const chip = screen.getByText('Chip Test')
    expect(chip).toBeInTheDocument()
  })

  test('should render <Chip /> component and its icon', () => {
    render(
      <ThemeContext themeMode="light">
        <Chip
          iconTestId="chip-icon"
          label="Chip Test"
          icon="font-awesome-classname"
        />
      </ThemeContext>
    )

    const icon = screen.getByTestId('chip-icon')
    expect(icon).toBeInTheDocument()
  })
})
