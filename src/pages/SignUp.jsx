import React from "react";
import AuthTitle from "../components/login-signup/AuthTitle";
import AuthDivider from "../components/login-signup/AuthDivider";
import SocialAuth from "../components/login-signup/SocialAuth";
import SignUpForm from "../components/login-signup/SignUpForm";

const SignUp = () => {
  return (
    <>
      <div>
        <AuthTitle
          title="Make the most of your professional life"
          subtitle="Join LinkedIn today to connect with professionals and grow your career."
        />
        <SignUpForm />
        <AuthDivider />
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
