import React from 'react'
import { NodeDonorPerk } from '@/lib/types'

interface DonorPerkProps {
  node: NodeDonorPerk
}

export function DonorPerk({ node }: DonorPerkProps) {
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
