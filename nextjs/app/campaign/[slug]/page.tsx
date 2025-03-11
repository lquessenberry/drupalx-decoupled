import { Suspense } from 'react'
import { getClient } from '@/lib/apollo-client'
import { DonorCampaign } from '@/components/nodes/DonorCampaign'
import { mockDonorCampaign } from '@/lib/mocks/donor'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

interface CampaignPageProps {
  params: {
    slug: string
  }
}

export default async function CampaignPage({ params }: CampaignPageProps) {
  // For MVP, we'll use mock data
  // TODO: Replace with actual GraphQL query when backend is ready
  const campaign = mockDonorCampaign

  return (
    <main className="container mx-auto px-4 py-8">
      <Suspense fallback={<LoadingSpinner />}>
        <DonorCampaign node={campaign} />
      </Suspense>
    </main>
  )
}
