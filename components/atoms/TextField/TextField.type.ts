import { HTMLInputType } from 'types/Input'

/**
 * @interface IThemeProps TextField component theme related props
 */
export interface IThemeProps {
  /**
   * TextFied size variant
   * @type {small}
   * @type {medium} Default
   * @type {large}
   */
  size: 'small' | 'medium' | 'large'

  /**
   * Fill all the space of its container if true
   */
  fullWidth: boolean
}

/**
 * @interface IDefaultProps TextField optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * Input placeholder
   */
  placeholder: string

  /**
   * Enable input auto-complete
   */
  autocomplete: 'on' | 'off'

  /**
   * Input value change listener
   */
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void

  /**
   * data-testid for unit test
   */
  testId: string

  /**
   * Input target value test
   */
  inputTestId: string
}

/**
 * @interface IProps TextField required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * Input type. e.g. email, password, text...
   * @type {HTMLInputType}
   */
  type: HTMLInputType

  /**
   * Input name
   */
  name: string

  /**
   * Input value
   */
  value: string

  /**
   * Input value are required for form submit if true
   */
  required: boolean
}

export type PropsToOmit = 'testId' | 'inputTestId' | 'onChange'
