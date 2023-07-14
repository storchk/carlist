import { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { useGetCarsQuery } from '@/graphql'

import { Button } from '../../components/Atoms/Button'
import { Heading, Typography } from '../../components/Atoms/Typography'
import { CarCard } from '../../components/Molecules/CarCard'
import { useAppContext } from '../../context'
import { Filter } from './components/Filter'
import { StyledCarList, StyledListPage, StyledLoadMoreArea } from './ListPage.styled'

export const ListPage = (): JSX.Element => {
  const { cars, filteredCars, setCars } = useAppContext()
  const pageRef = useRef(0)
  const { data, loading, error, fetchMore } = useGetCarsQuery({
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
  }, [loading, loadMoreCars])

  useEffect(() => {
    const loadMore = async () => handleScroll()
    window.addEventListener('scroll', loadMore)
    return () => window.removeEventListener('scroll', loadMore)
  }, [handleScroll])

  if (error) return <div>Error</div>

  return (
    <StyledListPage>
      <aside>
        <Filter />
      </aside>
      <section>
        <Heading tag="h2">Autos</Heading>
        <Typography tag="span">
          {filteredCars.length} von {data?.cars.total}
        </Typography>
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
        {loading && <div>Loading...</div>}
        {!loading && cars.length !== data?.cars.total && (
          <StyledLoadMoreArea>
            <Button label="Load more" onClick={loadMoreCars} />
          </StyledLoadMoreArea>
        )}
      </section>
    </StyledListPage>
  )
}
