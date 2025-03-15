import Link from 'next/link'
import Image from 'next/image'
import { mockDonorCampaign } from '@/lib/mocks/donor'

export default async function CampaignsPage() {
  // For MVP, we'll use mock data
  // TODO: Replace with actual GraphQL query when backend is ready
  const campaigns = [mockDonorCampaign]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-8">Active Campaigns</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {campaigns.map((campaign) => (
          <div
            key={campaign.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">
                <Link
                  href={`/campaigns/${campaign.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  {campaign.title}
                </Link>
              </h2>
              {campaign.description?.summary && (
                <p className="text-gray-600 mb-4">{campaign.description.summary}</p>
              )}
              <div className="flex justify-between items-center">
                <div className="text-sm text-gray-500">
                  Goal: ${campaign.goalAmount?.toLocaleString()}
                </div>
                <Link
                  href={`/campaigns/${campaign.id}`}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
                >
                  View Campaign
                </Link>
              </div>
            </div>
            {campaign.image?.image?.url && (
              <Image
                src={campaign.image.image.url}
                alt={campaign.image.image.alt || campaign.title}
                className="w-full h-auto rounded-lg shadow-lg mb-6"
                width={500}
                height={300}
              />
            )}
          </div>
        ))}
      </div>
    </div>
  )
}
