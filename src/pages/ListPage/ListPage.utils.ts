import { Consumption, FuelType, Gear } from '../../types'

export function mapFuelTypeToName(fuelType: FuelType): string | undefined {
  switch (fuelType) {
    case 'DIESEL':
      return 'Diesel'
    case 'ELECTRICITY':
      return 'Elektro'
    case 'PETROL':
      return 'Benzin'
    default:
      return undefined
  }
}

export function mapGearToName(gear: Gear): string | undefined {
  switch (gear) {
    case 'MANUAL':
      return 'Schaltgetriebe'
    case 'AUTOMATIC':
      return 'Automatik'
    default:
      return undefined
  }
}

export function mapConsumptionToString(consumption: Consumption): string | undefined {
  return consumption.consumption_combined
    ? `${consumption.consumption_combined} ${consumption.unit.replace('LITER', 'l')}`
    : undefined
}
