import { HTMLInputType } from 'types/Input'

/**
 * @interface IThemeProps component variant style props
 */
export interface IThemeProps {
  size: 'small' | 'medium' | 'large'
  fullWidth: boolean
}

/**
 * @interface IDefaultProps component optional props
 */
export interface IDefaultProps extends IThemeProps {
  placeholder: string
  autocomplete: 'on' | 'off'
}

/**
 * @interface IProps component required props
 */
export interface IProps extends Partial<IDefaultProps> {
  type: HTMLInputType
  name: string
  value: string
  required: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}
