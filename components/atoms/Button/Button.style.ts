import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/atoms/Button/Button.type'

/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const ButtonRoot = styled.button<Partial<IThemeProps>>`
  // base style
  display: block;
  cursor: pointer;
  font-family: ${({ theme }) => theme.font.family.gilroy_regular};
  background-color: transparent;
  border: none;
  border-radius: 30px;
  transition: all ${({ theme }) => theme.animation.duration.normal};

  & > i:nth-child(1) {
    margin-right: 20px;
  }
  & > i:nth-child(2) {
    margin-left: 20px;
  }

  // variant style
  margin: ${({ verticalSpace }) => verticalSpace}px 0;
  ${({ fullWidth }) =>
    fullWidth &&
    css`
      width: 100%;
    `}
  ${({ variant }) => style.variant[variant]}
  ${({ size }) => style.size[size]}
`

/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */

/* --------------------------------- variant -------------------------------- */
const contained = css`
  background-color: ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.secondary};
  & > i {
    color: ${({ theme }) => theme.color.secondary};
  }
  &:hover {
    opacity: 0.7;
  }
`
const outlined = css`
  border: 1px solid ${({ theme }) => theme.color.primary};
  color: ${({ theme }) => theme.color.primary};
  & > i {
    color: ${({ theme }) => theme.color.primary};
  }
  &:hover {
    background-color: rgba(0, 0, 0, 0.05);
  }
`
const text = css`
  color: ${({ theme }) => theme.color.primary};
  & > i {
    color: ${({ theme }) => theme.color.primary};
  }
  &:hover {
    background-color: #3da4d44b;
  }
`

const variant = { contained, outlined, text }

/* ---------------------------------- size ---------------------------------- */
const s = css`
  font-size: 16px;
  padding: 8px 30px;
`
const m = css`
  font-size: 18px;
  padding: 12px 20px;
`
const l = css`
  font-size: 20px;
  padding: 16px 50px;
`

const size = { s, m, l }

/* -------------------------------------------------------------------------- */
/*                                   Module                                   */
/* -------------------------------------------------------------------------- */
const style = {
  variant,
  size
}

export const Styled = {
  ButtonRoot
}
