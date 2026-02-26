import React from "react";
import { Link } from "react-router-dom";
import EditBtn2 from "./EditBtn2";

const EditBtn = () => {
  return (
    <div className="flex gap-1">
      <Link
        to="#"
        className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-11 h-11 flex items-center justify-center"
      >
        <svg
          width="25px"
          height="25px"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M4 12H20M12 4V20"
            stroke="#000000"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </Link>
      <EditBtn2 />
    </div>
  );
};

export default EditBtn;
