import React from 'react'
import { Progress } from '@/components/ui/progress'
import { Card, CardContent, CardTitle } from '@/components/ui/card'

type Props = {
  credits: number
  tier: string
}

const CreditTracker = ({ credits, tier }: Props) => {
  return (
    <div className="py-3 px-6">
      <Card className="p-6 border-neutral-600 border-dashed">
        <CardContent className="flex flex-col gap-6">
          <CardTitle className="font-satoshi-medium"><span className='gradient-text text-2xl'>Credit Tracker</span></CardTitle>
          <Progress
            value={
              tier == 'Free'
                ? credits * 100
                : tier == 'Unlimited'
                ? 1000
                : credits
            }
            className="w-full h-4 bg-neutral-800"
          />
          <div className="flex justify-end">
            <p>
              {credits}/
              {tier == 'Free' ? 100 : tier == 'Pro' ? 1000 : 'Unlimited'}
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

export default CreditTracker
