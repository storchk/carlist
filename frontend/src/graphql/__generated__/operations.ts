/* eslint-disable */
import gql from 'graphql-tag'
import * as Apollo from '@apollo/client'
export type Maybe<T> = T | null
export type InputMaybe<T> = Maybe<T>
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] }
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> }
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> }
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = {
  [_ in K]?: never
}
export type Incremental<T> =
  | T
  | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never }
const defaultOptions = {} as const
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string }
  String: { input: string; output: string }
  Boolean: { input: boolean; output: boolean }
  Int: { input: number; output: number }
  Float: { input: number; output: number }
}

export type Car = {
  __typename?: 'Car'
  brand: Scalars['String']['output']
  category?: Maybe<Scalars['String']['output']>
  color?: Maybe<Scalars['String']['output']>
  drivetrain: Drivetrain
  id: Scalars['ID']['output']
  media: Array<Media>
  model: Scalars['String']['output']
  performance: Scalars['String']['output']
  price: Price
  technicalFeatures: TechnicalFeatures
  vehicleHistory: VehicleHistory
  vehicleType: VehicleType
}

export type Cars = {
  __typename?: 'Cars'
  items: Array<Car>
  total: Scalars['Int']['output']
}

export type Drivetrain = {
  __typename?: 'Drivetrain'
  cc: Scalars['String']['output']
  consumption: Scalars['String']['output']
  fuel?: Maybe<Scalars['String']['output']>
  transmissionType?: Maybe<Scalars['String']['output']>
}

export type Media = {
  __typename?: 'Media'
  url: Scalars['String']['output']
}

export type Price = {
  __typename?: 'Price'
  gross: Scalars['Float']['output']
}

export type Query = {
  __typename?: 'Query'
  car?: Maybe<Car>
  cars: Cars
}

export type QuerycarArgs = {
  id: Scalars['String']['input']
}

export type QuerycarsArgs = {
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}

export type TechnicalFeatures = {
  __typename?: 'TechnicalFeatures'
  drive?: Maybe<Scalars['String']['output']>
}

export type VehicleHistory = {
  __typename?: 'VehicleHistory'
  registrationDate?: Maybe<Scalars['String']['output']>
}

export type VehicleType = {
  __typename?: 'VehicleType'
  condition: Scalars['String']['output']
}

export type CarFragment = { __typename?: 'Car' } & Pick<
  Car,
  'brand' | 'category' | 'color' | 'id' | 'model' | 'performance'
> & {
    drivetrain: { __typename?: 'Drivetrain' } & Pick<
      Drivetrain,
      'cc' | 'consumption' | 'fuel' | 'transmissionType'
    >
    media: Array<{ __typename?: 'Media' } & Pick<Media, 'url'>>
    price: { __typename?: 'Price' } & Pick<Price, 'gross'>
    technicalFeatures: { __typename?: 'TechnicalFeatures' } & Pick<TechnicalFeatures, 'drive'>
    vehicleHistory: { __typename?: 'VehicleHistory' } & Pick<VehicleHistory, 'registrationDate'>
    vehicleType: { __typename?: 'VehicleType' } & Pick<VehicleType, 'condition'>
  }

export type GetCarQueryVariables = Exact<{
  id: Scalars['String']['input']
}>

export type GetCarQuery = { __typename?: 'Query' } & {
  car?: Maybe<{ __typename?: 'Car' } & CarFragment>
}

export type GetCarsQueryVariables = Exact<{
  limit?: InputMaybe<Scalars['Int']['input']>
  offset?: InputMaybe<Scalars['Int']['input']>
}>

export type GetCarsQuery = { __typename?: 'Query' } & {
  cars: { __typename?: 'Cars' } & Pick<Cars, 'total'> & {
      items: Array<{ __typename?: 'Car' } & CarFragment>
    }
}

export const CarFragmentDoc = gql`
  fragment Car on Car {
    brand
    category
    color
    drivetrain {
      cc
      consumption
      fuel
      transmissionType
    }
    id
    media {
      url
    }
    model
    performance
    price {
      gross
    }
    technicalFeatures {
      drive
    }
    vehicleHistory {
      registrationDate
    }
    vehicleType {
      condition
    }
  }
`
export const GetCarDocument = gql`
  query GetCar($id: String!) {
    car(id: $id) {
      ...Car
    }
  }
  ${CarFragmentDoc}
`

/**
 * __useGetCarQuery__
 *
 * To run a query within a React component, call `useGetCarQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useGetCarQuery(
  baseOptions: Apollo.QueryHookOptions<GetCarQuery, GetCarQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options)
}
export function useGetCarLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCarQuery, GetCarQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCarQuery, GetCarQueryVariables>(GetCarDocument, options)
}
export type GetCarQueryHookResult = ReturnType<typeof useGetCarQuery>
export type GetCarLazyQueryHookResult = ReturnType<typeof useGetCarLazyQuery>
export type GetCarQueryResult = Apollo.QueryResult<GetCarQuery, GetCarQueryVariables>
export const GetCarsDocument = gql`
  query GetCars($limit: Int, $offset: Int) {
    cars(limit: $limit, offset: $offset) {
      total
      items {
        ...Car
      }
    }
  }
  ${CarFragmentDoc}
`

/**
 * __useGetCarsQuery__
 *
 * To run a query within a React component, call `useGetCarsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetCarsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetCarsQuery({
 *   variables: {
 *      limit: // value for 'limit'
 *      offset: // value for 'offset'
 *   },
 * });
 */
export function useGetCarsQuery(
  baseOptions?: Apollo.QueryHookOptions<GetCarsQuery, GetCarsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options)
}
export function useGetCarsLazyQuery(
  baseOptions?: Apollo.LazyQueryHookOptions<GetCarsQuery, GetCarsQueryVariables>
) {
  const options = { ...defaultOptions, ...baseOptions }
  return Apollo.useLazyQuery<GetCarsQuery, GetCarsQueryVariables>(GetCarsDocument, options)
}
export type GetCarsQueryHookResult = ReturnType<typeof useGetCarsQuery>
export type GetCarsLazyQueryHookResult = ReturnType<typeof useGetCarsLazyQuery>
export type GetCarsQueryResult = Apollo.QueryResult<GetCarsQuery, GetCarsQueryVariables>
export const namedOperations = {
  Query: {
    GetCar: 'GetCar',
    GetCars: 'GetCars',
  },
  Fragment: {
    Car: 'Car',
  },
}
export const Car = gql`
  fragment Car on Car {
    brand
    category
    color
    drivetrain {
      cc
      consumption
      fuel
      transmissionType
    }
    id
    media {
      url
    }
    model
    performance
    price {
      gross
    }
    technicalFeatures {
      drive
    }
    vehicleHistory {
      registrationDate
    }
    vehicleType {
      condition
    }
  }
`
export const GetCar = gql`
  query GetCar($id: String!) {
    car(id: $id) {
      ...Car
    }
  }
  ${Car}
`
export const GetCars = gql`
  query GetCars($limit: Int, $offset: Int) {
    cars(limit: $limit, offset: $offset) {
      total
      items {
        ...Car
      }
    }
  }
  ${Car}
`
