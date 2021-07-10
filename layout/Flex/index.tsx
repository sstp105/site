import React from 'react'
import styled from 'styled-components'

export interface IProps {
  children: React.ReactNode
  wrap?: boolean
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly'
  align?: 'center' | 'flex-start' | 'flex-end' | 'stretch' | 'baseline'
}

const FlexContainer = styled.div<IProps>`
  display: flex;
  flex-wrap: ${(props) => (props.wrap ? 'wrap' : 'non-wrap')};
  flex-direction: row;
  justify-content: ${(props) => props.justify};
  align-items: ${(props) => props.align};
`

export const Flex: React.FC<IProps> = (props) => {
  const { children } = props

  return <FlexContainer {...props}>{children}</FlexContainer>
}

Flex.defaultProps = {
  wrap: true
}
