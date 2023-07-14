import { useQuery } from '@apollo/client'
import { useCallback, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'

import { Heading } from '../../components/Atoms/Typography'
import { CarCard } from '../../components/Molecules/CarCard'
import { useAppContext } from '../../context'
import { getOffers } from '../../graphql/queries/GetOffersV3'
import type { GetOffersV3Response } from '../../types'
import { Gear } from '../../types'
import { Filter } from './components/Filter'
import { StyledCarList, StyledListPage, StyledLoadMoreArea } from './ListPage.styled'
import { mapConsumptionToString, mapFuelTypeToName } from './ListPage.utils'
import { Button } from '../../components/Atoms/Button'
import { filter } from 'lodash'

export const ListPage = (): JSX.Element => {
  const { cars, filteredCars, setCars } = useAppContext()
  const pageRef = useRef(1)
  const { loading, error, fetchMore } = useQuery<GetOffersV3Response>(getOffers, {
    fetchPolicy: 'cache-first',
    variables: {
      q: {
        'page-size': 10,
        page: 1,
      },
    },
    onCompleted: data => {
      setCars(data.getOffersV3.records)
    },
  })

  const loadMoreCars = useCallback(async () => {
    pageRef.current += 1
    await fetchMore({
      variables: {
        q: {
          'page-size': 10,
          page: pageRef.current,
        },
      },
      updateQuery: (prev, { fetchMoreResult }) => {
        if (!fetchMoreResult) return prev
        /*
         * SearchResultV3Records contains categories which is required per schema but includes null values
         */
        setCars(fetchMoreResult.getOffersV3.records)
        return {
          getOffersV3: {
            ...prev.getOffersV3,
            records: [...prev.getOffersV3.records, ...fetchMoreResult.getOffersV3.records],
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
      pageRef.current += 1

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
        <StyledCarList>
          {filteredCars?.map(offer => {
            return (
              <li key={offer.id}>
                <Link to={`/cars/${offer.id}`}>
                  <CarCard
                    brand={offer.brand}
                    model={offer.model}
                    image={offer.media.final[0].url}
                    fuel={mapFuelTypeToName(offer.drivetrain.fuel.type)}
                    consumption={mapConsumptionToString(offer.drivetrain.consumption)}
                    firstRegistration={offer.vehicle_history.reg_date}
                    performance={offer.performance}
                    gearbox={
                      Gear[offer.drivetrain.transmission_type as unknown as keyof typeof Gear]
                    }
                  />
                </Link>
              </li>
            )
          })}
        </StyledCarList>
        {loading && <div>Loading...</div>}
        {!loading && cars.length !== filter.length && (
          <StyledLoadMoreArea>
            <Button label="Load more" onClick={loadMoreCars} />
          </StyledLoadMoreArea>
        )}
      </section>
    </StyledListPage>
  )
}
