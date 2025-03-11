import { PayPalButtons } from '@paypal/react-paypal-js'
import { usePayment } from './PaymentProvider'

interface PayPalButtonProps {
  amount: number
  packageId: string
  onSuccess?: (details: any) => void
  onError?: (error: any) => void
}

export function PayPalButton({ amount, packageId, onSuccess, onError }: PayPalButtonProps) {
  const { createPayment } = usePayment()

  return (
    <PayPalButtons
      style={{ layout: 'vertical' }}
      createOrder={async () => {
        try {
          const { orderId } = await createPayment(amount, packageId)
          return orderId
        } catch (error) {
          onError?.(error)
          throw error
        }
      }}
      onApprove={async (data, actions) => {
        try {
          const details = await actions.order?.capture()
          onSuccess?.(details)
          return details
        } catch (error) {
          onError?.(error)
          throw error
        }
      }}
      onError={(error) => {
        console.error('PayPal Error:', error)
        onError?.(error)
      }}
    />
  )
}
