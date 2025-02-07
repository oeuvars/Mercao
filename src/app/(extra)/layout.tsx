import React from 'react'
import Footer from '../../components/global/footer'
import Navbar from './_components/navbar'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <>
      <div className="">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  )
}

export default Layout
