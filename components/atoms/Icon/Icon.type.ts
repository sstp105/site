import { SizeLarge } from 'types/design/Size'
import { Colors } from 'types/design/Color'

/**
 * @interface IThemeProps Icon component variant props
 */
export interface IThemeProps {
  /**
   * Icon color
   * @type {Colors} default | primary | secondary | action | error | disabled
   */
  color: Colors

  /**
   * Icon size, match Typography font size
   * @type {SizeLarge} xxs | xs | s | m | l | xl | xxl
   */
  size: SizeLarge
}

/**
 * @interface IDefaultProps Icon component optional props
 */
export interface IDefaultProps extends IThemeProps {
  /**
   * data-testid attribute for Unit Test
   */
  testId: string

  onClick: () => void
}

/**
 * @interface IProps Icon required props
 */
export interface IProps extends Partial<IDefaultProps> {
  /**
   * font-awesome supported icon name. e.g. fa-envelope
   */
  iconName: string
}

/**
 * Icon props that does not need to have default value
 */
export type PropsToOmit = 'testId' | 'onClick'
