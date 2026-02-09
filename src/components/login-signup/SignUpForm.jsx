import React from "react";
import { useState } from "react";
import Divider from "./Divider";
import Input from "../ui/Input";
import Button from "../ui/Button";
import Policy from "../ui/Policy";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const SignUpForm = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    setErrors({
      ...errors,
      [e.target.name]: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.email.trim()) {
      newErrors.email = "Email or Phone is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setIsLoading(true);

    setTimeout(() => {
      console.log(formData);
      setIsLoading(false);
      navigate("/login");
    }, 1500);
  };

  return (
    <form className="mx-5 flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        label="Email or Phone"
        name="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={handleChange}
        error={errors.email}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        onChange={handleChange}
        error={errors.password}
      />
      <Policy />
      <Button type="submit" disabled={isLoading}>
        {isLoading && (
          <span className="relative">
            <Loader className="absolute top-1/2 -left-7 -translate-y-1/2 animate-spin [animation-duration:1.5s]" />
          </span>
        )}
        {isLoading ? "Creating account..." : "Agree & Join"}
      </Button>
    </form>
  );
};

export default SignUpForm;
