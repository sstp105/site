import styled from 'styled-components'

const StyledPage = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  border: 1px solid red;
`

export interface IProps {
  children: React.ReactNode
}

export const Page: React.FC<IProps> = (props) => {
  const { children } = props

  return <StyledPage>{children}</StyledPage>
}