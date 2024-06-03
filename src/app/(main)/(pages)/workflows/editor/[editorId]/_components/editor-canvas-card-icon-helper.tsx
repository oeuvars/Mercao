'use client'
import React from 'react'
import { MousePointerClickIcon } from 'lucide-react'
import { EditorCanvasTypes } from '@/lib/types'
import { Image } from '@nextui-org/image'

type Props = { type: EditorCanvasTypes }

const EditorCanvasIconHelper = ({ type }: Props) => {
  switch (type) {
    case 'Email':
      return (
        <Image src="/icons/connections/mail.svg" alt='mail' width={40} height={40} className='rounded-none'/>
      )
    case 'Condition':
      return (
        <Image src="/icons/connections/git.svg" alt='mail' width={40} height={40} className='rounded-none'/>
      )
    case 'Slack':
      return (
        <Image src="/icons/connections/slack.svg" alt='mail' width={40} height={40} className='rounded-none'/>
      )
    case 'Google Drive':
      return (
        <Image src="/icons/connections/googleDrive.svg" alt='mail' width={40} height={40} className='rounded-none'/>
      )
    case 'Notion':
      return (
        <Image src="/icons/connections/notion.png" alt='mail' width={40} height={40} className='rounded-none'/>
      )
    case 'Google Calendar':
      return (
        <Image src="/icons/connections/googleCalender.svg" alt='mail' width={40} height={40} className='rounded-none'/>
      )
    case 'Trigger':
      return (
        <MousePointerClickIcon
          className="flex-shrink-0"
          size={40}
        />
      )
    case 'Action':
      return (
        <Image src="/icons/connections/lightning.svg" alt='mail' width={40} height={40} className='rounded-none'/>
      )
    case 'Wait':
      return (
        <Image src="/icons/connections/clock.svg" alt='mail' width={40} height={40} className='rounded-none'/>
      )
    default:
      return (
        <Image src="/icons/connections/discord.svg" alt='mail' width={40} height={40} className='rounded-none'/>
      )
  }
}

export default EditorCanvasIconHelper
