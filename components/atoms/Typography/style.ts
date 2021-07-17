import { css } from 'styled-components'

const HeadlineOne = css`
  font-family: Gilroy-Light;
  font-size: 96px;
  letter-spacing: -1.5px;
`

const HeadlineTwo = css`
  font-family: ${({ theme }) => theme.font.family.gilroy_regular};
  font-size: 65px;
  letter-spacing: 4px;
`

const HeadlineThree = css`
  font-family: Gilroy-Regular;
  font-size: 48px;
  letter-spacing: 0px;
`

const HeadlineFour = css`
  font-family: Gilroy-Regular;
  font-size: 34px;
  letter-spacing: 0.25px;
`

const HeadlineFive = css`
  font-family: Gilroy-Regular;
  font-size: 24px;
  letter-spacing: 0px;
`

const HeadlineSix = css`
  font-family: Gilroy-Regular;
  font-size: 20px;
  letter-spacing: 0.15px;
`

const Body = css`
  font-family: Gilroy-Regular;
  font-size: 16px;
  letter-spacing: 0.5px;
  line-height: 1.7rem;
`

const Overline = css`
  font-size: 18px;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`

const Caption = css`
  font-family: Gilroy-Regular;
  font-size: 18px;
`

export const styles = {
  h1: HeadlineOne,
  h2: HeadlineTwo,
  h3: HeadlineThree,
  h4: HeadlineFour,
  h5: HeadlineFive,
  h6: HeadlineSix,
  body: Body,
  overline: Overline,
  caption: Caption
}
