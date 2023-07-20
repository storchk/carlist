import { axe } from 'jest-axe'

import { testing } from '../../../testing'
import { Badge } from './Badge'

const { render, screen, renderer } = testing
const label = 'Lorem Ipsum'

const renderComponent = () => render(<Badge label={label} />)

describe('atoms: Badge', () => {
  it('should render badge with text', () => {
    renderComponent()
    const text = screen.getByText(/Lorem Ipsum/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot | color: neutral', () => {
    const view = renderer(<Badge label={label} />)
    expect(view).toMatchSnapshot()
  })

  it('snapshot | color: primary', () => {
    const view = renderer(<Badge label={label} />)
    expect(view).toMatchSnapshot()
  })

  it('a11y - No violations detected', async () => {
    const { container } = renderComponent()
    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
