/**
 * @interface IThemeProps Chip theme props
 */
export interface IThemeProps {
  /**
   * The distance between the icon the the text
   * @type {number} unit as pixel (px). e.g 15 -> 15px
   */
  space: number

  /**
   * Enbale chip border raidus, false will be sharpe edge
   */
  rounded: boolean

  /**
   * Chip size
   */
  size: 'small' | 'normal' | 'large'

  /**
   * Chip variant
   * @type {default}
   * @type {outlined}
   * @type {text}
   */
  variant: 'default' | 'outlined' | 'contained'

  /**
   * Enable hover animation for the chip
   */
  hoverable: boolean
}

export interface IDefaultProps extends IThemeProps {
  /**
   * Font-awesome icon className
   * @type {string} valid font-awesome 5 icon name
   */
  icon: string

  /**
   * data-testid for unit test
   */
  testId: string

  /**
   * Chip icon test id
   */
  iconTestId: string
}

export interface IProps extends Partial<IDefaultProps> {
  /**
   * Chip label
   */
  label: string
}

export type PropsToOmit = 'testId' | 'icon' | 'iconTestId'
