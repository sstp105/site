import { Styled } from 'components/atoms/Page/Page.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Page/Page.type'

export const Page: React.FC<IProps> = (props) => {
  const { children, testId, ...themeProps } = props

  return (
    <Styled.PageRoot data-testid={testId} {...themeProps}>
      {children}
    </Styled.PageRoot>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  width: 'desktop',
  margin: 0
}

Page.defaultProps = defaultProps
