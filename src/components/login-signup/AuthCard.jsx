import React from "react";

const AuthCard = ({children}) => {
  return (
    <div className="auth-card" style={{display: "flex", justifyContent: "center", gap: "110px", margin: "100px 0"}}>
      {children}
    </div>
  );
};

export default AuthCard;
