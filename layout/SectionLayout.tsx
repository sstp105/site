/**
 * Section layout wrapper for horizontal center display
 */
import styled, { CSSProp, CSSObject } from 'styled-components'
import React from 'react'

const StyledFlexLayout = styled.div<IProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  ${(props) => props.otherStyles}
`

interface IProps {
  children: React.ReactNode
  className?: string
  otherStyles?: CSSObject | CSSProp
}

export const FlexLayout: React.FC<IProps> = (props) => {
  const { children } = props
  return <StyledFlexLayout {...props}>{children}</StyledFlexLayout>
}
