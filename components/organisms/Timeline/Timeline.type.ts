/**
 * @interface IExperience
 */
export interface IExperience {
  title: string
  company: string
  startDate: string
  endDate: string
  description: string
}

/**
 * @interface IThemeProps
 */
export interface IThemeProps {
  float: 'left' | 'right'
}

/**
 * @interface IProps Timeline data
 */
export interface IProps {
  data: Array<IExperience>
}
