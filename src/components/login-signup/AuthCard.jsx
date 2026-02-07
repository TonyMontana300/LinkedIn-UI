import React from "react";

const AuthCard = ({ children }) => {
  return (
    <div className="auth-card grid grid-cols-1 md:grid-cols-2 items-stretch bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl hover:shadow-gray-400 shadow-gray-300 transition-shadow duration-300">
      {children}
    </div>
  );
};

export default AuthCard;
