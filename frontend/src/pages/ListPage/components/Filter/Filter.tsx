import { memo, useCallback, useMemo } from 'react'

import { Select } from '../../../../components/Atoms/Select'
import { useAppContext } from '../../../../context'
import { useGetAllColors, useGetAllFuels, useGetAllModels } from './Filter.hooks'
import type { ChangeEventType } from './Filter.types'
import { getAllBrands, getFilterValueByInput } from './Filter.utils'

export const Filter = memo((): JSX.Element => {
  const { appliedFilter = [], setAppliedFilter } = useAppContext()
  const allBrands = getAllBrands()
  const allModels = useGetAllModels()
  const allColors = useGetAllColors()
  const allFuels = useGetAllFuels()

  const onChangeBrand = useCallback(
    (event: ChangeEventType) => {
      setAppliedFilter({
        key: 'brand',
        value: getFilterValueByInput(event),
      })
    },
    [setAppliedFilter]
  )

  const onChangeModel = useCallback(
    (event: ChangeEventType) => {
      setAppliedFilter({
        key: 'model',
        value: getFilterValueByInput(event),
      })
    },
    [setAppliedFilter]
  )

  const onChangeColor = useCallback(
    (event: ChangeEventType) => {
      setAppliedFilter({
        key: 'color',
        value: getFilterValueByInput(event),
      })
    },
    [setAppliedFilter]
  )

  const onChangeFuel = useCallback(
    (event: ChangeEventType) => {
      setAppliedFilter({
        key: 'drivetrain.fuel',
        value: getFilterValueByInput(event),
      })
    },
    [setAppliedFilter]
  )

  const filter = useMemo(
    () => [
      {
        id: 'brands',
        label: 'Marke',
        options: allBrands,
        onChange: onChangeBrand,
        selectedKey: 'brand',
      },
      {
        id: 'models',
        label: 'Model',
        options: allModels,
        onChange: onChangeModel,
        selectedKey: 'models',
      },
      {
        id: 'color',
        label: 'Farbe',
        options: allColors,
        onChange: onChangeColor,
        selectedKey: 'color',
      },
      {
        id: 'fuel',
        label: 'Kraftstoff',
        options: allFuels,
        onChange: onChangeFuel,
        selectedKey: 'fuel',
      },
    ],
    [
      allBrands,
      allModels,
      allColors,
      allFuels,
      onChangeBrand,
      onChangeModel,
      onChangeColor,
      onChangeFuel,
    ]
  )

  return (
    <>
      {filter.map(({ id, label, options, onChange, selectedKey }) => (
        <Select
          key={id}
          id={id}
          name={id}
          label={label}
          options={options.map(item => ({ value: item, label: item }))}
          onChange={onChange}
          selected={appliedFilter.find(filter => filter.key === selectedKey)?.value || 'all'}
        />
      ))}
    </>
  )
})
