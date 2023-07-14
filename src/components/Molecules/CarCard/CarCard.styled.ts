import styled, { css } from 'styled-components'

import { StyledCard } from '../../Atoms/Card/Card.styled'

export const StyledCarCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
  height: 100%;
`
export const StyledCarCardImage = styled.img`
  max-height: unset;
`

export const StyledCarCardContent = styled.div(
  ({ theme }) => css`
    height: 100%;
    padding: ${theme.spacing.lg};
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  `
)
export const StyledCarCardContentBadges = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    gap: ${theme.spacing.sm};
    margin: ${theme.spacing.md} 0;
  `
)
export const StyledCarCardContentCarInfo = styled.ul(
  ({ theme }) => css`
    margin: ${theme.spacing.xs} 0;

    li {
      margin-bottom: ${theme.spacing.xxs};
      &:last-child {
        margin-bottom: 0;
      }
    }
  `
)
