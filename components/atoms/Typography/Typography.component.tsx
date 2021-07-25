import { Styled } from 'components/atoms/Typography/Typography.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Typography/Typography.types'

export const Typography: React.FC<IProps> = (props) => {
  const { children, testId, ...themeProps } = props
  const { variant } = themeProps

  // non-HTML tag name convert to p element
  const HTMLElements = ['h1', 'h2', 'h3', 'h4', 'h5', 'h6']
  const variantElement = HTMLElements.includes(variant) ? variant : 'p'

  return (
    <Styled.TypographyRoot
      as={variantElement}
      data-testid={testId}
      {...themeProps}
    >
      {children}
    </Styled.TypographyRoot>
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  variant: 'body',
  display: 'block',
  align: 'inherit',
  margin: true,
  transform: 'none'
}

Typography.defaultProps = defaultProps
