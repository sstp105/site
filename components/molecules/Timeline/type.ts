export interface IExperience {
  title: string
  company: string
  startDate: string
  endDate: string
  description: string
}

export interface IThemeProps {
  float: 'left' | 'right'
}

export interface IProps {
  data: Array<IExperience>
}
