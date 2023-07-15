import type { Car } from '@/graphql'
export const mockedCar1: Car = {
  brand: 'Volkswagen',
  category: 'LIMOUSINE',
  color: 'WHITE',
  drivetrain: {
    cc: '999 ccm',
    consumption: '5.2 LITER',
    fuel: 'Benzin',
    transmissionType: 'Schaltgetriebe',
  },
  id: '32725100-3151-5348-871a-faee7be1f699',
  media: [
    {
      url: 'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/0dc7206c81b56879b7c42a3ecca3ad4e/image_0PU067451_20.jpg',
    },
  ],
  model: 'Polo',
  performance: '70 PS',
  price: {
    gross: 22395,
  },
  technicalFeatures: {
    drive: 'NO INFORMATION',
  },
  vehicleHistory: {
    registrationDate: '06.2023',
  },
  vehicleType: {
    condition: 'USED',
  },
}

export const mockedCar2: Car = {
  brand: 'Opel',
  category: 'OFFROAD',
  color: 'RED',
  drivetrain: {
    cc: '1199 ccm',
    consumption: '4.6 LITER',
    fuel: 'Benzin',
    transmissionType: 'Schaltgetriebe',
  },
  id: 'd5ae265a-5a44-5e4b-b25b-1b8825072e65',
  media: [
    {
      url: 'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/91597c07abbab7d535ac280cf0ef6f39/image_04.jpg',
    },
    {
      url: 'https://dqg4c1i67ln7w.cloudfront.net/photos/edited/91597c07abbab7d535ac280cf0ef6f39/image_01.jpg',
    },
  ],
  model: 'Crossland',
  performance: '60 PS',
  price: {
    gross: 23980,
  },
  technicalFeatures: {
    drive: null,
  },
  vehicleHistory: {
    registrationDate: '09.2022',
  },
  vehicleType: {
    condition: 'USED',
  },
}
