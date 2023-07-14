import { CarCardProps } from './CarCard.types'
import {
  StyledCarCard,
  StyledCarCardContent,
  StyledCarCardImage,
  StyledCarCardContentBadges,
  StyledCarCardContentCarInfo,
} from './CarCard.styled'
import { Heading, Typography } from '../../Atoms/Typography'
import { Badge } from '../../Atoms/Badge'

const disabledColor = 'contrast500'

export const CarCard = ({
  brand,
  model,
  image,
  fuel,
  consumption,
  firstRegistration,
  performance,
}: CarCardProps): JSX.Element => {
  return (
    <StyledCarCard>
      <StyledCarCardImage src={image} alt="" />
      <StyledCarCardContent>
        <Heading tag="h3" fontWeight="bold">
          {brand} {model}
        </Heading>
        <StyledCarCardContentBadges>
          {fuel ? <Badge label={fuel} /> : null}
          {performance ? <Badge label={`${performance} PS`} /> : null}
        </StyledCarCardContentBadges>

        <StyledCarCardContentCarInfo>
          <li>
            <Typography
              tag="span"
              fontWeight="bold"
              color={firstRegistration ? 'inherit' : disabledColor}
            >
              Erstzulassung:
            </Typography>
            <Typography tag="span" color={firstRegistration ? 'inherit' : disabledColor}>
              {' '}
              {firstRegistration || 'k. A.'}
            </Typography>
          </li>

          <li>
            <Typography
              tag="span"
              fontWeight="bold"
              color={consumption ? 'inherit' : disabledColor}
            >
              Verbrauch:
            </Typography>
            <Typography tag="span" color={consumption ? 'inherit' : disabledColor}>
              {' '}
              {consumption || 'k. A.'}
            </Typography>
          </li>
        </StyledCarCardContentCarInfo>
      </StyledCarCardContent>
    </StyledCarCard>
  )
}
