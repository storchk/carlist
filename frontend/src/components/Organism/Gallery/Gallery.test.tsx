import userEvent from '@testing-library/user-event'
import { axe } from 'jest-axe'

import { mockedCar1 } from '@/mocks'

import { testing } from '../../../testing'
import { Gallery } from './Gallery'
const { render, screen, renderer } = testing

const mockedImages = mockedCar1.media.map(image => image.url)

describe('organism:Gallery', () => {
  it('renders the correct number of images', () => {
    render(<Gallery images={mockedImages} />)
    const imageElements = screen.getAllByRole('img')
    expect(imageElements).toHaveLength(mockedImages.length + 1)
  })

  it('should change hero image', () => {
    render(<Gallery images={mockedImages} />)

    const imageElements = screen.getAllByRole('img')
    expect(screen.getByTestId('gallery-active-image')).toHaveAttribute('src', mockedImages[0])
    userEvent.click(imageElements[1])
    expect(screen.getByTestId('gallery-active-image')).toHaveAttribute('src', mockedImages[1])
  })

  it('snapshot', () => {
    const view = renderer(<Gallery images={mockedImages} />)
    expect(view).toMatchSnapshot()
  })

  it('a11y - No violations detected', async () => {
    const { container } = render(<Gallery images={mockedImages} />)

    await expect(axe(container)).resolves.toHaveNoViolations()
  })
})
