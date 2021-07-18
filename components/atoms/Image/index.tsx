import React from 'react'
import styled from 'styled-components'
import { styles } from 'components/atoms/Image/styles'
import { IDefaultProps, IProps } from 'components/atoms/Image/type'

const StyledImage = styled.img<IProps>`
  display: block;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.cover};

  ${(props) => props.shadow && props.theme.shadow.normal}

  ${(props) => styles.variant[props.variant]}
`

export const Image: React.FC<IProps> = (props) => {
  return <StyledImage {...props} />
}

const defaultProps: IDefaultProps = {
  width: '100%',
  height: 'auto',
  cover: 'cover',
  variant: 'rounded',
  shadow: false,
  onClick: () => null
}

Image.defaultProps = defaultProps
