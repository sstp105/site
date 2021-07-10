import React from 'react'
import styled from 'styled-components'

const StyledWelcomeChip = styled.p`
  color: ${({ theme }) => theme.colors.secondary};
  background-color: ${({ theme }) => theme.colors.primary};
  width: fit-content;
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px 35px 35px 0px;
`

interface IProps {
  content: string
}

export const WelcomeChip: React.FC<IProps> = (props) => {
  const { content } = props
  return <StyledWelcomeChip>{content}</StyledWelcomeChip>
}
