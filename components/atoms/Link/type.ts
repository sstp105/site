export interface IDefaultProps {
  variant: 'default' | 'navigation' | 'social'
}

export interface IProps extends Partial<IDefaultProps> {
  href: string
  children: React.ReactNode
}
