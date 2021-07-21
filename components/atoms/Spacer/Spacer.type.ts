/**
 * @interface IDefaultProps Spacer optional props
 */
export interface IDefaultProps {
  /**
   * @type {verticalSpace} The height of the spacer
   */
  verticalSpace: string

  /**
   * @type {horizontalSpace} The width of the space
   */
  horizontalSpace: string
}

export interface IProps extends Partial<IDefaultProps> {}
