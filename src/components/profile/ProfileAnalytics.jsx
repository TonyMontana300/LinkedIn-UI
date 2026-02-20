import React from "react";
import { Link } from "react-router-dom";

const ProfileAnalytics = () => {
  return (
    <div className="bg-white rounded-xl pt-6 shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="px-6 border-b-2 border-b-[#EEEEEE]">
        <h2 className="text-xl font-semibold text-gray-900">Analytics</h2>
        <p className="flex gap-1 items-center text-sm text-gray-600 mb-4">
          <svg
            width="18px"
            height="18px"
            viewBox="0 0 24 24"
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.75 12C9.75 10.7574 10.7574 9.75 12 9.75C13.2426 9.75 14.25 10.7574 14.25 12C14.25 13.2426 13.2426 14.25 12 14.25C10.7574 14.25 9.75 13.2426 9.75 12Z"
              fill="#666666"
            />
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2 12C2 13.6394 2.42496 14.1915 3.27489 15.2957C4.97196 17.5004 7.81811 20 12 20C16.1819 20 19.028 17.5004 20.7251 15.2957C21.575 14.1915 22 13.6394 22 12C22 10.3606 21.575 9.80853 20.7251 8.70433C19.028 6.49956 16.1819 4 12 4C7.81811 4 4.97196 6.49956 3.27489 8.70433C2.42496 9.80853 2 10.3606 2 12ZM12 8.25C9.92893 8.25 8.25 9.92893 8.25 12C8.25 14.0711 9.92893 15.75 12 15.75C14.0711 15.75 15.75 14.0711 15.75 12C15.75 9.92893 14.0711 8.25 12 8.25Z"
              fill="#666666"
            />
          </svg>
          Private to you
        </p>
        <ul className="flex justify-between gap-12 pb-4">
          <li className="flex flex-col">
            <Link
              to="#"
              className="flex gap-2 items-center font-semibold text-gray-900 hover:underline hover:text-blue-600 transition-all duration ease-out duration-200"
            >
              <svg
                width="25px"
                height="25px"
                viewBox="0 0 24 24"
                fill="#404040"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              4 profile views
            </Link>
            <span className="ml-8 text-sm text-gray-900">
              Discover who's viewed your profile.
            </span>
          </li>
          <li className="flex flex-col">
            <Link
              to="#"
              className="flex gap-2 items-center font-semibold text-gray-900 hover:underline hover:text-blue-600 transition-all duration ease-out duration-200"
            >
              <svg
                fill="#404040"
                width="23px"
                height="23px"
                viewBox="0 0 1920 1920"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M746.667 106.667H1173.33V1493.33H746.667V106.667ZM533.333 533.333H106.667V1493.33H533.333V533.333ZM1920 1706.67H0V1824H1920V1706.67ZM1813.33 746.667H1386.67V1493.33H1813.33V746.667Z" />
              </svg>
              38 post impressions
            </Link>
            <span className="ml-8 text-sm text-gray-900">
              Check out who's engaging with your posts.
            </span>
          </li>
          <li className="flex flex-col">
            <Link
              to="#"
              className="flex gap-2 items-center font-semibold text-gray-900 hover:underline hover:text-blue-600 transition-all duration ease-out duration-200"
            >
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14.9536 14.9458L21 21M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                  stroke="#000000"
                  stroke-width="2"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              5 search appearances
            </Link>
            <span className="ml-8 text-sm text-gray-900">
              See how often you appear in search results.
            </span>
          </li>
        </ul>
      </div>
      <Link to="#" className="flex justify-center items-center gap-1 py-2 hover:bg-[#F3F3F3] w-full hover:text-gray-900 font-semibold text-gray-800">
        Show all Analytics
        <svg
          width="20px"
          height="20px"
          viewBox="0 0 24 24"
          fill="#181818"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M13.4697 5.46967C13.7626 5.17678 14.2374 5.17678 14.5303 5.46967L20.5303 11.4697C20.8232 11.7626 20.8232 12.2374 20.5303 12.5303L14.5303 18.5303C14.2374 18.8232 13.7626 18.8232 13.4697 18.5303C13.1768 18.2374 13.1768 17.7626 13.4697 17.4697L18.1893 12.75H4C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25H18.1893L13.4697 6.53033C13.1768 6.23744 13.1768 5.76256 13.4697 5.46967Z"
            fill="#1C274C"
          />
        </svg>
      </Link>
    </div>
  );
};

export default ProfileAnalytics;
