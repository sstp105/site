import styled, { css } from 'styled-components'
import { style } from 'components/molecules/Paper/style'
import { IDefaultProps, IProps } from 'components/molecules/Paper/type'

const StyledPaper = styled.div<IProps>`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 300px;
  min-height: 300px;
  padding: 40px 30px;
  background-color: white;
  transition: all 0.3s ease 0s;
  border-radius: 20px;
  margin-bottom: 40px;
  &:hover {
    transform: translate3d(0, -10px, 0);
  }

  ${(props) =>
    props.square &&
    css`
      border-radius: 0;
    `}

  ${(props) => style.variant[props.variant]}
`

export const Paper: React.FC<IProps> = (props) => {
  const { children, ...themeProps } = props

  return <StyledPaper {...themeProps}>{children}</StyledPaper>
}

const defaultProps: IDefaultProps = {
  variant: 'elevation',
  square: false
}

Paper.defaultProps = defaultProps
