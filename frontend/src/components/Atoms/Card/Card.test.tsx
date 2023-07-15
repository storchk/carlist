import { axe } from 'jest-axe'

import { testing } from '@/testing'

import { Card } from './Card'
import type { CardProps } from './Card.types'

const { render, screen, renderer } = testing
const mockText = 'Lorem Ipsum'

const renderComponent = (props?: Partial<CardProps>) => render(<Card {...props}>{mockText}</Card>)
describe('atoms: Card', () => {
  it('should render button with text', () => {
    renderComponent()
    const text = screen.getByText(/Lorem Ipsum/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot', () => {
    const view = renderer(<Card>{mockText}</Card>)
    expect(view).toMatchSnapshot()
  })

  it('a11y - No violations detected', async () => {
    const { container } = renderComponent()
    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
