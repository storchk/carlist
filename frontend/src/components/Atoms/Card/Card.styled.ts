import styled, { css } from 'styled-components'

import { StyledTypography } from '../Typography'

export const StyledCardText = styled(StyledTypography)``

export const StyledCard = styled.div(
  ({ theme }) => css`
    display: block;
    transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);
    background-color: ${theme.colors.contrast0};
    border-radius: ${theme.border.radius};
    overflow: hidden;
    box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 16px 2px;
    &:hover {
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.1) 0px 0.5rem 8px 0px;
      transform: scale(1.02);
    }
  `
)
