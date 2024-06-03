import { Image } from '@nextui-org/image'
import { FC } from 'react'

type Props = {}

const Solution = (props: Props) => {
  return (
    <section className='min-h-screen phone:w-[93%] lg:w-[80%] mx-auto bg-[#0f0f0f]'>
      <div className='flex flex-col h-full justify-center z-20'>
         <div className='badge flex phone:mx-auto tablet:mx-0 tablet:mr-auto'>
            <img src='/icons/star.svg' alt='star' className='my-auto w-6 h-6'/>
            <p className='font-satoshi-medium text-sm text-neutral-300/80 text-nowrap'>Mercao product overview</p>
         </div>
         <div className='phone:grid tablet:flex justify-between'>
            <h1 className='phone:text-4xl tablet:text-6xl phone:text-center tablet:text-left font-satoshi-bold tracking-tighter tablet:pb-5'>
               <span className='gradient-text px-2'>Discover a simple</span>
               <br />
               <span className='gradient-text px-2'>notebook solution today.</span>
            </h1>
            <div className='mt-auto mb-4 phone:text-sm tablet:text-lg text-[#9B9CA1] font-satoshi-medium tracking-tight phone:mt-5 tablet:mt-0 text-center tablet:text-right'>
               Our process in a nutshell for you workflow to be in a nutshell.
            </div>
         </div>
      </div>
      <div className='phone:mt-8 tablet:mt-20 flex flex-col phone:gap-4 tablet:gap-7'>
         <div className="mx-auto p-4 flex flex-col md:flex-row items-stretch card-cover-two rounded-xl gap-10">
            <div className="tablet:w-1/2 tablet:pl-10 tablet:pr-16 flex flex-col justify-between tablet:py-10">
               <div className="flex justify-between mb-auto">
                  <Image src='/images/icon1.svg' alt='' className='h-16' />
                  <h2 className="text-4xl font-satoshi-bold text-neutral-600 my-auto">01</h2>
               </div>
               <h3 className="text-3xl font-satoshi-bold tracking-tight text-neutral-200 pb-3 phone:pt-12 pt-0">
                  Express ideas like a human,<br /> not a machine.
               </h3>
               <p className="text-base text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nullam ut lorem quis lectus molestie.
               </p>
            </div>
            <div className="md:w-1/2 flex items-center">
               <Image src='/images/image1.png' alt='' className='w-full h-auto' />
            </div>
         </div>
         <div className="mx-auto p-4 flex flex-col md:flex-row items-stretch card-cover-two rounded-xl gap-10">
            <div className="md:w-1/2 flex items-center">
               <Image src='/images/image2.webp' alt='' className='w-full h-auto' />
            </div>
            <div className="tablet:w-1/2 tablet:pl-10 tablet:pr-16 flex flex-col justify-between tablet:py-10">
               <div className="flex justify-between mb-auto">
                  <Image src='/images/icon2.svg' alt='' className='h-16' />
                  <h2 className="text-4xl font-satoshi-bold text-neutral-600">02</h2>
               </div>
               <h3 className="text-3xl font-satoshi-bold tracking-tight text-neutral-200 pb-3 phone:pt-12 pt-0">
                  Build your workflow <br />block by block.
               </h3>
               <p className="text-base text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nullam ut lorem quis lectus molestie.
               </p>
            </div>
         </div>
         <div className="mx-auto p-4 flex flex-col md:flex-row items-stretch card-cover-two rounded-xl gap-10">
            <div className="tablet:w-1/2 tablet:pl-10 tablet:pr-16 flex flex-col justify-between tablet:py-10">
               <div className="flex justify-between mb-auto">
                  <Image src='/images/icon3.svg' alt='' className='h-16' />
                  <h2 className="text-4xl font-satoshi-bold text-neutral-600">03</h2>
               </div>
               <h3 className="text-3xl font-satoshi-bold tracking-tight text-neutral-200 pb-3 phone:pt-12 pt-0">
                  Highly featured dashboard<br /> for easy access.
               </h3>
               <p className="text-base text-neutral-500">
                  Lorem ipsum dolor sit amet, consectetur adipiscing <br /> elit. Nullam ut lorem quis lectus molestie.
               </p>
            </div>
            <div className="md:w-1/2 flex items-center">
               <Image src='/images/image3.webp' alt='' className='w-full h-auto' />
            </div>
         </div>
      </div>
    </section>
  )
}

export default Solution
