import React from "react";
import AuthTitle from "../components/login-signup/AuthTitle";
import SocialAuth from "../components/login-signup/SocialAuth";
import SignUpForm from "../components/login-signup/SignUpForm";
import Divider from "../components/login-signup/Divider";

const SignUp = () => {
  return (
    <>
      <div>
        <AuthTitle
          title="Make the most of your professional life"
        />
        <SignUpForm />
        <Divider />
        <SocialAuth 
          google="Continue with Google"
          user="Continue as User"
          text="Already on LinkedIn?"
          textLink="Sign In"
        />
      </div>
    </>
  );
};

export default SignUp;
