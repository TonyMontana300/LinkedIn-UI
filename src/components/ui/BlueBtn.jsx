import React from "react";
import { Link } from "react-router-dom";

const BlueBtn = ({text}) => {
  return (
    <Link
      to="#"
      className="ring-1 hover:ring-2 ring-blue-600 px-4 py-2 md:px-3 md:py-1 text-blue-600 hover:text-blue-800 rounded-full font-medium hover:bg-blue-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
    >
      {text}
    </Link>
  );
};

export default BlueBtn;
