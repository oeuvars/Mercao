import React from 'react'
import WorkflowButton from './_components/workflow-button'
import Workflows from './_components'

type Props = {}

const Page = (props: Props) => {
  return (
    <div className="flex flex-col relative">
      <div className="text-4xl sticky top-0 z-[10] px-6 py-5 bg-[#010101]/60 backdrop-blur-lg flex items-center border-b-2 border-neutral-800 justify-between">
        <span className='font-satoshi-bold gradient-text p-1'>
          Workflows
        </span>
        <WorkflowButton />
      </div>
      <p className='font-satoshi-medium pt-8 px-6 pb-2 text-neutral-300 text-lg'>Manage & Monitor all your workflows in together.</p>
      <section className='px-4 flex flex-col gap-2'>
        <Workflows />
      </section>
    </div>
  )
}

export default Page
