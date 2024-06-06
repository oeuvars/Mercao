import React from 'react'

type Props = {}

const page = (props: Props) => {
  return (
   <div className="flex flex-col gap-4">
      <h1 className="text-4xl sticky top-0 z-[10] px-6 py-5 bg-[#010101]/60 backdrop-blur-lg flex items-center border-b-2 border-neutral-800 justify-betwee">
         <span className='gradient-text font-satoshi-bold p-1'>Notes</span>
      </h1>
      <div className='font-satoshi-bold text-3xl flex justify-center items-center mt-20 text-neutral-100'>Coming Soon...</div>
   </div>
  )
}

export default page
