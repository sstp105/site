import React from 'react'
import styled from 'styled-components'
import { TextField } from 'components/atoms/TextField'
import { Button } from 'components/atoms/Button'
import { IForm } from 'types/html/Input'
import { useBaseForm } from 'libs/hooks/useBaseForm'

const StyledForm = styled.div`
  max-width: 768px;
  margin: 0 auto;
`

export interface IBaseFormProps {
  data: IForm
  callback?: <T>(formData: T) => void
}

export const Form: React.FC<IBaseFormProps> = (props) => {
  const { data, callback } = props
  const { formData, updateFormData } = useBaseForm(data)

  const handleSubmitForm = () => {
    if (callback) {
      callback(formData)
    } else {
      console.log(formData)
    }
  }

  const inputList = Object.keys(formData).map((elem) => {
    const { type, value, required, label } = formData[elem]
    return (
      <React.Fragment key={elem}>
        <TextField
          type={type}
          name={elem}
          value={value}
          required={required}
          placeholder={label}
          onChange={(e) => updateFormData(e)}
        />
      </React.Fragment>
    )
  })

  return (
    <StyledForm>
      {inputList}
      <Button
        variant="contained"
        size="l"
        fullWidth
        onClick={handleSubmitForm}
        verticalSpace={30}
      >
        Submit
      </Button>
    </StyledForm>
  )
}
