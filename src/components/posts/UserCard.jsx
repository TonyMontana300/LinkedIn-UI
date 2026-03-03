import React from "react";
import { Link } from "react-router-dom";
import BlueBtn from "../ui/BlueBtn";

const UserCard = () => {
  return (
    <div className="cursor-pointer bg-white rounded-md shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="w-full rounded-md">
        <img
          src="https://media.licdn.com/dms/image/v2/D5616AQHFLAjgcbNERw/profile-displaybackgroundimage-shrink_350_1400/B56ZuIhdB2JMAc-/0/1767522030526?e=1773273600&v=beta&t=lpEhP5c8Mz93iKlLOke3ZY8GRSc38qIz8xyJOTcKDIY"
          alt="Cover Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="mx-15 relative">
        <div className="-mt-5">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHskjWs-MGpdg/profile-displayphoto-scale_400_400/B56ZuIhVWsJ8Ak-/0/1767522000929?e=1773273600&v=beta&t=tIk8REL4W4HC5Ii_-3tpY4yfTt5O6v1Q5HhERCM8ywY"
            alt="Profile Image"
            className="w-18 h-18 rounded-full object-cover shadow-md"
          />
        </div>
      </div>
      <div className="px-4 mt-2 mb-4">
        <Link to="#" className="flex flex-col items-center">
          <h1 className="inline-flex items-center gap-1 font-medium text-gray-900">
            Ayush Barman
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
          <p className="text-sm text-gray-500 leading-snug text-center mb-3">
            Full-Stack Web Developer | JavaScript, Node.js, React, Next.js...
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
        />
      </div>
    </div>
  );
};

export default UserCard;
