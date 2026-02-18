import React from 'react';
import { Link } from 'react-router-dom';

const LogoIn = () => {
  return (
    <div className="opacity-0 animate-[fadeIn_0.5s_ease_forwards]">
      <Link to="/"
        className="inline-flex items-center origin-bottom gap-1 transition-transform duration-200 ease-out hover:-translate-y-0.5">
        <span className="text-4xl font-bold bg-[#0A66C2] text-white px-1 rounded-xs">
          in
        </span>
      </Link>
    </div>
  )
}

export default LogoIn
