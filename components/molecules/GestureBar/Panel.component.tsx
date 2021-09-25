import { Icon } from 'components/atoms/Icon'
import React from 'react'
import styled, { css } from 'styled-components'
import { IThemeProps as IconTheme } from 'components/atoms/Icon/Icon.type'
import { Typography } from 'components/atoms/Typography'

export type TabbableIcon = {
  iconName: string
  text?: string | number
  onClick?: any
}

export interface IPanel {
  size: IconTheme['size']
  leftIcons: Array<TabbableIcon>
  rightIcons: Array<TabbableIcon>
}

// Hover box to indicate the icon
export const Panel: React.FC<IPanel> = (props) => {
  const { size, leftIcons, rightIcons } = props

  return (
    <Control>
      <div>
        {leftIcons.map((elem) => {
          const { iconName, text, onClick } = elem
          return (
            <Icon
              key={iconName}
              iconName={iconName}
              size={size}
              hoverable
              onClick={onClick}
            >
              <Typography
                variant="note"
                display="inline"
                css={css`
                  margin-left: 15px;
                `}
              >
                {text}
              </Typography>
            </Icon>
          )
        })}
      </div>
      <div>
        {rightIcons.map((elem) => {
          const { iconName, text, onClick } = elem
          return (
            <Icon
              key={iconName}
              iconName={iconName}
              size={size}
              hoverable
              onClick={onClick}
            >
              <Typography
                variant="note"
                display="inline"
                css={css`
                  margin-left: 15px;
                `}
              >
                {text}
              </Typography>
            </Icon>
          )
        })}
      </div>
    </Control>
  )
}

const Control = styled.div`
  height: auto;
  position: relative;
  background-color: ${(props) => props.theme.color.background};
  padding: 15px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  i {
    margin: 0 ${({ theme }) => theme.space.s};
  }
  box-shadow: 0 0 8px ${(props) => props.theme.color.shadow};
`
