import { MemoryRouter } from 'react-router-dom'

import { testing } from '../../testing'
import { NotFoundPage } from './NotFoundPage'

const { render, screen } = testing

describe('notFoundPage', () => {
  it('should render headline and button', async () => {
    render(
      <MemoryRouter>
        <NotFoundPage />
      </MemoryRouter>
    )

    expect(screen.getByText(/404 | Page not found/i)).toBeInTheDocument()
    expect(screen.getByRole('button', { name: /Zu den Autos/i })).toBeInTheDocument()
  })
})
