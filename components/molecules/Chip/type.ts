export interface IDefaultProps {
  rounded: boolean
  icon: string // Font-awesome icon name
  size: 'small' | 'normal' | 'large'
  variant: 'default' | 'outlined'
  hoverable: boolean
}

export interface IProps extends Partial<IDefaultProps> {
  label: string
}
