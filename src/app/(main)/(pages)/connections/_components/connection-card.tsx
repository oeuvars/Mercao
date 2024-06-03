import { ConnectionTypes } from '@/lib/types'
import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import {
   Card,
   CardDescription,
   CardHeader,
   CardTitle,
 } from '@/components/ui/card'
import { Button } from '@nextui-org/button'

type Props = {
  type: ConnectionTypes
  icon: string
  title: ConnectionTypes
  description: string
  callback?: () => void
  connected: {} & any
}

const ConnectionCard = ({
  description,
  type,
  icon,
  title,
  connected,
}: Props) => {
  return (
    <Card className="flex w-full items-center justify-between border-none card-cover-two">
      <CardHeader className="flex flex-col gap-4">
        <div className="flex flex-row gap-2">
          <Image
            src={icon}
            alt={title}
            height={30}
            width={30}
            className="object-contain"
          />
        </div>
        <div>
          <CardTitle className="text-lg tracking-wide">{title}</CardTitle>
          <CardDescription className='font-satoshi-medium text-neutral-300 text-base'>{description}</CardDescription>
        </div>
      </CardHeader>
      <div className="flex flex-col items-center gap-2 p-4">
        {connected[type] ? (
          <div className="rounded-lg border-2 px-3 py-2 font-satoshi-bold text-white border-neutral-200">
            Connected
          </div>
        ) : (
          <Link
            href={
              title == 'Discord'
                ? process.env.NEXT_PUBLIC_DISCORD_REDIRECT!
                : title == 'Notion'
                ? process.env.NEXT_PUBLIC_NOTION_AUTH_URL!
                : title == 'Slack'
                ? process.env.NEXT_PUBLIC_SLACK_REDIRECT!
                : '#'
            }
            className=""
          >
            <Button className='bg-white rounded-md text-black'>
               Connect
            </Button>
          </Link>
        )}
      </div>
    </Card>
  )
}

export default ConnectionCard
