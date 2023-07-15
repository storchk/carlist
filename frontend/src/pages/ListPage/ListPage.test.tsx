import type { MockedResponse } from '@apollo/client/testing'
import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'

import type { Car, GetCarsQuery } from '@/graphql'
import { GetCarsDocument } from '@/graphql'
import { mockedCar1, mockedCar2 } from '@/mocks'

import { testing } from '../../testing'
import { ListPage } from './ListPage'

const { render, screen } = testing

let mockedUseAppContext = jest.fn().mockImplementation(() => {
  return {
    setCars: jest.fn(),
    cars: [],
    filteredCars: [],
  }
})

const mockEmptyCarListText = 'Keine Fahrzeuge vorhanden'

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
jest.mock<typeof import('@/context')>('@/context', () => ({
  ...jest.requireActual('@/context'),
  useAppContext: () => mockedUseAppContext(),
}))

const mockedCards: Car[] = [mockedCar1, mockedCar2]

const commonRequest = {
  query: GetCarsDocument,
  variables: {
    limit: 10,
    offset: 0,
  },
}

const mocksWithData: MockedResponse<GetCarsQuery>[] = [
  {
    request: commonRequest,
    result: () => {
      return {
        data: { cars: { total: mockedCards.length, items: mockedCards } },
        loading: false,
        error: undefined,
      }
    },
  },
]

const mocksWithoutData: MockedResponse<GetCarsQuery>[] = [
  {
    request: commonRequest,
    result: { data: { cars: { total: 0, items: [] } } },
  },
]

const mocksWithError: MockedResponse<GetCarsQuery>[] = [
  {
    request: commonRequest,
    error: new Error('aw shucks'),
  },
]

const renderComponent = (mocks: MockedResponse<GetCarsQuery>[]) => {
  return render(
    <MockedProvider mocks={mocks}>
      <MemoryRouter>
        <ListPage />
      </MemoryRouter>
    </MockedProvider>
  )
}

describe('listPage', () => {
  it('when data is not present: renders error component when data is empty', async () => {
    renderComponent(mocksWithoutData)

    await screen.findByText(mockEmptyCarListText)

    expect(screen.getByText(mockEmptyCarListText)).toBeInTheDocument()
  })

  it('when error is occurred: renders error component when data has an error', async () => {
    renderComponent(mocksWithError)

    await screen.findByTestId('carlist-error-page')
    expect(screen.getByTestId('carlist-error-page')).toBeInTheDocument()
  })

  it('when data is present: renders car list without error', async () => {
    mockedUseAppContext = jest.fn().mockImplementation(
      jest.fn(() => {
        return {
          setCars: jest.fn(),
          cars: mockedCards,
          filteredCars: mockedCards,
        }
      })
    )

    renderComponent(mocksWithData)
    await screen.findByRole('list', { name: /carlist-cars/i })

    expect(screen.getAllByRole('link')).toHaveLength(mockedCards.length)
  })

  it('when data is present but carlist is empty: renders empty car list info without error', async () => {
    mockedUseAppContext = jest.fn().mockImplementation(
      jest.fn(() => {
        return {
          setCars: jest.fn(),
          cars: mockedCards,
          filteredCars: [],
        }
      })
    )

    renderComponent(mocksWithData)
    await screen.findByText(mockEmptyCarListText)

    expect(screen.getByText(mockEmptyCarListText)).toBeInTheDocument()
  })
})
