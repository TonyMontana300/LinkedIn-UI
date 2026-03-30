import React from "react";
import { Link } from "react-router-dom";

const BlueBtn = ({ text, svg, linkTo, onClick, disabled }) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick && onClick();
  }
  return (
    <div>
      <Link
        onClick={handleClick}
        to={disabled ? "#" : linkTo}
        className={`flex justify-center items-center gap-1 ring-1 ${disabled ? "opacity-50 cursor-not-allowed" : ""} hover:ring-2 ring-blue-600 px-4 py-2 w-full md:px-3 md:py-1 text-blue-600 hover:text-blue-800 rounded-full font-medium hover:bg-blue-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200`}
      >
        {svg}
        {text}
      </Link>
    </div>
  );
};

export default BlueBtn;
