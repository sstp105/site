import React from 'react'

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

export type onChangeEvent =
  | React.ChangeEvent<HTMLInputElement>
  | React.ChangeEvent<HTMLTextAreaElement>

export interface IInputProps {
  label: string
  type: HTMLInputType
  required: boolean
  value: string
}

export interface IForm {
  [key: string]: IInputProps
}
