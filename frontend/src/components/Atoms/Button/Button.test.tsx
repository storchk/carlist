import { axe } from 'jest-axe'

import { testing } from '@/testing'
import { Button } from './Button'
import type { ButtonProps } from './Button.types'

const { render, screen, renderer } = testing
const label = 'Hello world! I am using React'

const renderComponent = (props?: Partial<ButtonProps>) =>
  render(<Button label={label} {...props} />)
describe('atoms: Button', () => {
  it('should render button with text', () => {
    renderComponent()
    const text = screen.getByText(/Hello world! I am using React/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot', () => {
    const view = renderer(<Button label={label} />)
    expect(view).toMatchSnapshot()
  })

  it('a11y - No violations detected', async () => {
    const { container } = renderComponent()
    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
