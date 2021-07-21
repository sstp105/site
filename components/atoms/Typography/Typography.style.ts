import { css } from 'styled-components'

const headline_one_variant = css`
  font-family: Gilroy-Light;
  font-size: 96px;
  letter-spacing: -1.5px;
`

const headline_two_variant = css`
  font-family: ${({ theme }) => theme.font.family.gilroy_regular};
  font-size: 65px;
  letter-spacing: 4px;
`

const headline_three_variant = css`
  font-family: Gilroy-Regular;
  font-size: 48px;
  letter-spacing: 0px;
`

const headline_four_variant = css`
  font-family: Gilroy-Regular;
  font-size: 34px;
  letter-spacing: 0.25px;
`

const headline_five_variant = css`
  font-family: Gilroy-Regular;
  font-size: 24px;
  letter-spacing: 0px;
`

const headline_six_variant = css`
  font-family: Gilroy-Regular;
  font-size: 20px;
  letter-spacing: 0.15px;
`

const subtitle_variant = css`
  font-family: Gilroy-Medium;
  font-size: 18px;
`

const body_variant = css`
  font-family: Gilroy-Regular;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.7rem;
`

const overline_variant = css`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

const caption_variant = css`
  font-family: Gilroy-Regular;
  font-size: 18px;
`

const note_variant = css`
  font-family: Gilroy-Regular;
  font-size: 14px;
  line-height: 1.3rem;
`

export const styles = {
  variant: {
    h1: headline_one_variant,
    h2: headline_two_variant,
    h3: headline_three_variant,
    h4: headline_four_variant,
    h5: headline_five_variant,
    h6: headline_six_variant,
    subtitle: subtitle_variant,
    body: body_variant,
    overline: overline_variant,
    caption: caption_variant,
    note: note_variant
  }
}
