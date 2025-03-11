import Link from 'next/link'
import { mockDonorCampaign } from '@/lib/mocks/donor'

export default async function CampaignsPage() {
  // For MVP, we'll use mock data
  // TODO: Replace with actual GraphQL query when backend is ready
  const campaigns = [mockDonorCampaign]

  return (
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Active Campaigns</h1>
      <div className="grid gap-6">
        {campaigns.map((campaign) => (
          <article 
            key={campaign.id}
            className="border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow"
          >
            <h2 className="text-2xl font-bold mb-4">
              <Link 
                href={`/campaign/${campaign.path.alias.split('/').pop()}`}
                className="text-primary hover:text-primary-dark"
              >
                {campaign.title}
              </Link>
            </h2>
            {campaign.body?.summary && (
              <p className="text-gray-600 mb-4">{campaign.body.summary}</p>
            )}
            <div className="flex justify-between items-center">
              <div className="text-lg">
                Goal: <span className="font-bold">${Number(campaign.fieldCampaignGoal).toLocaleString()}</span>
              </div>
              <Link
                href={`/campaign/${campaign.path.alias.split('/').pop()}`}
                className="px-4 py-2 bg-primary text-white rounded hover:bg-primary-dark transition-colors"
              >
                View Campaign
              </Link>
            </div>
          </article>
        ))}
      </div>
    </main>
  )
}
