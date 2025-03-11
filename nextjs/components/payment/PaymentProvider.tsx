import React, { createContext, useContext, useEffect } from 'react'
import { PayPalScriptProvider } from '@paypal/react-paypal-js'

interface PaymentContextType {
  createPayment: (amount: number, packageId: string) => Promise<{ orderId: string }>
}

const PaymentContext = createContext<PaymentContextType | undefined>(undefined)

interface PaymentProviderProps {
  children: React.ReactNode
  clientId: string
  currency?: string
}

export function PaymentProvider({ children, clientId, currency = 'USD' }: PaymentProviderProps) {
  const initialOptions = {
    clientId,
    currency,
    intent: 'capture',
  }

  return (
    <PayPalScriptProvider options={initialOptions}>
      <PaymentContext.Provider
        value={{
          createPayment: async (amount, packageId) => {
            // TODO: Implement payment creation using GraphQL mutation
            // This will be connected to our Drupal Commerce backend
            return { orderId: 'mock-order-id' }
          },
        }}
      >
        {children}
      </PaymentContext.Provider>
    </PayPalScriptProvider>
  )
}

export function usePayment() {
  const context = useContext(PaymentContext)
  if (context === undefined) {
    throw new Error('usePayment must be used within a PaymentProvider')
  }
  return context
}
