import React from "react";
import { Link } from "react-router-dom";

const SocialAuth = ({ google, user, text, textLink }) => {
  return (
    <div>
      <a href="#" style={{ display: "block", marginTop: "10px" }}>
        {google}
      </a>
      {user && (
        <a href="#" style={{ display: "block", marginTop: "10px" }}>
          {user}
        </a>
      )}
      {}
      {text && textLink ? (
        <span>
          {text} <Link to="/login">{textLink}</Link>
        </span>
      ) : (
        textLink && (
          <Link to="/login">
            {textLink}
          </Link>
        )
      )}
    </div>
  );
};

export default SocialAuth;
