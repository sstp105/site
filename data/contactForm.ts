import { IForm } from 'types/Input'

export const initContactFormState: IForm = {
  firstName: {
    name: 'firstName',
    label: 'First Name',
    type: 'text',
    required: true,
    value: ''
  },
  lastName: {
    name: 'lastName',
    label: 'Last Name',
    type: 'text',
    required: true,
    value: ''
  },
  phoneNumber: {
    name: 'phoneNumber',
    label: 'Phone Number',
    type: 'tel',
    required: false,
    value: ''
  },
  email: {
    name: 'email',
    label: 'Email',
    type: 'email',
    required: true,
    value: ''
  }
}
