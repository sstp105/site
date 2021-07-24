import styled, { css } from 'styled-components'
import { style } from 'components/atoms/Icon/Icon.style'
import {
  IThemeProps,
  IDefaultProps,
  IProps,
  OmitDefaultProps
} from 'components/atoms/Icon/Icon.type'

const StyledIcon = styled.i<Partial<IThemeProps>>`
  /* ${(props) => style.color[props.color]} */
  ${(props) => style.size[props.size]}
`

export const Icon: React.FC<IProps> = (props) => {
  const { iconName, testId, ...themeProps } = props

  return (
    <StyledIcon className={iconName} data-testid={testId} {...themeProps} />
  )
}

const defaultProps: Omit<IDefaultProps, OmitDefaultProps> = {
  color: 'inherit',
  size: 's'
}

Icon.defaultProps = defaultProps
