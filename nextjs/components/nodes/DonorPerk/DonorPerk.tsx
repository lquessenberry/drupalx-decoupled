import React from 'react'
import { NodeDonorPerk } from '@/lib/types'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'

interface DonorPerkProps {
  node?: NodeDonorPerk
  loading?: boolean
  error?: Error
}

export function DonorPerk({ node, loading, error }: DonorPerkProps) {
  if (loading) {
    return (
      <div className="donor-perk p-4 bg-gray-50 rounded-md min-h-[100px] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="donor-perk p-4 bg-gray-50 rounded-md min-h-[100px] flex items-center justify-center">
        <div className="text-center text-red-600">
          <p className="text-sm">{error.message}</p>
        </div>
      </div>
    )
  }

  if (!node) {
    return (
      <div className="donor-perk p-4 bg-gray-50 rounded-md min-h-[100px] flex items-center justify-center">
        <div className="text-center text-gray-600">
          <p className="text-sm">Perk Not Found</p>
        </div>
      </div>
    )
  }

  const {
    title,
    body,
  } = node

  return (
    <div className="donor-perk p-4 bg-gray-50 rounded-md">
      <h5 className="font-medium mb-2">{title}</h5>
      {body?.processed && (
        <div 
          className="prose prose-sm max-w-none text-gray-600"
          dangerouslySetInnerHTML={{ __html: body.processed }}
        />
      )}
    </div>
  )
}
