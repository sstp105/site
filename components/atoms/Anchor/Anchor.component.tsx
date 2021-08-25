import React from 'react'
import styled, { css } from 'styled-components'
import { Direction } from 'types/style/Direction'

const style = {
  directions: {
    'top-left': css`
      top: 0;
      left: 0;
    `,
    'top-right': css`
      top: 0;
      right: 0;
    `,
    'bottom-left': css`
      bottom: 0;
      left: 0;
    `,
    'bottom-right': css`
      bottom: 0;
      right: 0;
    `
  }
}

export interface IThemeProps {
  position: 'fixed' | 'absolute'
  anchor: Direction
  offset: number
}

export interface IDefaultProps extends IThemeProps {}

export interface IProps extends Partial<IDefaultProps> {}

const StyledAnchor = styled.div<Partial<IThemeProps>>`
  position: ${(props) => props.position};

  ${(props) => style[props.anchor]}
`

export const Anchor: React.FC<IProps> = (props) => {
  return <StyledAnchor {...props}>{props.children}</StyledAnchor>
}

const defaultProps: IDefaultProps = {
  position: 'absolute',
  anchor: 'top-left',
  offset: 0
}

Anchor.defaultProps = defaultProps
