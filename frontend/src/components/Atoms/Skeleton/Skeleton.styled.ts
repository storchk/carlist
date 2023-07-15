import styled, { css } from 'styled-components'

import type { SkeletonProps } from './Skeleton.types'

const skeleton = css(({ theme }) => {
  const base = theme.colors.contrast300
  const transition = theme.colors.contrast200
  return css`
    background: linear-gradient(100deg, ${base} 40%, ${transition} 50%, ${base} 60%) ${base};
    background-size: 200% 100%;
    background-position-x: 180%;
    animation: 1.8s loading ease-in-out infinite;

    @keyframes loading {
      to {
        background-position-x: -20%;
      }
    }
  `
})

export const StyledSkeleton = styled.div<SkeletonProps>(
  ({ theme, width = 'auto', height, marginTop }) => css`
    position: relative;
    border-radius: ${theme.border.radius};
    ${skeleton}
    ${width && `width: ${width};`}
    ${height && `height: ${height};`}
    ${marginTop && `margin-top: ${theme.spacing[marginTop]};`}
  `
)
