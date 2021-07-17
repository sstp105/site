import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0;
  padding: 30px;
  text-align: center;
  font-size: 12px;
  color: rgb(237, 236, 236);
  background-color: rgb(31, 31, 31);
`
export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <p>DESIGNED BY YANG LI @ 2019-2021</p>
    </StyledFooter>
  )
}
