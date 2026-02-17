import React from "react";
import { Link } from "react-router-dom";

const Policy = ({className}) => {
  return (
      <p className={`${className} text-xs text-gray-800 px-2 pt-3 md:py-0 text-center md:text-left`}>
        By clicking Continue, you agree to LinkedIn’s{" "}
        <Link to="#" className="text-blue-700 hover:underline font-semibold">
          User Agreement
        </Link>
        ,{" "}
        <Link to="#" className="text-blue-700 hover:underline font-semibold">
          Privacy Policy
        </Link>
        , and{" "}
        <Link to="#" className="text-blue-700 hover:underline font-semibold">
          Cookie Policy
        </Link>
        .
      </p>
  );
};

export default Policy;
