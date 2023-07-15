import { axe } from 'jest-axe'

import { testing } from '../../../testing'
import { Select } from './Select'
import type { SelectProps } from './Select.types'

const { render, screen, renderer } = testing
const mockOptions: SelectProps['options'] = [
  {
    label: 'Lorem Ipsum',
    value: 'lorem-ipsum',
  },
]

const component = (
  <Select
    options={mockOptions}
    id="test-id"
    label="test-label"
    name="test-name"
    onChange={jest.fn}
  />
)

const renderComponent = () => render(component)
describe('atoms: Select', () => {
  it('should render Select with text', () => {
    renderComponent()
    const text = screen.getByText(/Lorem Ipsum/i)
    expect(text).toBeInTheDocument()
  })

  it('snapshot', () => {
    const view = renderer(component)
    expect(view).toMatchSnapshot()
  })

  it('a11y - No violations detected', async () => {
    const { container } = renderComponent()
    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
