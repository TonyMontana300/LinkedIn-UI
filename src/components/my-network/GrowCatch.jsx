import React from "react";
import { Link } from "react-router-dom";

const GrowCatch = () => {
  return (
    <div className="px-4 flex bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <Link to="#" className="px-4 py-3 hover:bg-[#F3F3F3] text-gray-700 font-semibold transition-all duration-200 ease-in-out">Grow</Link>
      <Link to="#" className="px-4 py-3 hover:bg-[#F3F3F3] text-gray-700 font-semibold transition-all duration-200 ease-in-out">Catch Up</Link>
    </div>
  );
};

export default GrowCatch;
