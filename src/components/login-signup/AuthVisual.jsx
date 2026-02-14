import React from 'react'
import Lottie from 'lottie-react'
import loginAnim from "../../assets/images/Login.json"
import Login from '../../pages/Login'
import signUpAnim from "../../assets/images/Profile.json"
import SignUp from '../../pages/SignUp'

const AuthVisual = () => {
  return (
    <div className="auth-visual h-full w-full hidden md:flex rounded-r-xl bg-gradient-to-br from-blue-300 via-sky-400 to-blue-400">
      {Login ? (
          <Lottie
          animationData={loginAnim}
          autoplay
          loop
          className="inset-0 w-full h-full"
        />        
      ) : (
        SignUp && (
          <Lottie
          animationData={signUpAnim}
          autoplay
          loop
          className="inset-0 w-full h-full"
        />
        )
      )}
    </div>
  )
}

export default AuthVisual
