/**
 * @interface IThemeProps HamburgerMenu theme props
 */
export interface IThemeProps {
  /**
   * Check if the Hamburger has been pressed to toggle different styles
   */
  active: boolean
}

/**
 * @interface IDefaultProps HamburgerMenu optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit test
   */
  testId: string
}

/**
 * @interface IProps HamburgerMenu required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * HamburgerMeun onClick handler
   */
  onClick: () => void
}

export type PropsToOmit = 'testId'
