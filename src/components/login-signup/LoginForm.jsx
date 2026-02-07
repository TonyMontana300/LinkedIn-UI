import React from "react";
import AuthDivider from "./AuthDivider";
import Input from "../ui/Input";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Policy from "../ui/Policy";

const LoginForm = () => {
  return (
    <form action="submit" className="mx-5 flex flex-col gap-2">
      <Input
        label="Email or Phone"
        name="emailOrPhone"
        placeholder="Email or Phone"
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
      />
      <span>
        <Link
          to="/forgot-password"
          className="text-sm text-blue-600 hover:underline font-semibold mx-1"
        >
          Forget Password?
        </Link>
      </span>
      <Button>Sign in</Button>
      <AuthDivider />
      <Policy />
    </form>
  );
};

export default LoginForm;
