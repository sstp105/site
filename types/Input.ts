export type HTMLInputType =
  | 'text'
  | 'email'
  | 'tel'
  | 'checkbox'
  | 'button'
  | 'color'
  | 'file'
  | 'number'
  | 'password'

export interface IInputProps {
  name: string
  label: string
  type: HTMLInputType
  required: boolean
  value: string
}

export interface IForm {
  [key: string]: IInputProps
}
