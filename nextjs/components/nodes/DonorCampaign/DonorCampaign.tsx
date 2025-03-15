import React from 'react'
import Image from 'next/image'
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
    description,
    goalAmount,
    currentAmount,
    packages,
    image,
  } = node

  const progress = currentAmount && goalAmount
    ? (currentAmount / goalAmount) * 100
    : 0

  return (
    <article className="donor-campaign">
      <header className="mb-8">
        <h1 className="text-4xl font-bold mb-4">{title}</h1>
        {description?.processed && (
          <div 
            className="prose max-w-none mb-4"
            dangerouslySetInnerHTML={{ __html: description.processed }}
          />
        )}
        {image?.image?.url && image.image.width && image.image.height && (
          <div className="relative w-full h-[400px] mb-6">
            <Image
              src={image.image.url}
              alt={image.image.alt || title}
              fill
              className="object-cover rounded-lg shadow-lg"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              priority
            />
          </div>
        )}
      </header>

      <div className="campaign-goal mb-8">
        <h2 className="text-2xl font-semibold mb-2">Campaign Progress</h2>
        <div className="flex items-end gap-4 mb-2">
          <div className="text-3xl font-bold text-primary">
            ${Number(currentAmount || 0).toLocaleString()}
          </div>
          <div className="text-gray-600">
            of ${Number(goalAmount || 0).toLocaleString()} goal
          </div>
        </div>
        <div className="w-full h-4 bg-gray-200 rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-500 ease-out"
            style={{ width: `${Math.min(progress, 100)}%` }}
          />
        </div>
      </div>

      {packages?.entities && packages.entities.length > 0 && (
        <div className="donor-packages">
          <h2 className="text-2xl font-semibold mb-4">Donor Packages</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {packages.entities.map((package_) => (
              <DonorPackage key={package_.id} node={package_} />
            ))}
          </div>
        </div>
      )}
    </article>
  )
}
