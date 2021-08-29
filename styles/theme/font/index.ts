import { SizeLarge } from 'types/style/Size'

type FontFamily =
  | 'gilroy_thin'
  | 'gilroy_ultra_light'
  | 'gilroy_light'
  | 'gilroy_regular'
  | 'gilroy_medium'
  | 'gilroy_semi_bold'
  | 'menlo_regular'

const size: Record<SizeLarge, string> = {
  xxs: '16px',
  xs: '20px',
  s: '24px',
  m: '32px',
  l: '48px',
  xl: '65px',
  xxl: '96px'
}

const family: Record<FontFamily, string> = {
  gilroy_thin: 'Gilroy-Thin',
  gilroy_ultra_light: 'Gilroy-UltraLight',
  gilroy_light: 'Gilroy-Light',
  gilroy_regular: 'Gilroy-Regular',
  gilroy_medium: 'Gilroy-Medium',
  gilroy_semi_bold: 'Gilroy-SemiBold',
  menlo_regular: 'Menlo-Regular'
}

export const font = {
  size,
  family
}
