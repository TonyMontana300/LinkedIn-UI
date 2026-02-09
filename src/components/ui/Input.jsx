import React from "react";
import { useState } from "react";
import { Eye, EyeOff } from "lucide-react";

const Input = ({ label, type = "text", name, value, onChange, error }) => {
  const [showPassword, setShowPassword] = useState(false);
  const isPasswordType = type === "password";

  return (
    <div className="relative group mt-2">
      <input
        type={isPasswordType && showPassword ? "text" : type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        error={error}
        autoComplete="new-password"
        placeholder=""
        className={`peer w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400 ${error ? "border-red-500 focus:ring-red-500" : "border-gray-300 focus:ring-blue-500"}`}
      />
      <label
        htmlFor={name}
        className={`absolute left-4 top-3 text-gray-400 text-sm pointer-events-none transition-all duration-200 ease-out group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-blue-500 group-focus-within:bg-white group-focus-within:rounded group-hover:-top-3 group-hover:text-sm group-hover:text-gray-700 group-hover:bg-white group-hover:rounded peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-blue-500 peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:rounded ${error ? "text-red-500" : "text-gray-400"}`}
      >
        {label}
      </label>
      {isPasswordType && (
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-8 top-4 text-gray-400 hover:text-gray-700 focus:outline-none transition-all duration-200"
        >
          <div className="relative">
            <Eye
              className={`absolute transition-all duration-200 ${!showPassword ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
            />
            <EyeOff 
              className={`absolute transition-all duration-200 ${showPassword ? "opacity-100 scale-100" : "opacity-0 scale-75"}`}
            />
          </div>
        </button>
      )}
      {error && <span className="text-red-500 text-xs">{error}</span>}
    </div>
  );
};

export default Input;
