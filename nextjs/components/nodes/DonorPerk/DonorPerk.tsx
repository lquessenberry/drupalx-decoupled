import React from 'react'
import { NodeDonorPerk } from '@/lib/types'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

interface DonorPerkProps {
  node?: NodeDonorPerk
  loading?: boolean
  error?: {
      message: string;
      name: string;
      stack: string;
    }
}

export function DonorPerk({ node, loading, error }: DonorPerkProps) {
  if (loading) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="text-center text-red-600">
          <h3 className="text-xl font-semibold mb-2">Error Loading Perk</h3>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  if (!node) {
    return (
      <div className="min-h-[200px] flex items-center justify-center">
        <div className="text-center text-gray-600">
          <h3 className="text-xl font-semibold">Perk Not Found</h3>
        </div>
      </div>
    )
  }

  const {
    title,
    fieldDescription,
    fieldImage,
  } = node

  return (
    <div className="donor-perk">
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      {fieldDescription?.processed && (
        <div
          className="prose max-w-none mb-4"
          dangerouslySetInnerHTML={{ __html: fieldDescription.processed }}
        />
      )}
      {fieldImage?.image?.url && (
        <img
          src={fieldImage.image.url}
          alt={fieldImage.image.alt || title}
          className="w-full h-auto rounded-lg shadow-lg mb-6"
        />
      )}
    </div>
  )
}
