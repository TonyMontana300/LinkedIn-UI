import React from 'react'
import MiniProfile from '../feeds/MiniProfile'
import Footer from '../layout/Footer'
import CTATab from './CTATab'
import { Link } from 'react-router-dom'

const JobsSidebar = () => {
  return (
    <div className='flex flex-col gap-3'>
      <MiniProfile />
      <CTATab />
      <Footer />
    </div>
  )
}

export default JobsSidebar
