import type { Car } from '@/graphql'

export function getAllModels(cars: Car[]) {
  const items = cars.map(car => car.model)
  return ['Beliebig', ...items.filter((item, index) => items.indexOf(item) === index)]
}

export function getAllColors(cars: Car[]) {
  const items = cars.map(car => car.color)
  return [
    'Beliebig',
    ...items.filter(
      (item, index): item is string => Boolean(item) && items.indexOf(item) === index
    ),
  ]
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
