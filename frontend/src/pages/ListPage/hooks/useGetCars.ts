import { useCallback, useEffect, useRef } from 'react'

import { useAppContext } from '@/context'
import { useGetCarsQuery } from '@/graphql'

export function useGetCars() {
  const { setCars, cars } = useAppContext()

  const pageRef = useRef(0)
  const { data, error, loading, fetchMore } = useGetCarsQuery({
    variables: {
      limit: 10,
      offset: 0,
    },
    onCompleted: data => {
      if (!cars.length) {
        setCars(data.cars.items)
      }
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

  return {
    data,
    loading,
    error,
    fetchMore: loadMoreCars,
  }
}
