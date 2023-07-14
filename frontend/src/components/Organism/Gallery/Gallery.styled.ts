import styled, { css } from 'styled-components'

export const StyledGallery = styled.div`
  display: flex;
  flex-direction: column;
`
export const StyledHeroImage = styled.img(
  ({ theme }) => css`
    width: 100%;
    margin-bottom: ${theme.spacing.md};
    border-radius: ${theme.border.radius};
  `
)

export const StyledPreviewImageList = styled.ul(
  ({ theme }) => css`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: ${theme.spacing.sm} ${theme.spacing.xs};

    &::after {
      content: '';
      flex: auto;
    }
  `
)

export const StyledPreviewImageListItem = styled.li<{ $isActive: boolean }>(
  ({ theme, $isActive }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    overflow: hidden;
    border-radius: ${theme.border.radius};
    transition: all 0.5s cubic-bezier(0.2, 0, 0.05, 1);

    width: calc(20% - ${theme.spacing.xs});
    height: calc(20% - ${theme.spacing.xs});

    ${$isActive
      ? css`
          border: 4px solid ${theme.colors.primary};
        `
      : css`
          border: 4px solid transparent;
        `}

    &:hover {
      cursor: pointer;
      transform: scale(1.02);
    }
  `
)

export const StyledPreviewImage = styled.img`
  width: 100%;
  height: -webkit-fill-available;
`
