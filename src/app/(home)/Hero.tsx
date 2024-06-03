import { Button } from '@nextui-org/button'
import Link from 'next/link'
import { FC } from 'react'

const Hero: FC = () => {
  return (
      <section className='min-h-screen'>
         <div className='background h-full'>
            <div className='absolute inset-0 border-r-inherit'>
               <img src='/assets/background-pattern.svg' alt='' className='min-h-screen'/>
            </div>
         </div>
         <div className='flex flex-col gap-7 h-full justify-center items-center -mt-[1vw] z-20 absolute w-full'>
            <div className='badge mx-auto flex justify-center'>
               <img src='/icons/star.svg' alt='star' className='my-auto w-6 h-6'/>
               <p className='font-satoshi-medium text-sm text-neutral-300/80 text-nowrap'>New Notion Integration</p>
            </div>
            <h1 className='phone:text-5xl tablet:text-6xl lg:text-8xl text-center font-satoshi-bold tracking-tighter tablet:pb-5'>
               <span className='gradient-text px-2'>Automate your worflow</span>
            </h1>
            <h1 className='text-center phone:text-sm tablet:text-lg text-[#9B9CA1] font-satoshi-medium w-[90%] mx-auto'>Visualize workflows, automate tasks with Drag-and-drop tools to turn workflows into streamlined tasks.</h1>
            <div className='phone:w-[90%] tablet:w-[50%] md:w-[33%] lg:w-[25%] flex relative'>
               <input className='rounded-full border border-neutral-700 w-full px-5 py-4 bg-transparent placeholder:text-neutral-500 text-neutral-100 placeholder:font-satoshi-regular font-satoshi-regular phone:text-base tablet:text-lg animation focus:outline-none' placeholder='something@email.com'/>
               <div className='my-auto phone:-ml-[110px] tablet:-ml-[112px]'>
                  <Link href="/sign-in">
                     <Button className='bg-gradient-to-r from-indigo-200 to-yellow-100 rounded-full h-12 outline-none font-satoshi-medium text-[#0b0e0f] overflow-hidden'>Get Started</Button>
                  </Link>
               </div>
            </div>
         </div>
      </section>
  )
}

export default Hero
