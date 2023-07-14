import { useQuery } from '@apollo/client'
import { getOffers } from '../../graphql/queries/GetOffersV3'
import { GetOffersV3, GetOffersV3Response, Offer } from '../../types'
import { Link } from 'react-router-dom'
import { CarCard } from '../../components/Molecules/CarCard'
import { StyledListPage, StyledCarList } from './ListPage.styled'
import { mapConsumptionToString, mapFuelTypeToName } from './ListPage.utils'
import { Heading } from '../../components/Atoms/Typography'
import { useCallback, useEffect, useMemo, useRef, useState } from 'react'

export const ListPage = (): JSX.Element => {
  const [cars, setCars] = useState<GetOffersV3['records']>([])
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

  const handleScroll = useCallback(async () => {
    const scrollHeight = document.documentElement.scrollHeight
    const scrollTop = document.documentElement.scrollTop
    const clientHeight = document.documentElement.clientHeight
    if (scrollTop + clientHeight >= scrollHeight && !loading) {
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
          setCars(state => [...state, ...fetchMoreResult.getOffersV3.records])

          return {
            getOffersV3: {
              ...prev.getOffersV3,
              records: [...prev.getOffersV3.records, ...fetchMoreResult.getOffersV3.records],
            },
          }
        },
      })
    }
  }, [loading, fetchMore])

  useEffect(() => {
    const loadMore = async () => handleScroll()
    window.addEventListener('scroll', loadMore)
    return () => window.removeEventListener('scroll', loadMore)
  }, [handleScroll])

  if (error) return <div>Error</div>

  const uniqueCars = useMemo(
    () =>
      Array.from(new Set(cars.map(car => car.id)))
        .map(id => {
          return cars.find(car => car.id === id)
        })
        .filter((car): car is Offer => !!car),
    [cars]
  )

  return (
    <StyledListPage>
      <aside>Filter</aside>
      <section>
        <Heading tag="h2">Cars</Heading>
        <StyledCarList>
          {uniqueCars?.map(offer => {
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
                  />
                </Link>
              </li>
            )
          })}
        </StyledCarList>
        {loading && <div>Loading...</div>}
      </section>
    </StyledListPage>
  )
}
