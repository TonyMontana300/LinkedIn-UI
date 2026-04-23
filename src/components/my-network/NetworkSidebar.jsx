import React from 'react'
import NetworkTab from './NetworkTab'
import Footer from '../layout/Footer'

const NetworkSidebar = () => {
  return (
    <div className='hidden md:flex flex-col gap-3'>
      <NetworkTab />
      <Footer />
    </div>
  )
}

export default NetworkSidebar
