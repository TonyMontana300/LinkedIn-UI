import React from 'react'

const WhiteContainer = ({children, className}) => {
  return (
    <div className={`md:pt-6 pt-4 px-6 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200 ${className}`}>
      {children}
    </div>
  )
}

export default WhiteContainer
