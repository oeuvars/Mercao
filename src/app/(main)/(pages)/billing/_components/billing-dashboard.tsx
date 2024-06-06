'use client'

import { useBilling } from '@/providers/billing-provider'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { SubscriptionCard } from './subscription-card'
import CreditTracker from './credits-tracker'
import { Loader2 } from 'lucide-react'

type Props = {}

const BillingDashboard = (props: Props) => {
  const { credits, tier } = useBilling()
  const [stripeProducts, setStripeProducts] = useState<any>([])
  const [loading, setLoading] = useState<boolean>(false)

  const onStripeProducts = async () => {
    setLoading(true)
    const { data } = await axios.get('/api/payment',
      {
         headers: {
            'Content-Type': 'application/json',
         }
      }
    )
    if (data) {
      setStripeProducts(data)
      setLoading(false)
    }
  }

  useEffect(() => {
    onStripeProducts()
  }, [])

  const onPayment = async (id: string) => {
    const { data } = await axios.post(
      '/api/payment',
      {
        priceId: id,
      },
      {
        headers: {
          'Content-Type': 'application/json',
        },
      }
    )
    window.location.assign(data)
  }

  return (
    <>
      {loading ? (
        <div className="absolute flex h-full w-full items-center justify-center">
          <Loader2 className='animate-spin text-neutral-500 w-10 h-10'/>
        </div>
      ) : (
        <>
          <div className="flex gap-5 px-6 py-3">
            <SubscriptionCard
              onPayment={onPayment}
              tier={tier}
              products={stripeProducts}
            />
          </div>
          <CreditTracker
            tier={tier}
            credits={parseInt(credits)}
          />
        </>
      )}
    </>
  )
}

export default BillingDashboard
