import React from 'react'

const Button = ({ children, type = "button"}) => {
  return (
    <button type={type} className="w-full mt-4 py-3 bg-blue-600 text-white rounded-3xl font-medium hover:bg-blue-800 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200">
      {children}
    </button>
  )
}

export default Button
