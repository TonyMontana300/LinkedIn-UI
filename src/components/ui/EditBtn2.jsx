import React from "react";
import { Link } from "react-router-dom";

const EditBtn2 = () => {
  return (
    <Link
      to="#"
      className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-11 h-11 flex items-center justify-center"
    >
      <svg
        className="hover:fill-[#151617]"
        fill="#000000"
        width="25"
        height="25"
        viewBox="-5 0 32 32"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
      >
        <title>pencil</title>
        <path d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z"></path>
      </svg>
    </Link>
  );
};

export default EditBtn2;
