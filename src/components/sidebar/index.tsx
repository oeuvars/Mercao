'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from '@/components/ui/tooltip'
import { menuOptions } from '@/lib/constants'
import clsx from 'clsx'
import { Image } from '@nextui-org/image'

type Props = {}

const MenuOptions = (props: Props) => {
  const pathName = usePathname()

  return (
    <nav className="bg-[#0a0a0a] h-screen justify-between flex items-center flex-col gap-10 py-4 px-4">
      <div className="flex items-center justify-center flex-col gap-8">
        <Link
          className="flex font-bold flex-row "
          href="/"
        >
          <Image src="/merco.svg" alt="Merco" radius='none' className="h-11 rounded-none" />
        </Link>
        <div className='grid gap-5'>
          <TooltipProvider>
            {menuOptions.map((menuItem) => (
              <div key={menuItem.name}>
                <Tooltip delayDuration={0}>
                  <TooltipTrigger>
                    <Link
                      href={menuItem.href}
                      className={clsx(
                        'size-[1.9rem] flex items-center justify-center rounded-md scale-[1.5] p-[4px] cursor-pointer',
                        {
                          'card-cover text-neutral-200 rounded':
                            pathName === menuItem.href,
                        }
                      )}
                    >
                      <menuItem.Component
                        selected={pathName === menuItem.href}
                      />
                    </Link>
                  </TooltipTrigger>
                  <TooltipContent
                    side="right"
                    className="card-cover ml-2"
                  >
                    <p className='font-satoshi-medium tracking-tight text-sm'>
                      <span className='gradient-text'>{menuItem.name}</span>
                    </p>
                  </TooltipContent>
                </Tooltip>
              </div>
            ))}
          </TooltipProvider>
        </div>
      </div>
    </nav>
  )
}

export default MenuOptions
