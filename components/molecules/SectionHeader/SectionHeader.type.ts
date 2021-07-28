/**
 * @interface IThemeProps SectionHeader theme props
 */
export interface IThemeProps {
  /**
   * Enable margin around the section header
   */
  margin: boolean
}

/**
 * @interface IDefaultProps SectionHeader optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid
   */
  testId: string
}

/**
 * @interface IProps SectionHeader required props
 */
export interface IProps extends Partial<IDefaultProps> {
  title: string
  subtitle: string
}

export type PropsToOmit = 'testId'
