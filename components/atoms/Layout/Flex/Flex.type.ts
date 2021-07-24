/**
 * @interface IThemeProps Flex layout theme props
 */
export interface IThemeProps {
  /**
   * CSS flex justify-content attribute
   * https://developer.mozilla.org/en-US/docs/Web/CSS/justify-content
   */
  justify:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

  /**
   * CSS flex align-items attribute
   * https://developer.mozilla.org/en-US/docs/Web/CSS/align-items
   */
  align: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'

  /**
   * Enable shadow for the sheet
   */
  shadow: boolean

  /**
   * Flex container height
   */
  height: string

  /**
   * Flex container width
   */
  width: string
}

/**
 * @interface IDefaultProps Flex optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit test
   */
  testId: string
}

/**
 * @interface IProps Flex requried props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * Flex container children elements
   */
  children: React.ReactNode
}

export type PropsToOmit = 'testId' | 'width' | 'height'
