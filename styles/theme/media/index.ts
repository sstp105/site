import { customMediaQuery } from 'libs/utils/customMediaQuery'

export type Device =
  | 'mobile_sm'
  | 'mobile'
  | 'tablet_sm'
  | 'tablet'
  | 'desktop_sm'
  | 'desktop_md'
  | 'desktop'

// Return break points
export const breakPoints: Record<Device, number> = {
  mobile_sm: 320,
  mobile: 480,
  tablet_sm: 640,
  tablet: 768,
  desktop_sm: 1024,
  desktop_md: 1280,
  desktop: 1440
}

// Return media query css block
export const media: Record<Device, string> = {
  mobile_sm: customMediaQuery(320),
  mobile: customMediaQuery(480),
  tablet_sm: customMediaQuery(640),
  tablet: customMediaQuery(768),
  desktop_sm: customMediaQuery(1024),
  desktop_md: customMediaQuery(1280),
  desktop: customMediaQuery(1440)
}
