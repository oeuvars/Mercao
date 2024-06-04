import React from 'react'

type Props = { children: React.ReactNode }

const Layout = ({ children }: Props) => {
  return (
    <div className="border-l-2 border-t-2 rounded-tl-md pb-20 h-screen border-neutral-800 rounded-l-2xl overflow-scroll w-full">
      {children}
    </div>
  )
}

export default Layout
