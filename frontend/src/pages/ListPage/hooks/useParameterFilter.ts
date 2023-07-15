import { useAppContext } from '@/context'
import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

export function useParameterFilter() {
  const { setAppliedFilter, cars, filteredCars, appliedFilter } = useAppContext()

  const { search } = useLocation()
  const query = useMemo(() => new URLSearchParams(search), [search])

  useEffect(() => {
    if (filteredCars.length || cars.length) {
      query?.forEach((value, key) => {
        if (key && value && !appliedFilter.find(filter => filter.key === key)) {
          setAppliedFilter({ key, value })
        }
      })
    }
  }, [query, appliedFilter, filteredCars.length, cars.length])
}
