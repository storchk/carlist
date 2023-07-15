import type { SizeType } from '@/styles'

export type SkeletonProps = {
  width?: string
  height?: string
  marginTop?: keyof Omit<SizeType, 'baseSize'>
}
