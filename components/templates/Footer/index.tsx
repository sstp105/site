import { Typography } from 'components/atoms/Typography'
import { FOOTER } from 'libs/constants/text'
import styled from 'styled-components'

const StyledFooter = styled.footer`
  margin: 0;
  padding: 15px;
  text-align: center;
  background-color: ${(props) => props.theme.color.surface};
  ${(props) => props.theme.shadow.normal};

  p {
    font-size: 12px;
  }
`

export const Footer: React.FC = () => {
  return (
    <StyledFooter>
      <Typography margin={false}>{FOOTER}</Typography>
    </StyledFooter>
  )
}
