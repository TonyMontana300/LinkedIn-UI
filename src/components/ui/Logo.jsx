import React from 'react'
import { Link } from 'react-router-dom'

const Logo = () => {
  return (
    <div className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]">
      <Link to="/"
        className="inline-flex items-center origin-bottom gap-1 transition-transform duration-200 ease-out hover:-translate-y-0.5">
        <span className="text-2xl font-bold text-blue-600">
          Linked
        </span>
        <span className="text-2xl font-bold bg-blue-600 text-white px-1 rounded-sm">
          In
        </span>
      </Link>
    </div>
  )
}

export default Logo
