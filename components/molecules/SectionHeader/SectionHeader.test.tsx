import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { SectionHeader } from 'components/molecules/SectionHeader'

describe('<Chip /> component render tests', () => {
  test('should render <Chip /> component data content', () => {
    render(
      <Theme themeMode="light">
        <SectionHeader
          title="About Me"
          subtitle="Love Coding, Competitive Powerlifter, ACG fans."
        />
      </Theme>
    )

    const title = screen.getByText('About Me')
    const subtitle = screen.getByText(
      'Love Coding, Competitive Powerlifter, ACG fans.'
    )

    expect(title).toBeInTheDocument()
    expect(subtitle).toBeInTheDocument()
  })
})
