import React from 'react'
import GrowCatch from './GrowCatch'
import Invitation from './Invitation'
import Connections from './Connections'

const NetworkMain = () => {
  return (
    <div className='flex flex-col gap-3 md:gap-4'>
        <GrowCatch />
        <Invitation />
        <Connections />
    </div>
  )
}

export default NetworkMain
