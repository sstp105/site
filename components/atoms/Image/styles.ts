import { css } from 'styled-components'

const Round = css`
  border-radius: 15px;
`

const Circle = css`
  border-radius: 50%;
`

const Shadow = css`
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`

export const styles = {
  variant: {
    rounded: Round,
    circle: Circle
  },
  shadow: Shadow
}
