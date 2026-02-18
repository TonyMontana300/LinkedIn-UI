import React from "react";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="w-full relative h-40 md:h-50 border rounded-xl">
        <img src="#" alt="Cover Image" className="w-full h-full object-cover" />
      </div>
      <div className="px-6 relative">
        <div className="-mt-20">
          <img
            src="#"
            alt="Profile Image"
            className="w-35 h-35 rounded-full border object-cover shadow-md"
          />
        </div>
      </div>
      <div className="flex justify-between">
        <div className="my-3 px-6">
          <h1 className="text-2xl font-semibold text-gray-900 hover:bg-[#EBEBEB] inline rounded-sm transition-all ease-out duration-200">
            Ayush Barman
          </h1>
          <p className="text-md text-gray-900 my-1 leading-snug w-md">
            Full-Stack Web Developer | JavaScript, Node.js, React, Next.js,
            Express, MongoDB, TailwindCSS | Building Scalable & Responsive Web
            Apps and API’s
          </p>
          <p className="text-sm text-gray-500 my-2">
            Indore, Madhya Pradesh, India .{" "}
            <Link
              to="#"
              className="text-blue-600 hover:underline font-semibold"
            >
              Contact info
            </Link>
          </p>
          <ul className="list-none flex gap-2">
            <li>
              <Link>followers</Link>
            </li>
            <li>
              <Link>connections</Link>
            </li>
          </ul>
          <ul className="flex gap-2">
            <li>
              <Link to="#">Contact info</Link>
            </li>
            <li>
              <Link to="#">Add profile section</Link>
            </li>
            <li>
              <Link to="#">Add custom button</Link>
            </li>
            <li>
              <Link to="#">Resources</Link>
            </li>
          </ul>
          <div>
            <p>Open to work</p>
            <p>Web Developers Roles</p>
            <a href="#">Show Details</a>
          </div>
        </div>
        <div>
          <p>Education</p>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
