import styled, { css } from 'styled-components'

export const StyledSelect = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;

    select {
      margin-top: ${theme.spacing.xs};
      background-color: ${theme.colors.contrast300};
      padding: ${theme.spacing.sm};
      border-radius: ${theme.border.radius};

      &:hover {
        cursor: pointer;
      }
    }
  `
)
