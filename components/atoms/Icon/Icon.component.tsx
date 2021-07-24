import { Styled } from 'components/atoms/Icon/Icon.style'
import {
  IDefaultProps,
  IProps,
  PropsToOmit
} from 'components/atoms/Icon/Icon.type'

export const Icon: React.FC<IProps> = (props) => {
  const { iconName, testId, ...themeProps } = props

  return (
    <Styled.IconRoot
      className={iconName}
      data-testid={testId}
      {...themeProps}
    />
  )
}

const defaultProps: Omit<IDefaultProps, PropsToOmit> = {
  color: 'default',
  size: 'xxs'
}

Icon.defaultProps = defaultProps
