import { Badge } from '../../Atoms/Badge'
import { Heading, Typography } from '../../Atoms/Typography'
import {
  StyledCarCard,
  StyledCarCardContent,
  StyledCarCardContentBadges,
  StyledCarCardImage,
} from './CarCard.styled'
import type { CarCardProps } from './CarCard.types'
import { List } from '../List'

export const CarCard = ({
  brand,
  model,
  image,
  fuel,
  consumption,
  firstRegistration,
  performance,
  gearbox,
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
          ]}
        />
      </StyledCarCardContent>
    </StyledCarCard>
  )
}
