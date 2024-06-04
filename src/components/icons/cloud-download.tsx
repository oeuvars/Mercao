import clsx from 'clsx'
import { CloudDownload } from 'lucide-react'
import React from 'react'

type Props = { selected: boolean }

const Templates = ({ selected }: Props) => {
  return (
    <CloudDownload className='text-[#d4d4d4]'/>
  )
}

export default Templates
