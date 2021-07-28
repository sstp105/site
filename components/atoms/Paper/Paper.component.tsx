import { Styled } from 'components/atoms/Paper/Paper.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Paper/Paper.type'

export const Paper: React.FC<IProps> = (props) => {
  const { children, testId, ...themeProps } = props

  return (
    <Styled.Paper data-testid={testId} {...themeProps}>
      {children}
    </Styled.Paper>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  variant: 'elevation',
  square: false,
  width: '300px',
  height: '300px'
}

Paper.defaultProps = defaultProps
