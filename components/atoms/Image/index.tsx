import React from 'react'
import styled from 'styled-components'
import { styles } from 'components/atoms/Image/styles'
import { IProps } from 'components/atoms/Image/types'

const StyledImage = styled.img<IProps>`
  display: block;

  width: ${(props) => props.width};
  height: ${(props) => props.height};
  object-fit: ${(props) => props.cover};

  ${(props) => styles.variant[props.variant]}
  ${(props) => props.shadow && styles.shadow}
`

export const Image: React.FC<IProps> = (props) => {
  return <StyledImage {...props} />
}

Image.defaultProps = {
  width: '100%',
  height: '100%',
  cover: 'cover',
  variant: 'rounded'
}
