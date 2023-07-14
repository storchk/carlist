export type SizeType = {
  baseSize: number
  xxs: number
  xs: number
  sm: number
  md: number
  lg: number
  xl: number
  xxl: number
  xxxl: number
  xxxxl: number
}

const baseSize = 8

export const size: SizeType = {
  baseSize,
  xxs: baseSize * 0.5,
  xs: baseSize * 1,
  sm: baseSize * 2,
  md: baseSize * 3,
  lg: baseSize * 4,
  xl: baseSize * 5,
  xxl: baseSize * 6,
  xxxl: baseSize * 7,
  xxxxl: baseSize * 8,
}
