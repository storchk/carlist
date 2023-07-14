import { StyledCard } from '../../Atoms/Card/Card.styled'
import { mediaQuery } from '../../../styles'
import styled, { css } from 'styled-components'

export const StyledCarCard = styled(StyledCard)`
  display: flex;
  flex-direction: column;
`
export const StyledCarCardImage = styled.img`
  max-height: unset;

  ${mediaQuery.md} {
    max-height: 280px;
  }
`

export const StyledCarCardContent = styled.div(
  ({ theme }) => css`
    padding: ${theme.spacing.lg};
    display: flex;
    flex-direction: column;
    justify-content: center;
  `
)
export const StyledCarCardContentBadges = styled.div(
  ({ theme }) => css`
    display: flex;
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
