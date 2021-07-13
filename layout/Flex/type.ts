export interface IDefaultProps {
  justify:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  align: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
  shadow: boolean
  height: string
  width: string
}

export interface IProps extends Partial<IDefaultProps> {
  children: React.ReactNode
}
