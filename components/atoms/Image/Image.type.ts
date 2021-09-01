/**
 * @interface IThemeProps Image theme props
 */
export interface IThemeProps {
  /**
   * Image vartiant
   * @type {circle} Circle shape
   * @type {rounded} Default border radius
   * @type {square} Sharp edge
   */
  variant: 'circle' | 'rounded' | 'square'

  /**
   * CSS object-fit attributes
   * https://developer.mozilla.org/en-US/docs/Web/CSS/object-fit
   * @type {cover} Clipped to fit while keeping the aspect ratio
   * @type {contain} Resized while keeping the aspect ratio
   * @type {fill} The replaced content is sized to fill the element’s content box
   * @type {none} The replaced content is not resized
   * @type {scale-down} The content is sized as if none or contain were specified, whichever would result in a smaller concrete object size
   */
  cover: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down'

  /**
   * Enable default shadow around the images
   */
  shadow: boolean

  /**
   * Image width
   */
  width: string

  /**
   * Image height
   */
  height: string
}

/**
 * @interface IDefaultProps Image optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid for unit tests
   */
  testId: string

  /**
   * className for additional styling
   */
  className: string

  onClick: () => void
}

/**
 * @interface IProps Image required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * Image source
   */
  src: string

  /**
   * Image alt attribute value
   */
  alt: string
}

/**
 * Image component props to omit for defaultProps value init
 */
export type PropsToOmit = 'testId' | 'className' | 'onClick'
