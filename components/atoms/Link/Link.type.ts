/**
 * @interface IThemeProps Link theme props
 */
export interface IThemeProps {
  /**
   * @type {default} Default link without underline
   * @type {navigation} Navigation link style
   * @type {social} Social link with hovered scale animation
   */
  variant: 'default' | 'navigation' | 'social'
}

/**
 * @interface IDefaultProps Link optional props
 */
export interface IDefaultProps extends IThemeProps {}

/**
 * @interface IProps Link requried props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * @type {string} Link href attribute
   */
  href: string

  /**
   * @type {ReactNode} Link content
   */
  children: React.ReactNode
}
