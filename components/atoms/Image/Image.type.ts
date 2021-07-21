/**
 * @interface IThemeProps Image theme props
 */
export interface IThemeProps {
  /**
   * @type {circle} Image with circle shape
   * @type {rounded} Image with default border radius
   * @type {square} Image with sharp edge
   *
   */
  variant: 'circle' | 'rounded' | 'square'

  /**
   * @type {cover} Clipped to fit while keeping the aspect ratio
   * @type {contain} Resized while keeping the aspect ratio
   */
  cover: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'

  /**
   * @type {boolean} Enable shadow
   */
  shadow: boolean

  /**
   * @type {string} Default to 100%
   */
  width: string

  /**
   * @type {string} Default to 100%
   */
  height: string
}

/**
 * @interface IDefaultProps Image optional props
 */
export interface IDefaultProps extends IThemeProps {}

/**
 * @interface IProps Image required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * @type {string} Image source
   */
  src: string

  /**
   * @type {string} Image alt attribute value
   */
  alt: string
}
