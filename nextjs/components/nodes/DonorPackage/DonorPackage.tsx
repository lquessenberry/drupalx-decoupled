import React from 'react'
import { NodeDonorPackage } from '@/lib/types'
import { DonorPerk } from '../DonorPerk/DonorPerk'

interface DonorPackageProps {
  node: NodeDonorPackage
}

export function DonorPackage({ node }: DonorPackageProps) {
  const {
    title,
    fieldPackagePrice,
    fieldPackagePerks,
  } = node

  return (
    <div className="donor-package rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-2xl font-bold text-primary">
          ${Number(fieldPackagePrice).toLocaleString()}
        </div>
      </div>

      {fieldPackagePerks?.entities?.length > 0 && (
        <div className="perks-list">
          <h4 className="text-lg font-medium mb-2">Included Perks:</h4>
          <div className="space-y-4">
            {fieldPackagePerks.entities.map((perk) => (
              <DonorPerk key={perk.id} node={perk} />
            ))}
          </div>
        </div>
      )}

      <button 
        className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
        onClick={() => {
          // TODO: Implement donation flow
          console.log('Select package:', node.id)
        }}
      >
        Select Package
      </button>
    </div>
  )
}
