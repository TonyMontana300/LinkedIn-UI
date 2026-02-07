import React from 'react'

const AuthTitle = ({title}) => {
  return (
    <div className='auth-title mt-4 mb-5 mx-5'>
      <h1 className="text-2xl md:text-3xl font-semibold text-gray-900 tracking-tight">{title}</h1>
    </div>
  )
}

export default AuthTitle
