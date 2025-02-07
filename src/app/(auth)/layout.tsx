import Navbar from '@/components/global/navbar'
import { ReactNode } from 'react'
import Footer from '../../components/global/footer'

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="flex items-center justify-center min-h-[70vh] w-full font-satoshi-medium">
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
