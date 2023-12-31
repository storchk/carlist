import { Link } from 'react-router-dom'

import { CarCard, Heading, Typography } from '@/components'
import { useAppContext } from '@/context'

import { ErrorPage } from '../ErrorPage'
import { Filter } from './components/Filter'
import { Loading } from './components/Loading'
import { useGetCars } from './hooks/useGetCars'
import { useParameterFilter } from './hooks/useParameterFilter'
import { StyledCarList, StyledListPage, StyledListPagePageHeader } from './ListPage.styled'
export const ListPage = (): JSX.Element => {
  useParameterFilter()
  const { data, loading, error } = useGetCars()
  const { filteredCars } = useAppContext()
  if (!loading && error) return <ErrorPage error={error} />

  return (
    <StyledListPage>
      <aside>
        <Filter />
      </aside>
      <section>
        {loading ? <Loading /> : null}

        {!loading ? (
          <>
            <StyledListPagePageHeader>
              <Heading tag="h2">Fahrzeuge</Heading>
              <Typography tag="span">
                {filteredCars.length} von {data?.cars.total}
              </Typography>
            </StyledListPagePageHeader>
            {!filteredCars.length ? (
              <>
                <Typography>Keine Fahrzeuge vorhanden</Typography>
              </>
            ) : null}
            {filteredCars.length ? (
              <StyledCarList aria-label="carlist-cars">
                {filteredCars?.map(car => {
                  return (
                    <li key={car.id}>
                      <Link
                        aria-label={`Link zur ${car.brand} ${car.model} Detailseite`}
                        to={`/cars/${car.id}`}
                      >
                        <CarCard
                          brand={car.brand}
                          model={car.model}
                          image={car.media[0].url}
                          fuel={car.drivetrain.fuel || undefined}
                          consumption={car.drivetrain.consumption}
                          firstRegistration={car.vehicleHistory.registrationDate || undefined}
                          performance={car.performance || undefined}
                          gearbox={car.drivetrain.transmissionType || undefined}
                          color={car.color || undefined}
                        />
                      </Link>
                    </li>
                  )
                })}
              </StyledCarList>
            ) : null}
          </>
        ) : null}
      </section>
    </StyledListPage>
  )
}
