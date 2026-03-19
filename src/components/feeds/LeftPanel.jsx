import React from 'react'
import MiniProfile from './MiniProfile'
import Stats from './Stats'
import Items from './Items'

const LeftPanel = () => {
  
  return (
    <div className='flex flex-col gap-3'>
      <MiniProfile />
      <Stats />
      <Items />
    </div>
  )
}

export default LeftPanel
