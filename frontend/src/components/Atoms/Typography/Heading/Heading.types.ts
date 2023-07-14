import type { TypographyProps } from '../Typography.types'

type HeadingTags = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'

export type HeadingProps = TypographyProps & {
  tag?: HeadingTags
}
