import React from "react";
import AuthTitle from "../components/login-signup/AuthTitle";
import LoginForm from "../components/login-signup/LoginForm";
import SocialAuth from "../components/login-signup/SocialAuth";
import AuthDivider from "../components/login-signup/AuthDivider";

const Login = () => {
  return (
    <>
      <div>
        <AuthTitle title="Welcome Back" />
        <LoginForm />
        <AuthDivider />
        <SocialAuth google="Continue with Google" textLink="Sign in using another account" />
      </div>
    </>
  );
};

export default Login;
