import React from 'react'
import { Theme } from 'context/Theme'
import { render, screen } from '@testing-library/react'
import { Button } from 'components/atoms/Button'

describe('<SearchInput /> component render tests', () => {
  test('should render default Button component', () => {
    render(
      <Theme>
        <Button testId="submit-button">Submit</Button>
      </Theme>
    )
    const defaultButton = screen.getByTestId('submit-button')
    expect(defaultButton).toBeInTheDocument()
  })
})
