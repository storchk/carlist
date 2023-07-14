export type FuelType = 'PETROL' | 'DIESEL' | 'ELECTRICITY' | 'HYBRID'

export enum Gear {
  MANUAL_GEAR = 'Schaltgetriebe',
  AUTOMATIC_GEAR = 'Automatikgetriebe',
  HALFAUTOMATIC_GEAR = 'Halbautomatikgetrieber',
}

export type Media = {
  url: string
}
export type Consumption = {
  unit: string
  consumption_combined: number
}
export type Offer = {
  id: string
  brand: string
  model: string
  performance: number
  vehicle_history: {
    reg_date: string
  }
  drivetrain: {
    fuel: {
      type: FuelType
    }
    consumption: Consumption
    transmission_type: typeof Gear
    cc: number
  }
  im_price: {
    consumer_price_gross: number
  }
  media: {
    final: Media[]
  }
  technical_features: {
    drive: string
  }
  vehicle_type: {
    condition: string
  }
  category?: string | null
  color: string
}

export type GetOffersV3 = {
  records: Offer[]
}
export type GetOffersV3Response = { getOffersV3: GetOffersV3 }
