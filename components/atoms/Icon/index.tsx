import React from 'react'
import { IProps } from 'components/atoms/Icon/type'

/**
 * Render Font-awesome icon
 * @iconName font-awesome className
 */
export const Icon: React.FC<IProps> = (props) => {
  const { iconName } = props

  return <i className={iconName} />
}
