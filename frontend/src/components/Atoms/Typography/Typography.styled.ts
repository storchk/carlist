import styled, { css } from 'styled-components'

import { mediaQuery } from '../../../styles'
import type { TypographyProps } from './Typography.types'

export const StyledTypography = styled.div<TypographyProps>(
  ({ theme, fontWeight = 'regular', fontSize, color }) => css`
    font-weight: ${theme.font.weight[fontWeight]};
    color: ${color && color !== 'inherit' ? theme.colors[color] : 'inherit'};

    font-size: ${fontSize?.mobile ? theme.font.size[fontSize.mobile] : 'inherit'};
    ${fontSize?.tablet
      ? css`
          ${mediaQuery.md} {
            font-size: ${theme.font.size[fontSize.tablet]};
          }
        `
      : ''}

    ${fontSize?.desktop
      ? css`
          ${mediaQuery.lg} {
            font-size: ${theme.font.size[fontSize.desktop]};
          }
        `
      : ''}
  `
)
