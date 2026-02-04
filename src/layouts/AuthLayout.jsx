import React from 'react'
import { Outlet } from 'react-router-dom'
import AuthHeader from "../components/login-signup/AuthHeader";
import AuthVisual from '../components/login-signup/AuthVisual';
import AuthCard from '../components/login-signup/AuthCard';
import AuthFooter from '../components/login-signup/AuthFooter';

const AuthLayout = () => {
  return (
    <div className="auth-container" style={{maxWidth: "1400px", margin: "10px auto"}} >
      <AuthHeader />
        <AuthCard>
          <AuthVisual />
          <Outlet />
        </AuthCard> 
      <AuthFooter />
    </div>
  )
}

export default AuthLayout
