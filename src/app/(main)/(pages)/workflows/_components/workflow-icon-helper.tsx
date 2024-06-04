'use client'
import React from 'react'
import { MousePointerClickIcon } from 'lucide-react'
import { Image } from '@nextui-org/image'

type Props = { type: string }

const WorkflowIconHelper = ({ type }: Props) => {
  switch (type) {
    case 'Email':
      return (
        <Image src="/icons/connections/mail.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'Condition':
      return (
        <Image src="/icons/connections/git.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'AI':
      return (
        <Image src="/icons/connections/AI.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'Slack':
      return (
        <Image src="/icons/connections/slack.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'Google Drive':
      return (
        <Image src="/icons/connections/googleDrive.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'Notion':
      return (
        <Image src="/icons/connections/notion.png" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'Custom Webhook':
      return (
        <Image src="/icons/connections/webhook.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'Google Calendar':
      return (
        <Image src="/icons/connections/googleCalender.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'Trigger':
      return (
        <MousePointerClickIcon className="flex-shrink-0 rounded-none w-10 h-10" />
      )
    case 'Action':
      return (
        <Image src="/icons/connections/lightning.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    case 'Wait':
      return (
        <Image src="/icons/connections/clock.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
    default:
      return (
        <Image src="/icons/connections/discord.svg" alt='mail' radius='none' className='rounded-none w-10 h-10'/>
      )
  }
}

export default WorkflowIconHelper
