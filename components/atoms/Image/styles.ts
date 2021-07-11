import { css } from 'styled-components'

const roundedVariant = css`
  border-radius: 15px;
`

const circleVariant = css`
  border-radius: 50%;
`

export const styles = {
  variant: {
    rounded: roundedVariant,
    circle: circleVariant
  }
}
