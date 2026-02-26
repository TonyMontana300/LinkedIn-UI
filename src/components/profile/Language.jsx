import React from "react";
import EditBtn2 from "../ui/EditBtn2";
import { Link } from "react-router-dom";

const Language = () => {
  return (
    <div className="px-4 pt-2 pb-4 bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="border-b border-b-gray-300 pb-4 mb-2">
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-semibold text-gray-900">
            Profile Language
          </h2>
          <EditBtn2 />
        </div>
        <p className="text-sm text-gray-500 -mt-1">English</p>
      </div>

      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Public profile & URL
        </h2>
        <EditBtn2 />
      </div>
      <p className="text-sm text-gray-500 -mt-1 w-50">
        www.linkedin.com/in/ayush-barman-b24b01239
      </p>
    </div>
  );
};

export default Language;
