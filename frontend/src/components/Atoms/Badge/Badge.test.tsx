import { axe } from 'jest-axe'

import { testing } from '@/testing'
import { Badge } from './Badge'
import type { BadgeProps } from './Badge.types'

const { render, screen, renderer } = testing
const label = 'Lorem Ipsum'

const renderComponent = (props?: Partial<BadgeProps>) => render(<Badge label={label} {...props} />)

describe('atoms: Badge', () => {
  it('should render badge with text', () => {
    renderComponent()
    const text = screen.getByText(/Lorem Ipsum/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot', () => {
    const view = renderer(<Badge label={label} />)
    expect(view).toMatchSnapshot()
  })
  it('a11y - No violations detected', async () => {
    const { container } = renderComponent()
    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
