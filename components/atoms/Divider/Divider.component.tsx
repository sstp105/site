import React from 'react'
import styled from 'styled-components'

export interface IDividerProps {
  testId?: string
}

export const Divider: React.FC<IDividerProps> = (props) => {
  const { testId } = props

  return <StyledDivider data-testid={testId} />
}

const StyledDivider = styled.hr`
  border: 0;
  height: 1px;
  background: ${(props) => props.theme.color.border_base};
  margin: 40px 0;
`
