import React from "react";
import { Link } from "react-router-dom";

const AuthHeader = () => {
  return (
    <header className="auth-header py-6 px-6 max-w-6xl mx-auto mb-2">
      <Link to="/landing"
        className="inline-flex items-center origin-bottom gap-1 transition-transform duration-200 ease-out hover:-translate-y-0.5">
        <span className="text-2xl font-bold text-blue-600">
          Linked
        </span>
        <span className="text-2xl font-bold bg-blue-600 text-white px-1 rounded-sm">
          In
        </span>
      </Link>
    </header>
  );
};

export default AuthHeader;
