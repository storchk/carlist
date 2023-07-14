import type { SizeType } from './size'
import { size } from './size'

export type SpacingType = {
  [size in keyof Omit<SizeType, 'baseSize'>]: string
}
const { baseSize } = size

export const spacing: SpacingType = {
  xxs: `${baseSize * 0.5}px`,
  xs: `${baseSize * 1}px`,
  sm: `${baseSize * 2}px`,
  md: `${baseSize * 3}px`,
  lg: `${baseSize * 4}px`,
  xl: `${baseSize * 5}px`,
  xxl: `${baseSize * 6}px`,
  xxxl: `${baseSize * 7}px`,
  xxxxl: `${baseSize * 8}px`,
}
