import React from "react";

const SignUpForm = () => {
  return (
    <form action="submit">
      <div>
        <label htmlFor="first-name">First Name</label>
        <input type="text" id="first-name" name="first-name" />
      </div>
      <div>
        <label htmlFor="last-name">Last Name</label>
        <input type="text" id="last-name" name="last-name" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" />
      </div>
      <p>
        By clicking Continue, you agree to LinkedIn’s User Agreement, Privacy
        Policy, and Cookie Policy.
      </p>
      <button type="submit">Agree & Join</button>
    </form>
  );
};

export default SignUpForm;
