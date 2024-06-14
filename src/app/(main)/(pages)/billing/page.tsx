import React from 'react'
import Stripe from 'stripe'
import { currentUser } from '@clerk/nextjs'
import { db } from '@/lib/db'
import BillingDashboard from './_components/billing-dashboard'

type Props = {
  searchParams?: { [key: string]: string | undefined }
}

const Billing = async (props: Props) => {
  const { session_id } = props.searchParams ?? {
    session_id: '',
  }
  if (session_id) {
    const stripe = new Stripe(process.env.STRIPE_SECRET!, {
      typescript: true,
      apiVersion: '2023-10-16',
    })

    const session = await stripe.checkout.sessions.listLineItems(session_id)
    const user = await currentUser()
    if (user) {
      await db.user.update({
        where: {
          clerkId: user.id,
        },
        data: {
          tier: session.data[0].description,
          credits:
            session.data[0].description == 'Unlimited'
              ? 'Unlimited'
              : session.data[0].description == 'Pro'
              ? '1000'
              : '100',
        },
      })
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-4xl sticky top-0 z-[10] px-6 py-5 bg-[#010101]/60 backdrop-blur-lg flex items-center border-b-2 border-neutral-800 justify-between">
        <span className='gradient-text font-satoshi-bold p-1'>Billing</span>
      </h1>
      <BillingDashboard />
    </div>
  )
}

export default Billing
