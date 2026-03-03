import React from "react";
import { Link } from "react-router-dom";

const Invitation = () => {
  return (
    <div className="md:pt-2 pt-1 px-4 pb-2 flex justify-between items-center bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <p className="text-gray-900">No pending invitations</p>
      <Link to="#" className="text-gray-800 font-medium hover:bg-[#F3F3F3] px-1 py-1 rounded-sm transition-all ease-in-out duration-200">Manage</Link>
    </div>
  );
};

export default Invitation;
