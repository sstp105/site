import styled, { css } from 'styled-components'
import { style } from 'components/atoms/Icon/Icon.style'
import {
  IThemeProps,
  IDefaultProps,
  IProps
} from 'components/atoms/Icon/Icon.type'

const StyledIcon = styled.i<Partial<IThemeProps>>`
  /* ${(props) => style.color[props.color]} */
  ${(props) => style.size[props.size]}
`

export const Icon: React.FC<IProps> = (props) => {
  const { iconName, ...themeProps } = props

  return <StyledIcon className={iconName} {...themeProps} />
}

const defaultProps: IDefaultProps = {
  color: 'inherit',
  size: 's'
}

Icon.defaultProps = defaultProps
