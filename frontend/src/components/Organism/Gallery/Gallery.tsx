import { useState } from 'react'

import {
  StyledGallery,
  StyledHeroImage,
  StyledPreviewImage,
  StyledPreviewImageList,
  StyledPreviewImageListItem,
} from './Gallery.styled'
import type { GalleryProps } from './Gallery.types'

export const Gallery = ({ images }: GalleryProps): JSX.Element => {
  const [activeImage, setActiveImage] = useState(images[0])
  return (
    <StyledGallery>
      <StyledHeroImage src={activeImage} alt="" data-test="gallery-active-image" />
      <StyledPreviewImageList>
        {images.map((image, index) => {
          return (
            <StyledPreviewImageListItem
              key={`gallery-image-${index}`}
              $isActive={image === activeImage}
              onClick={() => setActiveImage(image)}
            >
              <StyledPreviewImage src={image} alt="" loading="lazy" />
            </StyledPreviewImageListItem>
          )
        })}
      </StyledPreviewImageList>
    </StyledGallery>
  )
}
