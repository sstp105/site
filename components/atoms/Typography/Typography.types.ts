import { Colors } from 'types/Color'

/**
 * @interface IThemeProps Typography theme props
 */
export interface IThemeProps {
  /**
   * @type {h1-h6} Matches HTML heading elements
   * @type {subtitle, body, caption, overline, note} Use p element tag with different styles
   */
  variant:
    | 'h1'
    | 'h2'
    | 'h3'
    | 'h4'
    | 'h5'
    | 'h6'
    | 'subtitle'
    | 'body'
    | 'caption'
    | 'overline'
    | 'note'

  /**
   * TODO: color应该match priamry, secondary, action等而不是所有可用的颜色
   * @type {Colors} The color for the typography
   */
  color: Colors

  /**
   * @type {boolean} Enable margin, default 20px
   */
  margin: boolean

  /**
   * Reference css display properties
   */
  display: 'initial' | 'block' | 'inline'

  /**
   * Reference css align properties
   */
  align: 'inherit' | 'left' | 'center' | 'right' | 'justify'

  /**
   * Reference css transform properties
   */
  transform:
    | 'capitalize'
    | 'lowercase'
    | 'uppercase'
    | 'none'
    | 'inherit'
    | 'initial'
    | 'unset'
}

/**
 * @interface IDefaultProps Typography optional props
 */
export interface IDefaultProps extends IThemeProps {}

/**
 * @interface IProps Typography required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * @type {ReactNode} Typography content
   */
  children: React.ReactNode
}
