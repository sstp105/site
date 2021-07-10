import React from 'react'
import { IProps } from 'components/atoms/Icon/type'

// TODO: As icon use font-awesome classname for icon name
// There will be collasion with styled-components and className
// currently use otherStyle as prop
export const Icon: React.FC<IProps> = (props) => {
  const { iconName, otherStyles } = props

  return <i className={iconName} css={otherStyles} />
}
