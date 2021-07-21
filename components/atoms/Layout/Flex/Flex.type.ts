/**
 * @interface IThemeProps Flex layout theme props
 */
export interface IThemeProps {
  /**
   * Reference: css flex layout justify
   */
  justify:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'

  /**
   * Reference: css flex layout align
   */
  align: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'

  /**
   * @type {boolean} Enable shadow for the sheet
   */
  shadow: boolean

  /**
   * @type {string} Height of the container
   */
  height: string

  /**
   * @type {string} Width of the container
   */
  width: string
}

/**
 * @interface IDefaultProps Flex layout optional props
 */
export interface IDefaultProps extends IThemeProps {}

/**
 * @interface IProps Flex requried props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * @type {ReactNode} Need at least one element
   */
  children: React.ReactNode
}
