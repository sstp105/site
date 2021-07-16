export interface IThemeProps {
  variant: 'elevation' | 'outlined'
  square: boolean
}

export interface IDefaultProps extends IThemeProps {}

export interface IProps extends Partial<IDefaultProps> {
  children: React.ReactNode
}
