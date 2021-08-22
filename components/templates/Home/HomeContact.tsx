import React from 'react'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { Form } from 'components/organisms/Form'
import { IForm } from 'types/html/Input'

export const initContactFormState: IForm = {
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
  },
  phoneNumber: {
    label: 'Phone Number',
    type: 'tel',
    required: false,
    value: ''
  },
  email: {
    label: 'Email',
    type: 'email',
    required: true,
    value: ''
  }
}

export const HomeContact: React.FC = () => {
  return (
    <>
      <SectionHeader title="Contact Me" subtitle="Talk with me." />
      <Form data={initContactFormState} />
    </>
  )
}
