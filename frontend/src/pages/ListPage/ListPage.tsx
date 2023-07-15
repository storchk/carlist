import { useCallback, useEffect, useMemo, useRef } from 'react'
import { Link, useLocation, useParams } from 'react-router-dom'

import { useGetCarsQuery } from '@/graphql'

import { Button, CarCard, Heading, Typography } from '@/components'

import { useAppContext } from '@/context'
import { Filter } from './components/Filter'
import {
  StyledCarList,
  StyledListPage,
  StyledLoadMoreArea,
  StyledListPagePageHeader,
} from './ListPage.styled'
import { ErrorPage } from '../ErrorPage'
import { Loading } from './components/Loading'
import { useParameterFilter } from './hooks/useParameterFilter'
export const ListPage = (): JSX.Element => {
  useParameterFilter()
  const { cars, filteredCars, setCars } = useAppContext()
  const pageRef = useRef(0)
  const { data, error, loading, fetchMore } = useGetCarsQuery({
    variables: {
      limit: 10,
      offset: 0,
    },
    onCompleted: data => {
      setCars(data.cars.items)
    },
  })

  const loadMoreCars = useCallback(async () => {
    pageRef.current += 1
    await fetchMore({
      variables: {
        limit: 10,
        offset: pageRef.current * 10,
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        setCars(fetchMoreResult.cars.items)
        return {
          cars: {
            ...prev.cars,
            items: [...prev.cars.items, ...fetchMoreResult.cars.items],
          },
        }
      },
    })
  }, [fetchMore, setCars])

  const handleScroll = useCallback(async () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight && !loading) {
      await loadMoreCars()
    }
  }, [loading])

  useEffect(() => {
    const loadMore = async () => handleScroll()
    window.addEventListener('scroll', loadMore)
    return () => window.removeEventListener('scroll', loadMore)
  }, [handleScroll])

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
            <StyledCarList>
              {filteredCars?.map(car => {
                return (
                  <li key={car.id}>
                    <Link to={`/cars/${car.id}`}>
                      <CarCard
                        brand={car.brand}
                        model={car.model}
                        image={car.media[0].url}
                        fuel={car.drivetrain.fuel || undefined}
                        consumption={car.drivetrain.consumption}
                        firstRegistration={car.vehicleHistory.registrationDate || undefined}
                        performance={car.performance || undefined}
                        gearbox={car.drivetrain.transmissionType || undefined}
                      />
                    </Link>
                  </li>
                )
              })}
            </StyledCarList>
          </>
        ) : null}
        {!loading && cars.length !== data?.cars.total && (
          <StyledLoadMoreArea>
            <Button label="Mehr Fahrzeuge laden" onClick={loadMoreCars} />
          </StyledLoadMoreArea>
        )}
      </section>
    </StyledListPage>
  )
}
