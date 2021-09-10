import { Typography } from 'components/atoms/Typography'
import { FOOTER } from 'libs/constants/text'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0;
  padding: 20px;
  text-align: center;
  font-size: 12px;
  background-color: ${(props) => props.theme.color.surface};
  ${(props) => props.theme.shadow.normal};
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Typography margin={false}>{FOOTER}</Typography>
    </StyledFooter>
  )
}
