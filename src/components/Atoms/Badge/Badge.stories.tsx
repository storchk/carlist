import type { Meta, StoryObj } from '@storybook/react'

import { Badge } from './Badge'
import type { BadgeProps } from './Badge.types'

export default {
  title: 'Atoms/Badge',
  component: Badge,
  args: {
    label: 'Badge',
  },
} as Meta

type Story = StoryObj<BadgeProps>

export const Primary: Story = {
  render: props => <Badge variant="primary" {...props} />,
}
export const Secondary: Story = {
  render: props => <Badge variant="secondary" {...props} />,
}
