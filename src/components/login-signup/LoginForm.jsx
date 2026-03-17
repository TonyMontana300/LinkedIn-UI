import React from "react";
import { useState } from "react";
import AuthDivider from "./AuthDivider";
import Input from "../ui/Input";
import { Link } from "react-router-dom";
import Button from "../ui/Button";
import Policy from "../ui/Policy";
import { Loader } from "lucide-react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {

  const navigate = useNavigate();

  const [serverError, setServerError] = useState("");

  const [formData, setFormData] = useState({
    emailOrPhone: "",
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

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newErrors = {};

    if (!formData.emailOrPhone.trim()) {
      newErrors.emailOrPhone = "Email or Phone is required";
    }
    if (!formData.password.trim()) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    if (Object.keys(newErrors).length > 0) return;
    setIsLoading(true);

    try {
      const res = await fetch("http://localhost:5000/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.emailOrPhone,
          password: formData.password,
        })
      });

      const data = await res.json();

      if (!res.ok) {
        throw new Error(data.message);
      }

      localStorage.setItem("token", data.token);
      console.log("Login success: ", data);
      navigate("/feed");

    } catch {
      setServerError("Failed to connect with server!");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <form className="mx-5 flex flex-col gap-2" onSubmit={handleSubmit}>
      <Input
        label="Email or Phone"
        name="emailOrPhone"
        placeholder="Email or Phone"
        value={formData.emailOrPhone}
        error={errors.emailOrPhone}
        onChange={handleChange}
      />
      <Input
        label="Password"
        name="password"
        type="password"
        placeholder="Password"
        value={formData.password}
        error={errors.password}
        onChange={handleChange}
      />
      <span>
        <Link
          to="/forgot-password"
          className="text-sm text-blue-600 hover:underline font-semibold mx-1"
        >
          Forget Password?
        </Link>
      </span>
      {serverError && (
        <p className="text-red-500 text-sm mx-1 text-center">{serverError}</p>
      )}
      <Button type="submit" disabled={isLoading}>
        {isLoading && (
          <span className="relative">
            <Loader className="absolute top-1/2 -left-7 -translate-y-1/2 animate-spin [animation-duration:1.5s]" />
          </span>
        )}
        {isLoading ? "Signing in..." : "Sign in"}
      </Button>
      <AuthDivider />
      <Policy />
    </form>
  );
};

export default LoginForm;
