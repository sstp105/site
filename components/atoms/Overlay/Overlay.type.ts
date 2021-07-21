/**
 * @interface IThemeProps Overlay theme props
 */
export interface IThemeProps {}

/**
 * @interface IDefaultProps Overlay optional props
 */
export interface IDefaultProps extends IThemeProps {}

/**
 * @interface IProps Overlay requried props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * @type {boolean} Disply/Hide the overlay modal
   */
  open: boolean

  /**
   * @type {() => void} Overlay toggle handlder
   */
  onClose: () => void
}
