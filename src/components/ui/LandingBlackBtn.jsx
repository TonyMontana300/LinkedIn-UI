import React from "react";
import { Link } from "react-router-dom";

const LandingBlackBtn = ({key, text, LinkTo}) => {
  return (
    <Link
      key={key}
      to={LinkTo}
      className="border border-solid border-gray-500 font-semibold text-gray-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:border-gray-800 hover:text-gray-900 hover:bg-gray-200 active:ring-1"
    >
      {text}
    </Link>
  );
};

export default LandingBlackBtn;
