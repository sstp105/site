import React from 'react'
import styled from 'styled-components'

const StyledDivider = styled.hr`
  border: 0;
  height: 1px;
  background: ${(props) => props.theme.color.border_base};
  margin: 40px 0;
`

export const Divider: React.FC = () => {
  return <StyledDivider />
}
