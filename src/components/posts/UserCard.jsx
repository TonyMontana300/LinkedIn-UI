import React from "react";
import { Link } from "react-router-dom";
import BlueBtn from "../ui/BlueBtn";
import cover from "../../assets/images/cover.jfif";

const UserCard = ({ user }) => {
  return (
    <div className="cursor-pointer h-full flex flex-col bg-white rounded-md shadow-sm overflow-hidden hover:shadow-lg hover:-translate-y-0.5 hover:shadow-gray-300 shadow-gray-300 transition-all duration-200">
      <div className="w-full rounded-md">
        <img
          src={user.coverImage || cover}
          alt="Cover Image"
          className="w-full h-20 object-cover"
        />
      </div>
      <div className="flex justify-center">
        <div className="-mt-4 rounded-full border-2 border-white">
          <img
            src={user.profileImage}
            alt="Profile Image"
            className="w-18 h-18 rounded-full object-cover shadow-md"
          />
        </div>
      </div>
      <div className="px-3 mt-2 mb-3 flex flex-col justify-between grow">
        <Link to="#" className="flex flex-col items-center gap-1">
          <h1 className="inline-flex items-center gap-1 text-sm md:text-base font-medium text-gray-900">
            {user.name}
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
              <path
                d="M7.75 12L10.58 14.83L16.25 9.17004"
                stroke="#292D32"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </h1>
          <p className="text-xs md:text-sm text-gray-500 leading-snug text-center mb-3 line-clamp-2">
            {user.headline || "Software Developer at XYZ Company"}
          </p>
        </Link>
        <BlueBtn
          svg={
            <svg
              width="18px"
              height="18px"
              viewBox="0 0 16 16"
              fill="#0A66C2"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
                fill="#0A66C2"
              />
              <path
                d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
                fill="#0A66C2"
              />
            </svg>
          }
          text="Connect"
          fullWidth
        />
      </div>
    </div>
  );
};

export default UserCard;
