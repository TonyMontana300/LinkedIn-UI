import React from "react";
import { Outlet } from "react-router-dom";
import AuthHeader from "../components/login-signup/AuthHeader";
import AuthVisual from "../components/login-signup/AuthVisual";
import AuthCard from "../components/login-signup/AuthCard";
import AuthFooter from "../components/login-signup/AuthFooter";

const AuthLayout = () => {
  return (
    <div className="auth-wrapper bg-gray-100 min-h-screen">
      <AuthHeader />
      <div className="auth-layout px-6 py-4 max-w-250 w-full mx-auto min-h-[calc(100vh-142px)]">
        <AuthCard>
          <AuthVisual />
          <Outlet />
        </AuthCard>
      </div>
      <AuthFooter />
    </div>
  );
};

export default AuthLayout;
