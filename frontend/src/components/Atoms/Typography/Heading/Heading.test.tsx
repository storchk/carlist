import { axe } from 'jest-axe'

import { testing } from '../../../../testing'
import { Heading } from './Heading'

const { render, renderer } = testing
const mockText = 'Lorem Ipsum'

describe('atoms: Typography/Heading', () => {
  it('snapshot: h1', () => {
    const view = renderer(<Heading tag="h1">{mockText}</Heading>)
    expect(view).toMatchSnapshot()
  })
  it('snapshot: h2', () => {
    const view = renderer(<Heading tag="h2">{mockText}</Heading>)
    expect(view).toMatchSnapshot()
  })
  it('snapshot: h3', () => {
    const view = renderer(<Heading tag="h3">{mockText}</Heading>)
    expect(view).toMatchSnapshot()
  })
  it('snapshot: h4', () => {
    const view = renderer(<Heading tag="h4">{mockText}</Heading>)
    expect(view).toMatchSnapshot()
  })
  it('snapshot: h5', () => {
    const view = renderer(<Heading tag="h5">{mockText}</Heading>)
    expect(view).toMatchSnapshot()
  })
  it('snapshot: h6', () => {
    const view = renderer(<Heading tag="h6">{mockText}</Heading>)
    expect(view).toMatchSnapshot()
  })
  it('a11y - No violations detected', async () => {
    const { container } = render(<Heading tag="h1">{mockText}</Heading>)
    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
