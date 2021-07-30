import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0;
  padding: 30px;
  text-align: center;
  font-size: 12px;
  color: ${(props) => props.theme.color.default};
  background-color: ${(props) => props.theme.color.surface};
  ${(props) => props.theme.shadow.normal};
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>DESIGNED BY YANG LI @ 2019-2021</p>
    </StyledFooter>
  )
}
