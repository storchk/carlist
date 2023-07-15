import { useAppContext } from '@/context'
import { useEffect, useMemo } from 'react'
import { useLocation } from 'react-router-dom'

// This hook is used to set the applied filter from the URL query parameters.
export function useParameterFilter() {
  const { setAppliedFilter, cars, filteredCars, appliedFilter } = useAppContext()

  const { search } = useLocation()
  const query = useMemo(() => new URLSearchParams(search), [search])

  useEffect(() => {
    if (filteredCars.length || cars.length) {
      query?.forEach((value, key) => {
        // if the key and value exist and the filter doesn't already exist, set it
        if (key && value && !appliedFilter.find(filter => filter.key === key)) {
          setAppliedFilter({ key, value })
        }
      })
    }
  }, [query, appliedFilter, filteredCars.length, cars.length])
}
