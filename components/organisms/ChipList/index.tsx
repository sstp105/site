import React from 'react'
import { css } from 'styled-components'
import { Flex } from 'components/atoms/Flex'
import { Chip } from 'components/molecules/Chip'
import { IIconText } from 'types/schema/Profile'
import { IThemeProps } from 'components/molecules/Chip/Chip.type'
import { IThemeProps as IFlexThemeProps } from 'components/atoms/Flex/Flex.type'

interface IChipListProps {
  items: Array<string> | Array<IIconText>
  variant: IThemeProps['variant']
  size: IThemeProps['size']
  justify?: IFlexThemeProps['justify']
}

export const ChipList: React.FC<IChipListProps> = (props) => {
  const { items, variant, size, justify } = props
  return (
    <Flex
      css={css`
        margin: 20px 0 0 0;
      `}
      justify={justify}
    >
      {items.map((t: string | IIconText, index: number) => {
        const label = typeof t === 'string' ? t : t.content
        const icon = typeof t === 'string' ? null : t.icon

        return (
          <Chip
            key={index}
            label={label}
            icon={icon}
            variant={variant}
            size={size}
            css={css`
              margin-right: 10px;
              margin-bottom: 10px;
            `}
          />
        )
      })}
    </Flex>
  )
}
