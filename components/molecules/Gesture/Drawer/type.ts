export interface IDefaultProps {
  anchor: 'left' | 'right'
  variant: 'square' | 'round'
}

export interface IProps extends Partial<IDefaultProps> {
  children: React.ReactNode
  open: boolean
  onClose: () => void
}
