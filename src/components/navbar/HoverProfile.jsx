import React from "react";
import { Link, useNavigate } from "react-router-dom";
import BlueBtn from "../ui/BlueBtn";
import { useAuth } from "../../hooks/useAuth.js";

const HoverProfile = () => {

  const navigate = useNavigate();
  const { user, setUser, setToken } = useAuth();

  const handleLogout = () => {
    localStorage.removeItem("token");
    setToken(null);
    setUser(null);
    navigate("/login", { replace: true });
  };

  return (
    <div className="absolute right-0 top-20 w-72 bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="border-b border-b-gray-300 px-2 pt-2 pb-3">
        <Link to="#" className="flex gap-1">
          <div className="w-full">
            <img
              className="w-14 h-14 rounded-full object-cover"
              src={user?.profileImage}
              alt="profile"
            />
          </div>
          <div>
            <h1 className="inline-flex items-center gap-1 font-medium text-gray-900">
              {user?.name || "User"}
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
            <p className="text-gray-900 font-normal mb-3">
              Full-Stack Web Developer | JavaScript, Node.js, React, Next.js,
              Express, MongoDB, TailwindCSS | Building Scalable & Responsive Web
              Apps and API’s
            </p>
          </div>
        </Link>
        <BlueBtn text="View profile" fullWidth linkTo={`/profile/${user?._id}`} />
      </div>

      <div className="border-b border-b-gray-300 px-4 pt-2 pb-3 flex flex-col gap-2">
        <h2 className="text-lg text-gray-900 font-medium">Account</h2>
        <Link
          to="#"
          className="text-gray-600 font-normal hover:underline transition-transform duration-200 ease-out hover:-translate-y-0.5"
        >
          Setting & Privacy
        </Link>
        <Link
          to="#"
          className="text-gray-600 font-normal hover:underline transition-transform duration-200 ease-out hover:-translate-y-0.5"
        >
          Help
        </Link>
        <Link
          to="#"
          className="text-gray-600 font-normal hover:underline transition-transform duration-200 ease-out hover:-translate-y-0.5"
        >
          Language
        </Link>
      </div>

      <div className="border-b border-b-gray-300 px-4 pt-2 pb-3 flex flex-col gap-2">
        <h2 className="text-lg text-gray-900 font-medium">Manage</h2>
        <Link
          to="#"
          className="text-gray-600 font-normal hover:underline transition-transform duration-200 ease-out hover:-translate-y-0.5"
        >
          Posts & Activity
        </Link>
        <Link
          to="#"
          className="text-gray-600 font-normal hover:underline transition-transform duration-200 ease-out hover:-translate-y-0.5"
        >
          Job Posting Account
        </Link>
      </div>
      <button
        onClick={(e) => {
          e.stopPropagation();
          handleLogout();
        }}
        className="flex pb-3 pt-2 px-4 font-normal hover:underline text-gray-600"
      >
        Sign Out
      </button>
    </div>
  );
};

export default HoverProfile;
