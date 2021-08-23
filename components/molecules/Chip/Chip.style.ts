import styled, { css } from 'styled-components'
import { IThemeProps } from 'components/molecules/Chip/Chip.type'
/* -------------------------------------------------------------------------- */
/*                               Styled Elements                              */
/* -------------------------------------------------------------------------- */
const Chip = styled.div<Partial<IThemeProps>>`
  display: flex;
  align-items: center;
  width: fit-content;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animation.duration.normal};

  & > i {
    margin-right: ${(props) => props.space}px;
  }

  ${(props) =>
    props.rounded &&
    css`
      border-radius: 25px;
    `}

  ${(props) =>
    props.hoverable &&
    css`
      &:hover {
        opacity: 0.5;
      }
    `}
  ${(props) => styles.size[props.size]}
  ${(props) => styles.variant[props.variant]}
`

export const Styled = {
  Chip
}
/* -------------------------------------------------------------------------- */
/*                                   Styles                                   */
/* -------------------------------------------------------------------------- */
export const styles = {
  /**
   * variant
   * default | outlined
   */
  variant: {
    default: css`
      color: ${({ theme }) => theme.color.default};
      padding-left: 0;
      padding-right: 0;
      & > i {
        color: ${({ theme }) => theme.color.default};
      }
    `,
    outlined: css`
      border: 1px solid ${(props) => props.theme.color.primary};
      color: ${({ theme }) => theme.color.primary};
      & > i {
        color: ${({ theme }) => theme.color.primary};
      }
    `,
    contained: css`
      color: ${({ theme }) => theme.color.secondary};
      background-color: ${({ theme }) => theme.color.primary};
      & > i {
        color: ${({ theme }) => theme.color.secondary};
      }
    `
  },
  /**
   * size
   */
  size: {
    small: css`
      font-size: 13px;
      padding: 8px 10px;
    `,
    normal: css`
      font-size: 16px;
      padding: 10px 15px;
    `,
    large: css`
      font-size: 20px;
      padding: 10px 20px;
    `
  }
}
