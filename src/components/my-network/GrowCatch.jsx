import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const GrowCatch = () => {
  const [activeTab, setActiveTab] = useState("Grow");
  return (
    <div className="px-4 flex bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <Link to="#" className={`px-4 py-3 ${activeTab === "Grow" ? "bg-[#F3F3F3] text-gray-700 border-b-2 border-green font-semibold" : "hover:bg-[#F3F3F3] text-gray-700"} font-semibold transition-all duration-200 ease-in-out`} onClick={() => setActiveTab("Grow")}>
        Grow
      </Link>
      <Link to="#" className={`px-4 py-3 ${activeTab === "Catch Up" ? "bg-[#F3F3F3] text-gray-700 border-b-2 border-green font-semibold" : "hover:bg-[#F3F3F3] text-gray-700"} font-semibold transition-all duration-200 ease-in-out`} onClick={() => setActiveTab("Catch Up")}>
        Catch Up
      </Link>
    </div>
  );
};

export default GrowCatch;
