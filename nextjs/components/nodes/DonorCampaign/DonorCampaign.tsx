import React from 'react'
import { NodeDonorCampaign } from '@/lib/types'
import { DonorPackage } from '../DonorPackage/DonorPackage'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

interface DonorCampaignProps {
  node?: NodeDonorCampaign
  loading?: boolean
  error?: Error
}

export function DonorCampaign({ node, loading, error }: DonorCampaignProps) {
  if (loading) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center text-red-600">
          <h3 className="text-xl font-semibold mb-2">Error Loading Campaign</h3>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  if (!node) {
    return (
      <div className="min-h-[400px] flex items-center justify-center">
        <div className="text-center text-gray-600">
          <h3 className="text-xl font-semibold">Campaign Not Found</h3>
        </div>
      </div>
    )
  }

  const {
    title,
    body,
    fieldCampaignGoal,
    fieldPackages,
  } = node

  return (
    <article className="donor-campaign">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {body?.processed && (
          <div 
            className="prose max-w-none mb-4"
            dangerouslySetInnerHTML={{ __html: body.processed }}
          />
        )}
      </header>

      <div className="campaign-goal mb-8">
        <h2 className="text-2xl font-semibold mb-2">Campaign Goal</h2>
        <div className="text-3xl font-bold text-primary">
          ${Number(fieldCampaignGoal).toLocaleString()}
        </div>
      </div>

      {fieldPackages?.entities?.length > 0 && (
        <div className="donor-packages">
          <h2 className="text-2xl font-semibold mb-4">Donor Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {fieldPackages.entities.map((package_) => (
              <DonorPackage key={package_.id} node={package_} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
