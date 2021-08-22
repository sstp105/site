import { useState } from 'react'
import { IForm, onChangeEvent } from 'types/html/Input'

/**
 * Flat form state update hooks
 */
export const useBaseForm = <T>(initFromData: T) => {
  const [formData, setFormData] = useState(initFromData)

  const updateFormData = (e: onChangeEvent) => {
    const { name, value } = e.target

    setFormData({
      ...formData,
      [name]: {
        ...formData[name],
        value: value
      }
    })
  }

  return { formData, updateFormData }
}
