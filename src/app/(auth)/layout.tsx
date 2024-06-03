import Navbar from '@/components/global/navbar'
import React from 'react'
import Footer from '../(home)/Footer'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[88vh] w-full font-satoshi-medium">
        <div className='background h-full'>
          <div className='absolute inset-0 border-r-inherit'>
              <img src='/assets/background-pattern.svg' alt='' className='min-h-screen'/>
          </div>
        </div>
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
