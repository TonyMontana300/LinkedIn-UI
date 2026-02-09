import React from 'react'

const Button = ({ children, type = "button", disabled}) => {
  return (
    <button type={type} disabled={disabled} className="w-full mt-4 py-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:active:scale-100 disabled:active:ring-0 bg-blue-600 text-white rounded-3xl font-medium hover:bg-blue-800 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200">
      {children}
    </button>
  )
}

export default Button
