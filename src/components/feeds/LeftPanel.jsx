import React from 'react'
import MiniProfile from './MiniProfile'
import Stats from './Stats'
import Items from './Items'

const LeftPanel = () => {
  
  return (
    <div className='md:flex md:flex-col md:gap-3 hidden'>
      <MiniProfile />
      <Stats />
      <Items />
    </div>
  )
}

export default LeftPanel
