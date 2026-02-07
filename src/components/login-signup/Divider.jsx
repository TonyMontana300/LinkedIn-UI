import React from 'react'

const Divider = ({text = "or"}) => {
  return (
    <div className="flex items-center my-2 mx-6">
      <div className="flex-1 border-t border-gray-300"></div>
      <span className="px-3 text-sm bg-white text-gray-400 font-medium">{text}</span>
      <div className="flex-1 border-t border-gray-300"></div>
    </div>
  )
}

export default Divider
