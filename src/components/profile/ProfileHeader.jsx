import React from "react";
import { Link } from "react-router-dom";

const ProfileHeader = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="w-full relative h-40 md:h-50 rounded-xl">
        <img
          src="https://media.licdn.com/dms/image/v2/D5616AQHFLAjgcbNERw/profile-displaybackgroundimage-shrink_350_1400/B56ZuIhdB2JMAc-/0/1767522030526?e=1773273600&v=beta&t=lpEhP5c8Mz93iKlLOke3ZY8GRSc38qIz8xyJOTcKDIY"
          alt="Cover Image"
          className="w-full h-full object-cover"
        />
        <Link
          to="#"
          className="absolute top-5 right-5 bg-white rounded-full p-1"
        >
          <svg
            className="hover:fill-[#004182]"
            fill="#0A66C2"
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
      </div>
      <div className="px-6 relative">
        <div className="-mt-20">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHskjWs-MGpdg/profile-displayphoto-scale_400_400/B56ZuIhVWsJ8Ak-/0/1767522000929?e=1773273600&v=beta&t=tIk8REL4W4HC5Ii_-3tpY4yfTt5O6v1Q5HhERCM8ywY"
            alt="Profile Image"
            className="w-35 h-35 rounded-full object-cover shadow-md ring-white ring-4"
          />
        </div>
      </div>
      <div className="flex justify-between gap-10">
        <div className="my-3 px-6">
          <h1 className="inline-flex items-center gap-1 text-2xl font-semibold text-gray-900 hover:bg-[#EBEBEB] rounded-sm transition-all ease-out duration-200">
            Ayush Barman
            <svg
              width="24px"
              height="24px"
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
          <p className="text-md text-gray-900 my-1 leading-snug w-md">
            Full-Stack Web Developer | JavaScript, Node.js, React, Next.js,
            Express, MongoDB, TailwindCSS | Building Scalable & Responsive Web
            Apps and API’s
          </p>
          <p className="text-sm text-gray-500 my-2">
            Indore, Madhya Pradesh, India .{" "}
            <Link
              to="#"
              className="text-blue-600 hover:underline hover:text-blue-700 font-semibold"
            >
              Contact info
            </Link>
          </p>
          <div className="flex gap-2 mb-3">
            <Link className="text-blue-600 hover:underline font-semibold text-sm hover:text-blue-700">
              85 followers
            </Link>

            <Link className="text-blue-600 hover:underline font-semibold text-sm hover:text-blue-700">
              79 connections
            </Link>
          </div>
          <div className="flex gap-3 mb-6 flex-wrap">
            <Link
              to="#"
              className="px-4 py-2 md:px-4 md:py-1 rounded-full disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:active:scale-100 disabled:active:ring-0 bg-blue-600 text-white font-medium hover:bg-blue-800 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Open to
            </Link>

            <Link
              to="#"
              className="ring-1 hover:ring-2 ring-blue-600 px-4 py-2 md:px-3 md:py-1 text-blue-600 hover:text-blue-800 rounded-full font-medium hover:bg-blue-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Add Profile Section
            </Link>

            <Link
              to="#"
              className="ring-1 hover:ring-2 ring-blue-600 px-4 py-2 md:px-3 md:py-1 text-blue-600 hover:text-blue-800 rounded-full font-medium hover:bg-blue-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Add Custom Button
            </Link>

            <Link
              to="#"
              className="ring-1 hover:ring-2 hover:ring-gray-800 ring-gray-600 px-4 py-2 md:px-3 md:py-1 text-gray-700 hover:text-gray-900 rounded-full font-medium hover:bg-gray-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Resources
            </Link>
          </div>
          <div className="bg-[#DDE7F1] rounded-xl px-3 py-4 flex flex-col mb-2 w-sm relative">
            <Link to="#" className="text-gray-950 font-semibold -my-1 text-sm">
              Open to work . Recruiters only
            </Link>
            <Link to="#" className="text-sm text-gray-800">
              Web Developers Roles
            </Link>
            <Link
              to="#"
              className="-my-1 text-blue-600 hover:underline font-semibold text-sm"
            >
              Show Details
            </Link>
            <Link
              to="#"
              className="absolute top-2 right-2 hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200"
            >
              <svg
                className="hover:fill-[#151617]"
                fill="#000000"
                width="20"
                height="20"
                viewBox="-5 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>pencil</title>
                <path d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z"></path>
              </svg>
            </Link>
          </div>
        </div>
        <div className="py-5 relative">
          <Link to="#" className="flex gap-2">
            <img
              src="https://media.licdn.com/dms/image/v2/C4D0BAQEN5ak-MMOMFA/company-logo_100_100/company-logo_100_100/0/1662354967518/piemr_logo?e=1773273600&v=beta&t=ioKve_qz8RUjBfofV2c-8K-AgXDk9IojwuHEcgm3ko8"
              alt="logo"
              className="w-10 h-8"
            />
            <span className="text-gray-900 leading-tight font-semibold text-sm hover:text-blue-600 hover:underline transition-all ease-out duration-100">
              Prestige Institute of Engineering Management & Research
            </span>
          </Link>
          <Link
            to="#"
            className="absolute -top-8 right-5 bg-white hover:bg-[#F3F3F3] w-10 h-10 rounded-full p-1 flex justify-center items-center transition-all ease-in-out duration-200"
          >
            <svg
              width="25px"
              height="25px"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M916.668 273.393l-66.711 66.711-168.533-168.532 66.712-66.712c52.639-52.639 132.855-57.328 179.24-10.942 23.311 23.309 33.783 55.149 31.698 87.511-1.802 32.647-16.207 65.765-42.406 91.964z"
                fill="#FF3B30"
              />
              <path
                d="M762.348 163.22c-2.195 0-4.427-0.49-6.534-1.518-7.41-3.613-10.494-12.555-6.877-19.972 21.34-43.746 70.902-63.624 110.446-44.341 7.41 3.618 10.494 12.558 6.876 19.973-3.623 7.408-12.551 10.484-19.976 6.879-24.737-12.065-56.382 1.652-70.494 30.588-2.589 5.305-7.906 8.391-13.441 8.391z"
                fill="#FFFFFF"
              />
              <path
                d="M143.188 708.155L697.96 155.654l168.981 168.981L304.964 883.58M161.098 920.034l-97.765 38.158 34.206-101.717z"
                fill="#152B3C"
              />
              <path
                d="M240.709 708.755l-62.541 0.002-34.98-0.602-45.649 148.32 63.556 63.558 143.869-36.453 4.897-45.216 0.025-60.384-70.581 9.731z"
                fill="#FCB814"
              />
              <path
                d="M861.579 62.897c7.356 4.411 14.285 9.667 20.559 15.942 23.308 23.308 33.781 55.149 31.695 87.509-1.8 32.649-16.206 65.764-42.405 91.965l-36.552 36.552 30.159 30.159 51.631-51.631c26.2-26.201 40.605-59.316 42.407-91.965 2.087-32.359-8.388-64.201-31.696-87.509-18.021-18.023-41.167-28.236-65.798-31.022z"
                fill=""
              />
              <path
                d="M686.755 164.588l91.469 117.335c16.291 20.899 14.49 50.655-4.205 69.435L309.977 817.552l-5.013 66.028 561.977-558.945L697.96 155.654l-11.205 8.934z"
                fill=""
              />
              <path
                d="M269.107 864.233l-129.423 34.388 21.411 21.412 143.869-36.453 4.897-45.216 0.025-60.384-15.239 2.101z"
                fill=""
              />
              <path
                d="M317.969 621.444a14.888 14.888 0 0 1-10.561-4.375c-5.834-5.831-5.834-15.29 0-21.121L641.67 261.687c5.836-5.834 15.287-5.834 21.121 0 5.834 5.831 5.834 15.29 0 21.121L328.529 617.07a14.887 14.887 0 0 1-10.56 4.374z"
                fill="#FFFFFF"
              />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProfileHeader;
