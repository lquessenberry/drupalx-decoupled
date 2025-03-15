import { PayPalButtons } from '@paypal/react-paypal-js'
import type { OnApproveData, OnApproveActions } from '@paypal/paypal-js'

interface PayPalButtonProps {
  amount: number
  onSuccess?: (details: any) => void
  onError?: (error: Error) => void
}

export function PayPalButton({ amount, onSuccess, onError }: PayPalButtonProps) {
  return (
    <PayPalButtons
      style={{
        color: 'blue',
        shape: 'rect',
        label: 'pay',
        height: 40,
      }}
      createOrder={(data, actions) => {
        return actions.order.create({
          intent: "CAPTURE",
          purchase_units: [
            {
              amount: {
                value: amount.toString(),
                currency_code: 'USD',
              },
            },
          ],
        })
      }}
      onApprove={async (data: OnApproveData, actions: OnApproveActions) => {
        try {
          const details = await actions.order?.capture()
          onSuccess?.(details)
          return
        } catch (err) {
          const error = err instanceof Error ? err : new Error(String(err))
          onError?.(error)
        }
      }}
      onError={(err) => {
        const error = err instanceof Error ? err : new Error(String(err))
        onError?.(error)
      }}
    />
  )
}
