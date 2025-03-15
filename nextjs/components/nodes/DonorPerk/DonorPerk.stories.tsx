import type { Meta, StoryObj } from '@storybook/react'
import { DonorPerk } from './DonorPerk'
import { mockDonorPerk } from '@/lib/mocks/donor'

const meta: Meta<typeof DonorPerk> = {
  title: 'Nodes/DonorPerk',
  component: DonorPerk,
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ maxWidth: '400px' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof DonorPerk>

export const Default: Story = {
  args: {
    node: mockDonorPerk,
  },
}

export const Loading: Story = {
  args: {
    loading: true,
  },
}

export const Error: Story = {
  args: {
    error: {
      message: 'Failed to load perk data',
      name: 'Error',
      stack: ''
    },
  },
}

export const NoDescription: Story = {
  args: {
    node: {
      ...mockDonorPerk,
      fieldDescription: undefined,
    },
  },
}

export const NotFound: Story = {
  args: {},
}
