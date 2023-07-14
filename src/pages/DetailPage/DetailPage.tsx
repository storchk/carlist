import { Navigate, useParams } from 'react-router-dom'

import { client } from '../../apollo'
import { Badge } from '../../components/Atoms/Badge'
import { Heading } from '../../components/Atoms/Typography'
import { Gallery } from '../../components/Organism/Gallery'
import { Offer as OfferFragment } from '../../graphql/fragments/Offer'
import { type Offer, Gear } from '../../types'
import { mapConsumptionToString, mapFuelTypeToName } from '../ListPage/ListPage.utils'
import { StyledDetailPage, StyledDetailPageBadges } from './DetailPage.styled'

export const DetailPage = (): JSX.Element => {
  const { id } = useParams()
  const offer = client.readFragment<Offer>({
    fragment: OfferFragment,
    id: `SearchResultV3Records:${id}`,
  })
  if (!offer) return <Navigate to="/" />
  const { brand, model, drivetrain, performance } = offer
  const fuel = mapFuelTypeToName(drivetrain.fuel.type)
  const consumption = mapConsumptionToString(offer.drivetrain.consumption)
  const gearbox = Gear[offer.drivetrain.transmission_type as unknown as keyof typeof Gear]

  return (
    <StyledDetailPage>
      <aside>
        <Gallery images={offer.media.final.map(media => media.url)} />
      </aside>
      <section>
        <Heading tag="h2" fontWeight="bold">
          {brand} {model}
        </Heading>

        <StyledDetailPageBadges>
          {fuel ? <Badge label={fuel} /> : null}
          {performance ? <Badge label={`${performance} PS`} /> : null}
          {gearbox ? <Badge label={gearbox} /> : null}
          {consumption ? <Badge label={consumption} /> : null}
        </StyledDetailPageBadges>
      </section>
    </StyledDetailPage>
  )
}
