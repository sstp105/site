import React from 'react'
import styled from 'styled-components'
import { IDefaultProps, IProps } from 'components/atoms/Spacer/Spacer.type'

const StyledSpacer = styled.div<IProps>`
  width: ${(props) => props.horizontalSpace};
  height: ${(props) => props.verticalSpace};

  background-color: purple;
`

export const Spacer: React.FC<IProps> = (props) => {
  return <StyledSpacer {...props}></StyledSpacer>
}

const defaultProps: IDefaultProps = {
  verticalSpace: '30px',
  horizontalSpace: '100%'
}

Spacer.defaultProps = defaultProps
