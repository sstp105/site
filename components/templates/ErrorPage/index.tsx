import React from 'react'
import styled from 'styled-components'
import path from 'path'
import fs from 'fs/promises'
import { Image } from 'components/atoms/Image'
import { Seo } from 'components/templates/Seo'
import { Typography } from 'components/atoms/Typography'
import { Flex } from 'components/atoms/Flex'

const StyledFlex = styled(Flex)`
  height: calc(100vh - 75px);
  margin-top: 75px;
  max-width: 1140px;
  margin: 0 auto;
`

export interface IErrorPageTemplateProps {
  title: string
  description: string
  errorCode: number
}

export const ErrorPageTemplate: React.FC<IErrorPageTemplateProps> = (props) => {
  const { title, description, errorCode } = props

  return (
    <>
      <Seo title={title} description={description} />
      <StyledFlex justify="center" autoWrap={false} breakPoint="tablet">
        <Image
          src={`images/${errorCode}.png`}
          variant="square"
          width="400px"
          alt="error image"
        />
        <div>
          <Typography variant="h4">{title}</Typography>
          <Typography>{description}</Typography>
        </div>
      </StyledFlex>
    </>
  )
}
