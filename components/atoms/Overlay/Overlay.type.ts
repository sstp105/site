/**
 * @interface IThemeProps Overlay theme props
 */
export interface IThemeProps {
  /**
   * True the overlay will fiit the whole screen, otherwise fit its parent container
   */
  fullSize: boolean
}

/**
 * @interface IDefaultProps Overlay optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit test
   */
  testId: string

  /**
   * Overlay toggler
   */
  onClose: () => void
}

/**
 * @interface IProps Overlay requried props
 */
export interface IProps extends Partial<IDefaultProps> {}

export type PropsToOmit = 'testId'
