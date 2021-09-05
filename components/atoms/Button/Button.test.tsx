import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Theme } from 'styles'
import { Button } from 'components/atoms/Button'
import { Icon } from 'components/atoms/Icon'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'

describe('<Button /> component render tests', () => {
  test('should render a default Button component in the document', () => {
    render(
      <Theme themeMode="light">
        <Button testId="submit-button">Submit</Button>
      </Theme>
    )
    const defaultButton = screen.getByTestId('submit-button')
    expect(defaultButton).toBeInTheDocument()

    const defaultButtonText = screen.getByText('Submit')
    expect(defaultButtonText).toBeInTheDocument()
  })

  test('should startIcon and endIcon elements', () => {
    const LeftIcon = (
      <Icon iconName={FONTAWESOME_ICONS.download} testId="left-icon" />
    )
    const RightIcon = (
      <Icon iconName={FONTAWESOME_ICONS.download} testId="right-icon" />
    )

    render(
      <Theme themeMode="light">
        <Button
          testId="button-with-icon"
          startIcon={LeftIcon}
          endIcon={RightIcon}
        >
          Submit
        </Button>
      </Theme>
    )

    const buttonRoot = screen.getByTestId('button-with-icon')
    expect(buttonRoot).toBeInTheDocument()

    const leftIcon = screen.getByTestId('left-icon')
    const rightIcon = screen.getByTestId('right-icon')

    expect(leftIcon).toBeInTheDocument()
    expect(rightIcon).toBeInTheDocument()
  })
})

describe('<Button /> component event listener test', () => {
  test('should invoke the onClick function', () => {
    const onClickMock = jest.fn()

    render(
      <Theme themeMode="light">
        <Button testId="click-button" onClick={onClickMock}>
          Click
        </Button>
      </Theme>
    )
    const buttonRoot = screen.getByTestId('click-button')
    fireEvent.click(buttonRoot)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
