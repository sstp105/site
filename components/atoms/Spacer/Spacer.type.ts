export interface IThemeProps {
  /**
   * @type {verticalSpace} The height of the spacer
   */
  verticalSpace: string

  /**
   * @type {horizontalSpace} The width of the space
   */
  horizontalSpace: string
}

/**
 * @interface IDefaultProps Spacer optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit test
   */
  testId: string
}

/**
 * @interface IProps Spacer required props
 */
export interface IProps extends Partial<IDefaultProps> {}

export type PropsToOmit = 'testId'
