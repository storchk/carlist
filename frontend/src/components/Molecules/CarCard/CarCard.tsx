import { Badge } from '../../Atoms/Badge'
import { Heading } from '../../Atoms/Typography'
import { List } from '../List'
import {
  StyledCarCard,
  StyledCarCardContent,
  StyledCarCardContentBadges,
  StyledCarCardImage,
} from './CarCard.styled'
import type { CarCardProps } from './CarCard.types'

export const CarCard = ({
  brand,
  model,
  image,
  fuel,
  consumption,
  firstRegistration,
  performance,
  gearbox,
  color,
}: CarCardProps): JSX.Element => {
  return (
    <StyledCarCard>
      <StyledCarCardImage src={image} alt="" loading="lazy" />
      <StyledCarCardContent>
        <Heading tag="h3" fontWeight="bold">
          {brand} {model}
        </Heading>
        <StyledCarCardContentBadges>
          {fuel ? <Badge label={fuel} /> : null}
          {performance ? <Badge label={`${performance}`} /> : null}
          {gearbox ? <Badge label={gearbox} /> : null}
        </StyledCarCardContentBadges>
        <List
          items={[
            {
              label: 'Erstzulassung',
              value: firstRegistration,
            },
            {
              label: 'Verbrauch',
              value: consumption,
            },
            {
              label: 'Farbe',
              value: color,
            },
          ]}
        />
      </StyledCarCardContent>
    </StyledCarCard>
  )
}
