import React from "react";
import { Link } from "react-router-dom";

const Policy = () => {
  return (
      <p className="text-xs text-gray-800 px-2">
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
