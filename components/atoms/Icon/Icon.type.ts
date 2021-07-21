import { SizeBase } from 'types/Size'

/**
 * @interface IThemeProps Icon theme props
 */
export interface IThemeProps {
  color: 'inherit' | 'primary' | 'secondary' | 'action' | 'error' | 'disabled'
  size: SizeBase
}

/**
 * @interface IDefaultProps Icon optional props
 */
export interface IDefaultProps extends IThemeProps {}

/**
 * @interface IProps Icon required props
 */
export interface IProps extends Partial<IDefaultProps> {
  iconName: string
}
