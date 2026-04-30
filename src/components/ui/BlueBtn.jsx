import React from "react";
import { Link } from "react-router-dom";

const BlueBtn = ({ text, svg, linkTo, onClick, disabled, fullWidth }) => {
  const handleClick = (e) => {
    if (disabled) {
      e.preventDefault();
      return;
    }
    onClick && onClick();
  };
  return (
    <Link
      onClick={handleClick}
      to={disabled ? "#" : linkTo}
      className={`inline-flex justify-center items-center whitespace-nowrap gap-1 ring-1 ${disabled ? "opacity-50 cursor-not-allowed" : ""} hover:ring-2 ring-blue-600 px-2 py-1 md:text-base text-xs ${fullWidth ? "w-full" : "w-fit"} shrink-0 md:px-3 text-blue-600 hover:text-blue-800 rounded-full font-medium hover:bg-blue-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200`}
    >
      {svg}
      {text}
    </Link>
  );
};

export default BlueBtn;
