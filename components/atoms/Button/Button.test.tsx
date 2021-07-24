import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { ThemeContext } from 'context/ThemeContext'
import { Button } from 'components/atoms/Button'
import { Icon } from 'components/atoms/Icon'

describe('<SearchInput /> component render tests', () => {
  test('should render a default Button component in the document', () => {
    render(
      <ThemeContext themeMode="light">
        <Button testId="submit-button">Submit</Button>
      </ThemeContext>
    )
    const defaultButton = screen.getByTestId('submit-button')
    expect(defaultButton).toBeInTheDocument()

    const defaultButtonText = screen.getByText('Submit')
    expect(defaultButtonText).toBeInTheDocument()
  })

  test('should startIcon and endIcon elements', () => {
    const LeftIcon = <Icon iconName="fa-download" testId="left-icon" />
    const RightIcon = <Icon iconName="fa-download" testId="right-icon" />

    render(
      <ThemeContext themeMode="light">
        <Button
          testId="button-with-icon"
          startIcon={LeftIcon}
          endIcon={RightIcon}
        >
          Submit
        </Button>
      </ThemeContext>
    )

    const buttonRoot = screen.getByTestId('button-with-icon')
    expect(buttonRoot).toBeInTheDocument()

    const leftIcon = screen.getByTestId('left-icon')
    const rightIcon = screen.getByTestId('right-icon')

    expect(leftIcon).toBeInTheDocument()
    expect(rightIcon).toBeInTheDocument()
  })
})

describe('<SearchInput /> component event listener test', () => {
  test('should invoke the onClick function', () => {
    const onClickMock = jest.fn()

    render(
      <ThemeContext themeMode="light">
        <Button testId="click-button" onClick={onClickMock}>
          Click
        </Button>
      </ThemeContext>
    )
    const buttonRoot = screen.getByTestId('click-button')
    fireEvent.click(buttonRoot)
    expect(onClickMock).toHaveBeenCalledTimes(1)
  })
})
