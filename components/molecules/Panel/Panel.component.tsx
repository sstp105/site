import { Icon } from 'components/atoms/Icon'
import { FONTAWESOME_ICONS } from 'libs/constants/icons'
import React from 'react'
import styled from 'styled-components'
import { IThemeProps as IconTheme } from 'components/atoms/Icon/Icon.type'

export interface IPanel {
  size: IconTheme['size']
  left: Array<React.ReactNode>
  right: Array<React.ReactNode>
}

export const Panel: React.FC = (props) => {
  return (
    <Control>
      <div>
        <Icon iconName={FONTAWESOME_ICONS.thumbsUp} size="xs" />
        <Icon iconName={FONTAWESOME_ICONS.share} size="xs" />
        <Icon iconName={FONTAWESOME_ICONS.download} size="xs" />
      </div>
      <div>
        <Icon iconName={FONTAWESOME_ICONS.desktop} size="xs" />
        <Icon iconName={FONTAWESOME_ICONS.bulb} size="xs" />
      </div>
    </Control>
  )
}

const Control = styled.div`
  height: auto;
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin: 0 ${({ theme }) => theme.space.s};
  }
  box-shadow: 0 0 8px ${(props) => props.theme.color.shadow};
`
