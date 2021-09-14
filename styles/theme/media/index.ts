import { customMediaQuery } from 'libs/utils/customMediaQuery'

export type Device =
  | 'mobile_sm'
  | 'mobile'
  | 'tablet_sm'
  | 'tablet'
  | 'desktop_sm'
  | 'desktop_md'
  | 'desktop'

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
  mobile_sm: customMediaQuery(breakPoints.mobile_sm),
  mobile: customMediaQuery(breakPoints.mobile),
  tablet_sm: customMediaQuery(breakPoints.tablet_sm),
  tablet: customMediaQuery(breakPoints.tablet),
  desktop_sm: customMediaQuery(breakPoints.desktop_sm),
  desktop_md: customMediaQuery(breakPoints.desktop_md),
  desktop: customMediaQuery(breakPoints.desktop)
}
