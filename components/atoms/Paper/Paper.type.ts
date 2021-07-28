/**
 * @interface IThemeProps Paper theme props
 */
export interface IThemeProps {
  /**
   * Paper variant
   * @type {elevation} Paper with background color and shadow
   * @type {outlined} Paper with transparent background and solid outline
   */
  variant: 'elevation' | 'outlined'

  /**
   * Sharp edge around the paper if true
   * Default with border-radius
   */
  square: boolean

  /**
   * Paper width
   * @type {string} CSS valid size values. e.g. 30px
   */
  width: string

  /**
   * Paper height
   * @type {string} CSS valid size values. e.g. 50%
   */
  height: string
}

/**
 * @interface IDefaultProps Paper optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit test
   */
  testId: string
}

/**
 * @interface IProps Paper required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * Paper content
   */
  children: React.ReactNode
}

export type PropsToOmit = 'testId'
