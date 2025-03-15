"use client";

import React, { useState } from 'react'
import { NodeDonorPackage, DonorPerk } from '@/lib/types'
import { DonorPerk as DonorPerkComponent } from '../DonorPerk/DonorPerk'
import { LoadingSpinner } from '@/components/ui/LoadingSpinner'
import { PayPalButton } from '@/components/payment/PayPalButton'

interface PayPalDetails {
  id: string;
  status: string;
  [key: string]: any;
}

interface PayPalError {
  message: string;
  [key: string]: any;
}

interface DonorPackageProps {
  node?: NodeDonorPackage
  loading?: boolean
  error?: {
    message: string
    name: string
    stack: string
  }
  onSelect?: (packageId: string) => void
}

export function DonorPackage({ node, loading, error, onSelect }: DonorPackageProps) {
  const [paymentStatus, setPaymentStatus] = useState<'idle' | 'success' | 'error'>('idle')
  const [paymentError, setPaymentError] = useState<string | null>(null)
  const [showPayment, setShowPayment] = useState(false)

  if (loading) {
    return (
      <div className="donor-package rounded-lg border border-gray-200 p-6 min-h-[300px] flex items-center justify-center">
        <LoadingSpinner />
      </div>
    )
  }

  if (error) {
    return (
      <div className="donor-package rounded-lg border border-gray-200 p-6 min-h-[300px] flex items-center justify-center">
        <div className="text-center text-red-600">
          <h3 className="text-xl font-semibold mb-2">Error Loading Package</h3>
          <p>{error.message}</p>
        </div>
      </div>
    )
  }

  if (!node) {
    return (
      <div className="donor-package rounded-lg border border-gray-200 p-6 min-h-[300px] flex items-center justify-center">
        <div className="text-center text-gray-600">
          <h3 className="text-xl font-semibold">Package Not Found</h3>
        </div>
      </div>
    )
  }

  const {
    id,
    title,
    fieldPackagePrice,
    fieldPackagePerks,
  } = node

  const handlePaymentSuccess = (details: any) => {
    setPaymentStatus('success')
    setPaymentError(null)
    onSelect?.(id)
  }

  const handlePaymentError = (error: Error) => {
    setPaymentStatus('error')
    setPaymentError(error.message)
  }

  const hasPerks = fieldPackagePerks?.entities && fieldPackagePerks.entities.length > 0

  return (
    <div className="donor-package rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <h3 className="text-xl font-semibold">{title}</h3>
        <div className="text-2xl font-bold text-primary">
          ${fieldPackagePrice.toLocaleString()}
        </div>
      </div>

      {hasPerks && (
        <div className="perks-list">
          <h4 className="text-lg font-medium mb-2">Included Perks:</h4>
          <div className="space-y-4">
            {fieldPackagePerks.entities.map((perk: DonorPerk) => (
              <DonorPerkComponent key={perk.id} node={perk} />
            ))}
          </div>
        </div>
      )}

      {paymentError && (
        <div className="mt-4 p-3 bg-red-50 text-red-600 rounded-md text-sm">
          {paymentError}
        </div>
      )}

      {paymentStatus === 'success' ? (
        <div className="text-center text-green-600">
          <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
          <p>Your payment has been processed successfully.</p>
        </div>
      ) : paymentStatus === 'error' ? (
        <div className="text-center text-red-600 mb-4">
          <h3 className="text-xl font-semibold mb-2">Payment Error</h3>
          <p>{paymentError}</p>
        </div>
      ) : (
        <div>
          {!showPayment ? (
            <button 
              className="w-full mt-6 px-6 py-3 bg-primary text-white rounded-md hover:bg-primary-dark transition-colors"
              onClick={() => setShowPayment(true)}
            >
              Select Package
            </button>
          ) : (
            <div className="mt-6">
              <PayPalButton
                amount={fieldPackagePrice}
                onSuccess={handlePaymentSuccess}
                onError={handlePaymentError}
              />
              <button
                className="w-full mt-3 px-6 py-2 text-gray-600 hover:text-gray-800 text-sm"
                onClick={() => setShowPayment(false)}
              >
                Cancel
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
