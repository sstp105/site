import React from 'react'
import styled, { css } from 'styled-components'

export interface IDefaultProps {
  verticalSpace: string
  horizontalSpace: string
}

export interface IProps extends Partial<IDefaultProps> {}

const StyledSpacer = styled.div<IProps>`
  width: ${(props) => props.horizontalSpace};
  height: ${(props) => props.verticalSpace};
  background-color: 'red';
`

export const Spacer: React.FC<IProps> = (props) => {
  return <StyledSpacer {...props}></StyledSpacer>
}

const defaultProps: IDefaultProps = {
  verticalSpace: '30px',
  horizontalSpace: '100%'
}

Spacer.defaultProps = defaultProps
