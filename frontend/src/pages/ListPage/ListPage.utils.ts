import type { Consumption, FuelType, GetOffersV3 } from '../../types'

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

export function mapConsumptionToString(consumption: Consumption): string | undefined {
  return consumption.consumption_combined
    ? `${consumption.consumption_combined} ${consumption.unit.replace('LITER', 'l')}`
    : undefined
}

export function getAllModels(cars: GetOffersV3['records']) {
  const items = cars.map(car => car.model)
  return ['Beliebig', ...items.filter((item, index) => items.indexOf(item) === index)]
}

export function getAllColors(cars: GetOffersV3['records']) {
  const items = cars.map(car => car.color)
  return ['Beliebig', ...items.filter((item, index) => items.indexOf(item) === index)]
}

export function getAllBrands() {
  return [
    'Beliebig',
    'Audi',
    'BMW',
    'Mercedes-Benz',
    'Volkswagen',
    'Porsche',
    'Opel',
    'Ford',
    'Skoda',
    'Seat',
    'Volvo',
    'Mini',
    'Land Rover',
    'Jaguar',
    'Fiat',
    'Alfa Romeo',
    'Maserati',
    'Lamborghini',
    'Ferrari',
    'Aston Martin',
    'Rolls-Royce',
    'Bentley',
    'Bugatti',
    'Peugeot',
    'Citroën',
    'Renault',
    'Dacia',
    'Nissan',
    'Mitsubishi',
    'Toyota',
    'Lexus',
    'Honda',
    'Mazda',
    'Subaru',
    'Suzuki',
    'Hyundai',
    'Kia',
    'Genesis',
    'Chevrolet',
    'Cadillac',
    'Jeep',
    'Dodge',
    'Chrysler',
    'GMC',
    'Tesla',
    'Rivian',
    'Polestar',
    'Lynk & Co',
    'Byton',
    'Borgward',
    'Wiesmann',
  ]
}

export function getAllGear() {
  return ['Beliebig', 'Automatik', 'Schaltgetriebe', 'Halbautomatik']
}
