import React from 'react'

const AuthVisual = () => {
  return (
    <div className="auth-visual h-full w-full hidden md:flex rounded-r-xl bg-gradient-to-br from-blue-400 via-sky-500 to-blue-500">
      <div className="flex flex-col justify-center text-center gap-3 p-8 md:p-10">
        <h2 className="text-3xl md:text-4xl font-bold leading-tight tracking-tight drop-shadow-sm text-white mb-4 [textShadow:0_2px_20px_rgba(255,255,255,0.15)]">Build your personal presence</h2>
        <p className="text-white/90 md:text-base text-sm leading-relaxed [textShadow:0_2px_20px_rgba(255,255,255,0.15)]">Connect with professionals, discover opportunities, share ideas and grow your career.</p>
      </div>
    </div>
  )
}

export default AuthVisual
