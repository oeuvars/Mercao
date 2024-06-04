import React from 'react'
import Footer from '../(home)/Footer'
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
