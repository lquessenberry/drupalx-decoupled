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

export const NoPackages: Story = {
  args: {
    node: {
      ...mockDonorCampaign,
      fieldPackages: { entities: [] },
    },
  },
}
