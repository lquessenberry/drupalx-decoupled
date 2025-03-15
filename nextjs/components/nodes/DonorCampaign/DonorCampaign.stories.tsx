import type { Meta, StoryObj } from '@storybook/react'
import { DonorCampaign } from './DonorCampaign'
import { mockDonorCampaign } from '@/lib/mocks/donor'

const meta: Meta<typeof DonorCampaign> = {
  title: 'Nodes/DonorCampaign',
  component: DonorCampaign,
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof DonorCampaign>

export const Default: Story = {
  args: {
    node: mockDonorCampaign,
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
      message: 'Failed to load campaign data',
      name: 'Error',
      stack: ''
    },
  },
}

export const NoPackages: Story = {
  args: {
    node: {
      ...mockDonorCampaign,
      packages: { entities: [] },
    },
  },
}

export const NotFound: Story = {
  args: {},
}
