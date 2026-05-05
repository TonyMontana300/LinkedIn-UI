import React from "react";
import { Link } from "react-router-dom";

const LandingBlueBtn = ({ text, LinkTo }) => {
  return (
    <Link
      to={LinkTo}
      className="active:ring-1 border border-solid border-blue-500 font-semibold text-blue-700 rounded-full md:px-6 px-4 md:py-3 py-2 w-fit transition-all duration-200 ease-in-out hover:bg-blue-100 hover:text-blue-800"
    >
      {text}
    </Link>
  );
};

export default LandingBlueBtn;
