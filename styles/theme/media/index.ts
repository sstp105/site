import { customMediaQuery } from 'utils/customMediaQuery'

type ScreenBreakPoints =
  | 'mobile_sm'
  | 'mobile'
  | 'tablet_sm'
  | 'tablet'
  | 'desktop_sm'
  | 'desktop'

export const media: Record<ScreenBreakPoints, string> = {
  mobile_sm: customMediaQuery(320),
  mobile: customMediaQuery(480),
  tablet_sm: customMediaQuery(640),
  tablet: customMediaQuery(768),
  desktop_sm: customMediaQuery(1024),
  desktop: customMediaQuery(1440)
}
