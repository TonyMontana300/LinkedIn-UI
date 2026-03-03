import React from "react";
import { Link } from "react-router-dom";

const BlueBtn = ({ text, svg }) => {
  return (
    <Link
      to="#"
      className="inline-flex justify-center items-center gap-1 ring-1 hover:ring-2 ring-blue-600 px-4 py-2 w-full md:px-3 md:py-1 text-blue-600 hover:text-blue-800 rounded-full font-medium hover:bg-blue-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
    >
      {svg}
      {text}
    </Link>
  );
};

export default BlueBtn;
