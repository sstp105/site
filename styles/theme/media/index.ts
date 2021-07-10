import { customMediaQuery } from 'utils/customMediaQuery'

type ScreenBreakPoints = 'xxs' | 'xs' | 's' | 'm' | 'l' | 'xl'

export const media: Record<ScreenBreakPoints, string> = {
  xxs: customMediaQuery(320),
  xs: customMediaQuery(480),
  s: customMediaQuery(640),
  m: customMediaQuery(768),
  l: customMediaQuery(1024),
  xl: customMediaQuery(1440)
}
