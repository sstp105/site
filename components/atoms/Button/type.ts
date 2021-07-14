import { SizeBase } from 'types/Size'

export interface IDefaultProps {
  startIcon: React.ReactNode
  endIcon: React.ReactNode
  fullWidth: boolean
  size: SizeBase
  onClick: () => void
}

export interface IProps extends Partial<IDefaultProps> {
  children: React.ReactNode
  variant: 'contained' | 'outlined' | 'text'
}
