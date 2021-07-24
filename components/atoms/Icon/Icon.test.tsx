import React from 'react'
import { render, screen } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Icon } from 'components/atoms/Icon'

describe('<Icon /> component render tests', () => {
  test('should render the icon with valid font-awesome className', () => {
    render(
      <ThemeContext themeMode="light">
        <Icon iconName="fab fa-github" testId="github-icon" />
      </ThemeContext>
    )
    const githubIcon = screen.getByTestId('github-icon')
    expect(githubIcon).toBeInTheDocument()
  })
})
