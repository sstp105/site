import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { SectionHeader } from 'components/molecules/SectionHeader'

describe('<Chip /> component render tests', () => {
  test('should render <Chip /> component data content', () => {
    render(
      <ThemeContext themeMode="light">
        <SectionHeader
          title="About Me"
          subtitle="Love Coding, Competitive Powerlifter, ACG fans."
        />
      </ThemeContext>
    )

    const title = screen.getByText('About Me')
    const subtitle = screen.getByText(
      'Love Coding, Competitive Powerlifter, ACG fans.'
    )

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
