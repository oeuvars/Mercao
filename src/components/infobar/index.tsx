'use client'
import React, { useEffect } from 'react'
import { Book, Headphones, Search } from 'lucide-react'
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip'
import { UserButton, useClerk } from '@clerk/nextjs'
import { useBilling } from '@/providers/billing-provider'
import { onPaymentDetails } from '@/app/(main)/(pages)/billing/_actions/payment-connections'
import { dark } from '@clerk/themes'

type Props = {}

const InfoBar = (props: Props) => {
  const { credits, tier, setCredits, setTier } = useBilling()

  const onGetPayment = async () => {
    const response = await onPaymentDetails()
    if (response) {
      setTier(response.tier!)
      setCredits(response.credits!)
    }
  }

  useEffect(() => {
    onGetPayment()
  }, [])

  const { signOut } = useClerk();

  return (
    <div className="flex flex-row justify-end gap-6 items-center px-4 w-full bg-[#0a0a0a]">
      <h1 className='mr-auto py-5 text-3xl font-satoshi-bold tracking-tight'>
        <span className='gradient-text -ml-4'>Mercao</span>
      </h1>
      <span className="flex items-center gap-2 font-bold">
        <p className="text-sm font-satoshi-regular tracking-wider text-neutral-400">Credits</p>
        {tier == 'Unlimited' ? (
          <span>Unlimited</span>
        ) : (
          <span>
            {credits}/{tier == 'Free' ? '100' : tier == 'Pro' && '1000'}
          </span>
        )}
      </span>
      <span className="flex items-center rounded-full bg-muted px-4 gap-5">
        <Search />
        <input
          placeholder="Quick Search"
          className="border-none rounded-md bg-neutral-900 border-2 border-neutral-50 py-2 px-5 font-satoshi-bold placeholder:font-satoshi-medium focus:outline-none focus:outline-neutral-700"
        />
      </span>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Headphones />
          </TooltipTrigger>
          <TooltipContent className="card-cover mt-3">
            <p className='font-satoshi-medium text-sm'>
              <span className='gradient-text'>Contact Support</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <TooltipProvider>
        <Tooltip delayDuration={0}>
          <TooltipTrigger>
            <Book />
          </TooltipTrigger>
          <TooltipContent className="card-cover mt-3">
            <p className='font-satoshi-medium text-sm'>
              <span className='gradient-text'>Guide</span>
            </p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
      <UserButton appearance={{ baseTheme: dark }} afterSignOutUrl='/' />
    </div>
  )
}

export default InfoBar
