import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { NavigationList } from './NavigationList'
import { Flex } from 'components/atoms/Layout'
import { useMediaQuery } from 'libs/hooks/useMediaQuery'
import { css } from 'styled-components'
import { useIntersectionObserver } from 'libs/hooks/useIntersectionObserver'
import { Icon } from 'components/atoms/Icon'

const DynamicMobileHeader = dynamic(() =>
  import('components/templates/shared/Header/MobileHeader').then(
    (component) => component.MobileHeader
  )
)

const flexStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};
  z-index: 3;
`

export const Header: React.FC = () => {
  const width = useMediaQuery()
  const headerRef = useRef(null)
  const isInView = useIntersectionObserver(headerRef)

  return (
    <div ref={headerRef}>
      <Flex height="75px" shadow={!isInView} justify="center" css={flexStyle}>
        {width <= 768 ? (
          <DynamicMobileHeader />
        ) : (
          <>
            <NavigationList />
            <div style={{ position: 'fixed', right: 150 }}>
              <Icon iconName="fas fa-moon" />
            </div>
          </>
        )}
      </Flex>
    </div>
  )
}
