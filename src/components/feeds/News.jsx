import React from "react";
import { Link } from "react-router-dom";

const News = () => {
  return (
    <div className="md:pt-3 pt-4 pb-4 bg-white rounded-md shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between items-center px-4">
        <h1 className="font-medium text-xl text-gray-900">LinkedIn News</h1>
        <Link to="#">
          <svg
            width="15px"
            height="15px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M3 3.6C3 3.26863 3.26863 3 3.6 3H20.4C20.7314 3 21 3.26863 21 3.6V17.4C21 17.7314 20.7314 18 20.4 18H16.2592C16.0938 18 15.9357 18.0683 15.8223 18.1888L12.4369 21.7858C12.2 22.0375 11.8 22.0375 11.5631 21.7858L8.17768 18.1888C8.06429 18.0683 7.90619 18 7.74076 18H3.6C3.26863 18 3 17.7314 3 17.4V3.6Z"
              stroke="#000000"
              stroke-width="1.5"
            />
            <path
              d="M12 7L13.4254 9.57457L16 11L13.4254 12.4254L12 15L10.5746 12.4254L8 11L10.5746 9.57457L12 7Z"
              stroke="#000000"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </Link>
      </div>
      <h2 className="text-gray-500 font-medium px-4 mt-2">Top Stories</h2>

      <Link to="#" className="flex flex-col px-4 hover:bg-[#EBEBEB] py-1">
        <p className="text-sm font-semibold text-gray-900">Skills are on the rise in India</p>
        <p className="text-xs text-gray-500 ">1d ago • 16,228 readers</p>
      </Link>
      <Link to="#" className="flex flex-col px-4 hover:bg-[#EBEBEB] py-1">
        <p className="text-sm font-semibold text-gray-900">US-Iran conflicts disrupts fights</p>
        <p className="text-xs text-gray-500 ">3h ago • 370 readers</p>
      </Link>
      <Link to="#" className="flex flex-col px-4 hover:bg-[#EBEBEB] py-1">
        <p className="text-sm font-semibold text-gray-900">IT firms issue West Asia advisory</p>
        <p className="text-xs text-gray-500 ">1h ago</p>
      </Link>
      <Link to="#" className="flex flex-col px-4 hover:bg-[#EBEBEB] py-1">
        <p className="text-sm font-semibold text-gray-900">NTT Data to hire 5,000 in India</p>
        <p className="text-xs text-gray-500 ">3h ago • 6,550 readers</p>
      </Link>
      <Link to="#" className="flex flex-col px-4 hover:bg-[#EBEBEB] py-1">
        <p className="text-sm font-semibold text-gray-900">Mideast conflict spills into second d...</p>
        <p className="text-xs text-gray-500 ">3h ago • 46,943 readers</p>
      </Link>
    </div>
  );
};

export default News;
