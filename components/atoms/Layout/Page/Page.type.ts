/**
 * @interface IThemeProps Page container style props
 */
export interface IThemeProps {
  /**
   * The max-width of the container
   */
  width: number

  /**
   * Apply margin-bottom
   */
  margin: number
}

/**
 * @interface IDefaultProps Page container optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit tests
   */
  testId: string
}

/**
 * @interface IProps Page container requried props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * Page container children elements
   */
  children: React.ReactNode
}

/**
 * Default props to omit
 */
export type PropsToOmit = 'testId'
