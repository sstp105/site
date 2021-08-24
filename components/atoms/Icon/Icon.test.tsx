import React from 'react'
import { render, screen } from '@testing-library/react'
import { Theme } from 'styles'
import { Icon } from 'components/atoms/Icon'

describe('<Icon /> component render tests', () => {
  test('should render the icon with valid font-awesome className', () => {
    render(
      <Theme themeMode="light">
        <Icon iconName="fab fa-github" testId="github-icon" />
      </Theme>
    )
    const githubIcon = screen.getByTestId('github-icon')
    expect(githubIcon).toBeInTheDocument()
  })
})
