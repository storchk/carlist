import { useAppContext } from '@/context'

export function useGetAllColors() {
  const { filteredCars } = useAppContext()
  const colors = filteredCars.map(car => car.color)
  return [
    'Beliebig',
    ...colors.filter(
      (item, index): item is string => Boolean(item) && colors.indexOf(item) === index
    ),
  ]
}

export function useGetAllModels() {
  const { filteredCars } = useAppContext()
  const models = filteredCars.map(car => car.model)
  return [
    'Beliebig',
    ...models.filter((item, index) => Boolean(item) && models.indexOf(item) === index),
  ]
}

export function useGetAllFuels() {
  const { filteredCars } = useAppContext()
  const fuels = filteredCars.map(car => car.drivetrain.fuel)
  return [
    'Beliebig',
    ...fuels.filter(
      (item, index): item is string => Boolean(item) && fuels.indexOf(item) === index
    ),
  ]
}
