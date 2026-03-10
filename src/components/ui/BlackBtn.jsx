import React from "react";
import { Link } from "react-router-dom";

const BlackBtn = ({ svg, text, onClick }) => {
  return (
    <div>
      <Link
        onClick={onClick}
        to="#"
        className="ring-1 w-full inline-flex items-center gap-1 hover:ring-2 hover:ring-gray-800 ring-gray-500 px-4 py-2 md:px-4 md:py-1 text-gray-700 hover:text-gray-900 rounded-full font-medium hover:bg-gray-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
      >
        {svg}
        {text}
      </Link>
    </div>
  );
};

export default BlackBtn;
