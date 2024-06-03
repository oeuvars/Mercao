'use client'
import React from 'react'

type Props = {
  onPayment(id: string): void
  products: any[]
  tier: string
}

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Button } from '@nextui-org/button'

export const SubscriptionCard = ({ onPayment, products, tier }: Props) => {
  console.log(products)
  return (
    <section className="flex w-full justify-center md:flex-row flex-col gap-6">
      {products &&
        products.map((product: any) => (
          <Card
            className="p-3 border-neutral-600 border-dashed"
            key={product.id}
          >
            <CardHeader>
              <CardTitle className='font-satoshi-bold text-xl'><span className='gradient-text'>{product.nickname}</span></CardTitle>
            </CardHeader>
            <CardContent className="flex flex-col gap-5">
              <CardDescription className='font-satoshi-medium text-neutral-400'>
                {product.nickname == 'Unlimited'
                  ? 'Enjoy a monthly torrent of credits flooding your account, empowering you to tackle even the most ambitious automation tasks effortlessly.'
                  : product.nickname == 'Pro'
                  ? 'Experience a monthly surge of credits to supercharge your automation efforts. Ideal for small to medium-sized projects seeking consistent support.'
                  : product.nickname == 'Free' &&
                    "Get a monthly wave of credits to automate your tasks with ease. Perfect for starters looking to dip their toes into Aura's automation capabilities."}
              </CardDescription>
              <div className="flex justify-between font-satoshi-medium">
                <p>
                  {product.nickname == 'Free'
                    ? '100'
                    : product.nickname == 'Pro'
                    ? '1000'
                    : product.nickname == 'Unlimited' && 'Unlimited'}{' '}
                  credits
                </p>
                <span className="font-satoshi-bold gradient-text px-1">
                  {product.nickname == 'Free'
                    ? '0'
                    : product.nickname == 'Pro'
                    ? '29.99'
                    : product.nickname == 'Unlimited' && '49.99'}
                  &nbsp;₹/mo
                </span>
              </div>
              {product.nickname == tier ? (
                <Button
                  disabled
                  radius='sm'
                >
                  Active
                </Button>
              ) : (
                <Button
                  onClick={() => onPayment(product.id)}
                  radius='sm'
                  className={product.nickname === 'Pro' ? 'bg-gradient-to-r from-indigo-200 to-yellow-100 text-black font-satoshi-medium' : 'bg-neutral-800'}
                >
                  Purchase
                </Button>
              )}
            </CardContent>
          </Card>
        ))}
    </section>
  )
}
