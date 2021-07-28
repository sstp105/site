import styled from 'styled-components'
import { IThemeProps } from 'components/atoms/Spacer/Spacer.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const Spacer = styled.div<Partial<IThemeProps>>`
  width: ${(props) => props.horizontalSpace};
  height: ${(props) => props.verticalSpace};

  ${(props) => props.theme.media.tablet_sm} {
    height: 100px;
  }
`

export const Styled = {
  Spacer
}
