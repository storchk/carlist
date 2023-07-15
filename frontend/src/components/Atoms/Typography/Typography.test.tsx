import { axe } from 'jest-axe'

import { testing } from '../../../testing'
import { Typography } from './Typography'
import type { TypographyProps } from './Typography.types'

const { render, renderer } = testing
const mockText = 'Lorem Ipsum'

const renderComponent = (props?: Partial<TypographyProps>) => render(<Typography {...props} />)

describe('atoms: Typography', () => {
  it('snapshot', () => {
    const view = renderer(<Typography>{mockText}</Typography>)
    expect(view).toMatchSnapshot()
  })
  it('a11y - No violations detected', async () => {
    const { container } = renderComponent()
    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
