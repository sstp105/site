/**
 * @interface IThemeProps Drawer theme props
 */
export interface IThemeProps {
  /**
   * Drawer anchor point
   * @type {left} Open drawer from left view point
   * @type {right} Open drawer from right view point
   */
  anchor: 'left' | 'right'

  /**
   * Drawer variant
   * @type {square} Drawer with sharpe edge
   * @type {round} Drawer with default border-radius
   */
  variant: 'square' | 'round'
}

export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit test
   */
  testId: string
}

export interface IProps extends Partial<IDefaultProps> {
  /**
   * Drawer content
   */
  children: React.ReactNode

  /**
   * Draw show state, true will show drawer
   */
  open: boolean

  /**
   * Drawer close hanlder
   */
  onClose: () => void
}

export type PropsToOmit = 'testId'
