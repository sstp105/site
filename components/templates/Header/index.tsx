import React, { useRef } from 'react'
import dynamic from 'next/dynamic'
import { Flex } from 'components/atoms/Flex'
import { useMediaQuery } from 'libs/hooks/useMediaQuery'
import { css } from 'styled-components'
import { useIntersectionObserver } from 'libs/hooks/useIntersectionObserver'
import { DesktopHeader } from './DesktopHeader'

const DynamicMobileHeader = dynamic(() =>
  import('components/templates/Header/MobileHeader').then(
    (component) => component.MobileHeader
  )
)

export const Header: React.FC = () => {
  const width = useMediaQuery()
  const headerRef = useRef(null)
  const isInView = useIntersectionObserver(headerRef)

  return (
    <div ref={headerRef}>
      <Flex height="75px" shadow={!isInView} justify="center" css={flexStyle}>
        {width <= 768 ? <DynamicMobileHeader /> : <DesktopHeader />}
      </Flex>
    </div>
  )
}

const flexStyle = css`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background-color: ${(props) => props.theme.color.background};
  z-index: 3;
`
