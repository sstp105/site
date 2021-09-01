import { Icon } from 'components/atoms/Icon'
import { Typography } from 'components/atoms/Typography'
import React from 'react'
import styled from 'styled-components'

const StyledBreadcrumb = styled.div`
  display: flex;
  margin-bottom: 40px;
  i {
    margin-right: 20px;
  }
`

export const Breadcrumb: React.FC = () => {
  return (
    <StyledBreadcrumb>
      <Icon iconName="fas fa-arrow-alt-circle-left" size="s" color="primary" />
      <Typography margin={false}>/ Projects / ProjectHub</Typography>
    </StyledBreadcrumb>
  )
}
