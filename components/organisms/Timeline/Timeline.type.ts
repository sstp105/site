/**
 * @interface IThemeProps
 */
export interface IThemeProps {
  float: 'left' | 'right'
}

/**
 * @interface IProps Timeline data
 */
export interface IProps<T> {
  data: Array<T>
}
