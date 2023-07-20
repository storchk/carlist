import { useParams } from 'react-router-dom'

import { Badge, Gallery, Heading, List, Typography } from '@/components'
import { useGetCarQuery } from '@/graphql'

import { ErrorPage } from '../ErrorPage'
import { NotFoundPage } from '../NotFoundPage'
import { Loading } from './components/Loading'
import {
  StyledDetailPage,
  StyledDetailPageBadges,
  StyledPrice,
  StyledVehicleTypeBadge,
} from './DetailPage.styled'

export const DetailPage = (): JSX.Element => {
  const { id = '' } = useParams()
  const { data, loading, error } = useGetCarQuery({ variables: { id } })

  if (loading) return <Loading />
  if (!data?.car) return <NotFoundPage />
  if (error) return <ErrorPage error={error} />

  const {
    brand,
    model,
    drivetrain,
    performance,
    media,
    color,
    vehicleHistory,
    category,
    vehicleType,
    price,
  } = data.car
  const carPrice = `${price.gross} €`
  return (
    <StyledDetailPage>
      {vehicleType.condition === 'NEW' ? (
        <StyledVehicleTypeBadge label="NEUWAGEN" color="primary" />
      ) : null}

      <aside>
        <Gallery images={media?.map(media => media.url) || []} />
      </aside>
      <section>
        <Heading tag="h2" fontWeight="bold">
          {brand} {model}
        </Heading>
        <Typography>{category}</Typography>

        <StyledDetailPageBadges>
          {drivetrain.fuel ? <Badge label={drivetrain.fuel} /> : null}
          {performance ? <Badge label={`${performance} PS`} /> : null}
          {drivetrain.transmissionType ? <Badge label={drivetrain.transmissionType} /> : null}
        </StyledDetailPageBadges>

        <List
          items={[
            {
              label: 'Farbe',
              value: color,
            },
            {
              label: 'Erstzulassung',
              value: vehicleHistory.registrationDate,
            },
            {
              label: 'Verbrauch',
              value: drivetrain.consumption,
            },
            {
              label: 'Zustand',
              value: vehicleType.condition,
            },
          ]}
        />

        <StyledPrice>
          <Typography
            tag="span"
            fontSize={{
              mobile: 'sm',
            }}
          >
            Preis:
          </Typography>
          <Typography
            tag="span"
            fontWeight="bold"
            fontSize={{
              mobile: 'xl',
            }}
          >
            {carPrice}
          </Typography>
        </StyledPrice>
      </section>
    </StyledDetailPage>
  )
}
