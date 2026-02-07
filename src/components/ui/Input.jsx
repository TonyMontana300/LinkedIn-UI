import React from "react";

const Input = ({ label, type = "text", name }) => {
  return (
    <div className="relative group mt-2">
      <input
        type={type}
        id={name}
        name={name}
        placeholder=""
        className="peer w-full px-3 py-3 border border-gray-300 rounded-md shadow-sm focus:ring-1 focus:outline-none focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 hover:border-gray-400"
      />
      <label
        htmlFor={name}
        className="absolute left-4 top-3 text-gray-400 text-sm pointer-events-none transition-all duration-200 ease-out group-focus-within:-top-2 group-focus-within:text-xs group-focus-within:text-blue-500 group-focus-within:bg-white group-focus-within:rounded group-hover:-top-3 group-hover:text-sm group-hover:text-gray-700 group-hover:bg-white group-hover:rounded peer-not-placeholder-shown:-top-2 peer-not-placeholder-shown:text-xs peer-not-placeholder-shown:text-blue-500 peer-not-placeholder-shown:bg-white peer-not-placeholder-shown:rounded"
      >
        {label}
      </label>
    </div>
  );
};

export default Input;
