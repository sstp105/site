import React from 'react'
import { renderWithTheme } from 'libs/utils/renderWithTheme'
import { Form, IBaseFormProps } from 'components/organisms/Form'
import { screen, fireEvent } from '@testing-library/react'

const formProps: IBaseFormProps = {
  data: {
    firstName: {
      label: 'First Name',
      type: 'text',
      required: true,
      value: ''
    },
    lastName: {
      label: 'Last Name',
      type: 'text',
      required: true,
      value: ''
    }
  }
}

describe('Organisms: <Form /> component render tests', () => {
  test('Test case 1: should be able to change input value correctly', () => {
    renderWithTheme(<Form {...formProps} />)

    const firstNameInput = screen.getByPlaceholderText(
      'First Name'
    ) as HTMLInputElement
    fireEvent.change(firstNameInput, { target: { value: 'Yang' } })
    expect(firstNameInput.value).toBe('Yang')

    const lastNameInput = screen.getByPlaceholderText(
      'Last Name'
    ) as HTMLInputElement
    fireEvent.change(lastNameInput, { target: { value: 'Li' } })
    expect(lastNameInput.value).toBe('Li')
  })

  test('Test case 2: should be able to discard input values', () => {
    renderWithTheme(<Form {...formProps} />)

    const firstNameInput = screen.getByPlaceholderText(
      'First Name'
    ) as HTMLInputElement
    fireEvent.change(firstNameInput, { target: { value: 'Yang' } })
    expect(firstNameInput.value).toBe('Yang')

    // discard
    fireEvent.change(firstNameInput, { target: { value: '' } })
    expect(firstNameInput.value).toBe('')
  })
})
