import { SizeBase } from 'types/Size'

/**
 * @interface IThemeProps Button component theme variant
 */
export interface IThemeProps {
  /**
   * The variant of the button
   * @type {contained} - Button with primary background
   * @type {outlined} - Button with transparent backgroud and primary border
   * @type {text} - Button with text only
   */
  variant: 'contained' | 'outlined' | 'text'

  /**
   * The size of the button with respected padding, height, width..etc
   * @type {s} - small
   * @type {m} - medium
   * @type {l} - large
   */
  size: SizeBase

  /**
   * Fill all the space with its container
   * @type {boolean} default to false
   */
  fullWidth: boolean

  /**
   * The vertical margin of the Button
   * @type {number} unit with pixel (px)
   */
  verticalSpace: number
}

/**
 * @interface IDefaultProps Button component optional props (with default values set)
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * Enable the start icon
   * @type {ReactNode} <Icon /> component, locate in the left,
   */
  startIcon: React.ReactNode

  /**
   * Enable the end icon
   * @type {ReactNode} <Icon /> component, locate after the text.
   */
  endIcon: React.ReactNode

  /**
   * Button onclick event listener
   * @type {() => void} noop
   */
  onClick: () => void

  /**
   * data-testid attribute for Unit Test
   * @type {string}
   */
  testId: string

  /**
   * Pass className to DOM element (for styling component)
   * @type {string}
   */
  className: string
}

/**
 * @interface IProps Button component required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * Button content
   */
  children: React.ReactNode
}

/**
 * Props that does not need to have a default value
 */
export type PropsToOmit = 'className' | 'testId'
