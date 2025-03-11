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
    error: new Error('Failed to load campaign data'),
  },
}

export const NoPackages: Story = {
  args: {
    node: {
      ...mockDonorCampaign,
      fieldPackages: { entities: [] },
    },
  },
}

export const NotFound: Story = {
  args: {},
}
