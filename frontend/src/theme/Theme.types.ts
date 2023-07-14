import type { BorderType, FontType, SizeType, SpacingType } from '../styles'
import type { ColorsType } from './colors'

export type ThemeType = {
  border: BorderType
  colors: ColorsType
  spacing: SpacingType
  size: SizeType
  font: FontType
}
