import React from "react";
import AuthDivider from "./AuthDivider";

const LoginForm = () => {
  return (
    <form action="submit">
      <div>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" name="password" />
      </div>
      <a href="#" style={{ display: "block", marginTop: "10px" }}>
        Forget Password?
      </a>
      <button type="submit">Sign In</button>
      <AuthDivider />
      <p>
        By clicking Continue, you agree to LinkedIn’s User Agreement, Privacy
        Policy, and Cookie Policy.
      </p>
    </form>
  );
};

export default LoginForm;
