import styled, { css } from 'styled-components'

import type { ThemeType } from '@/theme'

function getBadgeColor({ theme, color }: { theme: ThemeType; color: string }) {
  switch (color) {
    case 'primary':
      return css`
        background-color: ${theme.colors.primary};
        color: ${theme.colors.contrast0};
      `
    case 'neutral':
    default:
      return css`
        background-color: ${theme.colors.contrast200};
        color: ${theme.colors.contrast700};
      `
  }
}
export const StyledBadge = styled.span(
  ({ theme, color = 'neutral' }) => css`
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: ${theme.spacing.xs} ${theme.spacing.sm};
    border-radius: ${theme.spacing.sm};

    ${getBadgeColor({ theme, color })}
  `
)
