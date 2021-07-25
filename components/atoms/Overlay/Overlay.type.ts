/**
 * @interface IThemeProps Overlay theme props
 */
export interface IThemeProps {}

/**
 * @interface IDefaultProps Overlay optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit test
   */
  testId: string
}

/**
 * @interface IProps Overlay requried props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * Overlay toggler
   */
  onClose: () => void
}

export type PropsToOmit = 'testId'
