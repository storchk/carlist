import { MockedProvider } from '@apollo/client/testing'
import { MemoryRouter } from 'react-router-dom'

import { mockedCar1 } from '@/mocks'

import { testing } from '../../testing'
import { DetailPage } from './DetailPage'

const { render, screen } = testing

let mockedUseGetCarQuery = jest.fn().mockImplementation(() => {
  return {
    data: { car: null },
  }
})

// eslint-disable-next-line @typescript-eslint/consistent-type-imports
jest.mock<typeof import('@/graphql')>('@/graphql', () => ({
  ...jest.requireActual('@/graphql'),
  useGetCarQuery: () => mockedUseGetCarQuery(),
}))

const renderComponent = () => {
  return render(
    <MockedProvider mocks={[]} addTypename={false}>
      <MemoryRouter>
        <DetailPage />
      </MemoryRouter>
    </MockedProvider>
  )
}

describe('detailPage', () => {
  it('when data is not present: renders error component when data is empty', async () => {
    renderComponent()

    expect(screen.getByText(/404 | Page not found/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('when error is occurred: renders error component when data has an error', async () => {
    mockedUseGetCarQuery = jest.fn().mockImplementation(
      jest.fn(() => {
        return {
          error: new Error('aw shucks'),
        }
      })
    )
    renderComponent()

    expect(screen.getByText(/404 | Page not found/i)).toBeInTheDocument()
    expect(screen.getByRole('button')).toBeInTheDocument()
  })

  it('when data is present: renders car list without error', async () => {
    mockedUseGetCarQuery = jest.fn().mockImplementation(
      jest.fn(() => {
        return {
          data: { car: mockedCar1 },
        }
      })
    )
    renderComponent()
    expect(
      screen.getByRole('heading', { name: `${mockedCar1.brand} ${mockedCar1.model}` })
    ).toBeInTheDocument()
    expect(screen.getAllByRole('img')).toHaveLength(mockedCar1.media.length + 1)
  })
})
