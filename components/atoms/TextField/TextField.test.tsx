import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import { Theme } from 'styles'
import { TextField } from 'components/atoms/TextField'
import { IProps } from 'components/atoms/TextField/TextField.type'

const inputDefaultProps: IProps = {
  type: 'text',
  name: 'fullName',
  value: '',
  required: true
}

describe('<TextField /> component render test', () => {
  test('should render the TextField component', () => {
    render(
      <Theme themeMode="light">
        <TextField
          testId="input-root"
          inputTestId="default-input"
          {...inputDefaultProps}
          onChange={() => {}}
        />
      </Theme>
    )

    const defaultInputRoot = screen.getByTestId('input-root')
    const defaultInput = screen.getByTestId('default-input')

    expect(defaultInputRoot).toBeInTheDocument()
    expect(defaultInput).toBeInTheDocument()
  })
})
