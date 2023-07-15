import { memo } from 'react'
import { StyledSkeleton } from './Skeleton.styled'
import type { SkeletonProps } from './Skeleton.types'

export const Skeleton = memo((props: SkeletonProps): JSX.Element => <StyledSkeleton {...props} />)
