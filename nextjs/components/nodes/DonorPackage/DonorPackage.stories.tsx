import type { Meta, StoryObj } from '@storybook/react'
import { DonorPackage } from './DonorPackage'
import { mockDonorPackage } from '@/lib/mocks/donor'

const meta: Meta<typeof DonorPackage> = {
  title: 'Nodes/DonorPackage',
  component: DonorPackage,
  tags: ['autodocs'],
  argTypes: {
    onSelect: { action: 'selected' }
  }
}

export default meta
type Story = StoryObj<typeof DonorPackage>

export const Default: Story = {
  args: {
    node: mockDonorPackage,
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
      message: 'Failed to load package data',
      name: 'Error',
      stack: ''
    },
  },
}

export const NoPerks: Story = {
  args: {
    node: {
      ...mockDonorPackage,
      fieldPackagePerks: { entities: [] },
    },
  },
}

export const NotFound: Story = {
  args: {},
}
