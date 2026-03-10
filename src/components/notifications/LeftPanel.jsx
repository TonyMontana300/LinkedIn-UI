import React from "react";
import MiniProfile from "../feeds/MiniProfile";
import { Link } from "react-router-dom";

const LeftPanel = () => {
  return (
    <div className="flex flex-col gap-3">
      <MiniProfile />
      <div className="flex flex-col gap-1 bg-white rounded-xl p-4 shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
        <p className="font-medium text-gray-900">Manage Your Notification</p>
        <Link to="#" className="text-blue-600 text-sm font-semibold hover:underline">View Settings</Link>
      </div>
    </div>
  );
};

export default LeftPanel;
