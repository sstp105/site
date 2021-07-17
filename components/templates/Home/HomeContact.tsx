import React, { useState } from 'react'
import styled, { css } from 'styled-components'
import { SectionHeader } from 'components/molecules/SectionHeader'
import { TextField } from 'components/atoms/TextField'
import { Button } from 'components/atoms/Button'

const Wrapper = styled.div`
  border: 1px solid purple;
  margin: 0 auto;
  max-width: 1440px;
`

const StyledForm = styled.form`
  max-width: 768px;
  margin: 0 auto;
`

interface IInputState {
  name: string
  label: string
  type:
    | 'text'
    | 'email'
    | 'tel'
    | 'checkbox'
    | 'button'
    | 'color'
    | 'file'
    | 'number'
    | 'password'
  required: boolean
  value: string
}

interface IState {
  [key: string]: IInputState
}

const contactFormState: IState = {
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

export const HomeContact: React.FC = () => {
  const [contact, setContact] = useState<IState>(contactFormState)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target

    setContact((prevState) => ({
      ...prevState,
      [name]: {
        ...prevState[name],
        value: value
      }
    }))
  }

  const handleSubmitForm = () => {
    console.log(contact)
  }

  const inputList = Object.keys(contact).map((elem) => {
    const { name, type, value, required, label } = contact[elem]

    return (
      <React.Fragment key={name}>
        <TextField
          type={type}
          name={name}
          value={value}
          required={required}
          placeholder={label}
          onChange={(e) => handleChange(e)}
        />
      </React.Fragment>
    )
  })

  return (
    <Wrapper id="contact">
      <SectionHeader title="Contact Me" subtitle="Talk with me." />
      <StyledForm>
        {inputList}
        <Button
          variant="contained"
          size="l"
          fullWidth
          onClick={handleSubmitForm}
          css={css`
            margin-top: 30px;
          `}
        >
          Submit
        </Button>
      </StyledForm>
    </Wrapper>
  )
}
