import React from "react";
import Divider from "./Divider";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Policy from "../ui/Policy";

const SignUpForm = () => {
  return (
    <form action="submit" className="mx-5 flex flex-col gap-2">
      <Input 
        label="Email" 
        name="email" 
        placeholder="Enter your email" />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <Policy />
      <Button>Agree & join</Button>
    </form>
  );
};

export default SignUpForm;
