import React from "react";
import { Link } from "react-router-dom";

const BlackBtn = ({ svg, text, onClick }) => {
  return (
    <Link
      onClick={onClick}
      to="#"
      className="ring-1 w-fit shrink-0 inline-flex items-center whitespace-nowrap gap-1 hover:ring-2 hover:ring-gray-800 ring-gray-500 px-3 py-1 md:px-4 text-xs md:text-base text-gray-700 hover:text-gray-900 rounded-full font-medium hover:bg-gray-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
    >
      {svg}
      {text}
    </Link>
  );
};

export default BlackBtn;
