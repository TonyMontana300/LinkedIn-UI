import React from 'react'
import { Link } from 'react-router-dom'

const Stats = () => {
  return (
    <div className="md:pt-4 pt-4 px-4 pb-4 flex flex-col gap-2 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <Link to="#" className='flex justify-between text-xs text-gray-900 font-semibold hover:underline transition-transform duration-200 ease-out hover:-translate-y-0.5'>Profile viewers <span className='text-blue-700'>2</span></Link>
      <Link to="#" className='flex justify-between text-xs text-gray-900 font-semibold hover:underline transition-transform duration-200 ease-out hover:-translate-y-0.5'>Post impressions <span className='text-blue-700'>845</span></Link>
    </div>
  )
}

export default Stats
