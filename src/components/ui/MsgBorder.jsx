import React from "react";

const MsgBorder = ({ text }) => {
  return (
    <div className="flex items-center my-1">
      <div className="flex-1 border-b border-b-gray-300"></div>

      <span className="px-2 text-sm text-gray-500 font-semibold">{text}</span>

      <div className="flex-1 border-b border-b-gray-300"></div>
    </div>
  );
};

export default MsgBorder;
