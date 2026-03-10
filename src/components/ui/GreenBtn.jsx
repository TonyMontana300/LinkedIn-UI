import React from "react";
import { Link } from "react-router-dom";

const GreenBtn = ({text, onClick}) => {
  return (
    <div>
      <Link
        onClick={onClick}
        to="#"
        className="w-full flex hover:bg-[#004C33] bg-[#01754F] px-4 py-2 md:px-4 md:py-1 rounded-full disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:active:scale-100 disabled:active:ring-0 text-white font-medium focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
      >
        {text}
      </Link>
    </div>
  );
};

export default GreenBtn;
