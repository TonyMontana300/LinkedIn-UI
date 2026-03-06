import React from "react";
import { Link } from "react-router-dom";

const NetworkTab = () => {
  return (
    <div className="md:pt-3 pt-4 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <h1 className="px-5 font-medium text-gray-900 border-b border-b-gray-300 pb-3">
        Manage my network
      </h1>
      <div className="flex flex-col">
        <Link
          to="#"
          className="px-4 py-3 hover:bg-[#F3F3F3] text-gray-600 font-semibold flex gap-2 items-center transition-all ease-in-out duration-200"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 7.16C17.94 7.15 17.87 7.15 17.81 7.16C16.43 7.11 15.33 5.98 15.33 4.58C15.33 3.15 16.48 2 17.91 2C19.34 2 20.49 3.16 20.49 4.58C20.48 5.98 19.38 7.11 18 7.16Z"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M16.9699 14.44C18.3399 14.67 19.8499 14.43 20.9099 13.72C22.3199 12.78 22.3199 11.24 20.9099 10.3C19.8399 9.59004 18.3099 9.35003 16.9399 9.59003"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M5.96998 7.16C6.02998 7.15 6.09998 7.15 6.15998 7.16C7.53998 7.11 8.63998 5.98 8.63998 4.58C8.63998 3.15 7.48998 2 6.05998 2C4.62998 2 3.47998 3.16 3.47998 4.58C3.48998 5.98 4.58998 7.11 5.96998 7.16Z"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M6.99994 14.44C5.62994 14.67 4.11994 14.43 3.05994 13.72C1.64994 12.78 1.64994 11.24 3.05994 10.3C4.12994 9.59004 5.65994 9.35003 7.02994 9.59003"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M12 14.63C11.94 14.62 11.87 14.62 11.81 14.63C10.43 14.58 9.32996 13.45 9.32996 12.05C9.32996 10.62 10.48 9.46997 11.91 9.46997C13.34 9.46997 14.49 10.63 14.49 12.05C14.48 13.45 13.38 14.59 12 14.63Z"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
            <path
              d="M9.08997 17.78C7.67997 18.72 7.67997 20.26 9.08997 21.2C10.69 22.27 13.31 22.27 14.91 21.2C16.32 20.26 16.32 18.72 14.91 17.78C13.32 16.72 10.69 16.72 9.08997 17.78Z"
              stroke="#666666"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          Connections
        </Link>
        <Link
          to="#"
          className="px-4 py-3 hover:bg-[#F3F3F3] text-gray-600 font-semibold flex gap-2 items-center transition-all ease-in-out duration-200"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 16 16"
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M8 7C9.65685 7 11 5.65685 11 4C11 2.34315 9.65685 1 8 1C6.34315 1 5 2.34315 5 4C5 5.65685 6.34315 7 8 7Z"
              fill="#666666"
            />
            <path
              d="M14 12C14 10.3431 12.6569 9 11 9H5C3.34315 9 2 10.3431 2 12V15H14V12Z"
              fill="#666666"
            />
          </svg>
          Following & Followers
        </Link>
        <Link
          to="#"
          className="px-4 py-3 hover:bg-[#F3F3F3] text-gray-600 font-semibold flex gap-2 items-center transition-all ease-in-out duration-200"
        >
          <svg
            fill="#666666"
            xmlns="http://www.w3.org/2000/svg"
            width="20px"
            height="20px"
            viewBox="0 0 52 52"
            enable-background="new 0 0 52 52"
            xml:space="preserve"
          >
            <g>
              <path
                d="M15.9,28c-1.4-2.1-2.1-4.5-2.1-7.2c0-4.6,1.9-8.4,4.9-10.7c-1-1.8-3-3.1-5.6-3.1c-4.4,0-6.9,3.6-6.9,7.7
		c0,2.2,0.7,4.1,2.2,5.4c0.8,0.8,1.5,1.8,1.5,2.8S9.5,24.9,7,26c-3.6,1.6-6.9,3.8-7,7.1C0.1,35.3,1.5,37,3.6,37h3.3
		c0.5,0,1-0.3,1.3-0.8c1.6-2.9,4.6-4.7,7.1-6C16.2,29.8,16.4,28.7,15.9,28z"
              />
              <path
                d="M45.1,26c-2.5-1.1-2.9-2-2.9-3.1s0.7-2.1,1.5-2.8c1.5-1.4,2.2-3.2,2.2-5.4c0-4.1-2.4-7.7-6.9-7.7
		c-2.6,0-4.6,1.3-5.7,3.1c3,2.3,4.9,6.1,4.9,10.7c0,2.7-0.7,5.1-2.1,7.2c-0.5,0.8-0.2,1.8,0.6,2.2c2.5,1.2,5.5,3.1,7.1,6
		c0.3,0.5,0.8,0.8,1.3,0.8h3.3c2.1,0,3.5-1.7,3.5-3.9C52,29.8,48.7,27.6,45.1,26z"
              />
              <path
                d="M32.7,33.3c-2.7-1.2-3.2-2.3-3.2-3.4c0-1.2,0.8-2.3,1.7-3.1c1.6-1.5,2.5-3.6,2.5-6c0-4.5-2.7-8.4-7.6-8.4
		s-7.6,3.9-7.6,8.4c0,2.4,0.9,4.5,2.5,6c0.9,0.9,1.7,2,1.7,3.1c0,1.2-0.4,2.2-3.2,3.4c-4,1.7-7.8,3.6-7.9,7.2c0,2.4,1.8,4.4,4.1,4.4
		h10.4h10.4c2.3,0,4.1-2,4.1-4.4C40.5,37,36.7,35.1,32.7,33.3z"
              />
            </g>
          </svg>
          Groups
        </Link>
        <Link
          to="#"
          className="px-4 py-3 hover:bg-[#F3F3F3] text-gray-600 font-semibold flex gap-2 items-center transition-all ease-in-out duration-200"
        >
          <svg
            height="20px"
            width="20px"
            version="1.1"
            id="_x32_"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 512 512"
            xml:space="preserve"
            fill="#666666"
          >
            <g>
              <path
                class="st0"
                d="M118.612,89.297c9.482,0,17.176-7.686,17.176-17.169v-54.96C135.788,7.686,128.094,0,118.612,0
		c-9.482,0-17.177,7.686-17.177,17.169v54.96C101.435,81.611,109.13,89.297,118.612,89.297z"
              />
              <path
                class="st0"
                d="M255.993,89.297c9.482,0,17.176-7.686,17.176-17.169v-54.96C273.168,7.686,265.474,0,255.993,0
		c-9.483,0-17.169,7.686-17.169,17.169v54.96C238.824,81.611,246.51,89.297,255.993,89.297z"
              />
              <path
                class="st0"
                d="M427.001,44.899h-2.714v27.229c0,17.038-13.861,30.906-30.914,30.906c-17.038,0-30.914-13.869-30.914-30.906
		V44.899h-75.552v27.229c0,17.038-13.87,30.906-30.914,30.906c-17.038,0-30.907-13.869-30.907-30.906V44.899h-75.56v27.229
		c0,17.038-13.869,30.906-30.914,30.906c-17.038,0-30.914-13.869-30.914-30.906V44.899h-2.698
		c-37.074,0-67.133,30.058-67.133,67.133v332.835c0,37.074,30.058,67.133,67.133,67.133h342.002
		c37.066,0,67.133-30.058,67.133-67.133V112.032C494.134,74.958,464.067,44.899,427.001,44.899z M466.643,439.771
		c0,24.716-20.029,44.753-44.745,44.753H90.103c-24.716,0-44.76-20.037-44.76-44.753V190.482h421.3V439.771z"
              />
              <path
                class="st0"
                d="M393.373,89.297c9.483,0,17.176-7.686,17.176-17.169v-54.96C410.549,7.686,402.855,0,393.373,0
		c-9.483,0-17.177,7.686-17.177,17.169v54.96C376.196,81.611,383.89,89.297,393.373,89.297z"
              />
            </g>
          </svg>
          Events
        </Link>
        <Link
          to="#"
          className="px-4 py-3 hover:bg-[#F3F3F3] text-gray-600 font-semibold flex gap-2 items-center transition-all ease-in-out duration-200"
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="#666666"
          >
            <rect x="0" fill="none" width="24" height="24" />

            <g>
              <path d="M16 8H8V6h8v2zm0 2H8v2h8v-2zm4-6v12l-6 6H6c-1.105 0-2-.895-2-2V4c0-1.105.895-2 2-2h12c1.105 0 2 .895 2 2zm-2 10V4H6v16h6v-4c0-1.105.895-2 2-2h4z" />
            </g>
          </svg>
          Pages
        </Link>
        <Link
          to="#"
          className="px-4 py-3 hover:bg-[#F3F3F3] text-gray-600 font-semibold flex gap-2 items-center transition-all ease-in-out duration-200"
        >
          <svg
            fill="#666666"
            height="20px"
            width="20px"
            version="1.2"
            baseProfile="tiny"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            viewBox="0 0 256 235"
            xml:space="preserve"
          >
            <path
              d="M250,107.6v-0.3l-19.4-34.1v47.1l-12.2,8V7.2H37.1V128l-12.2-8V73.2L5.5,107.3v122.5H128h122.5V107.3L250,107.6z M48.8,18.9
	h157.9v117.1L128,187.7l-79.2-52V18.9z M94.7,65H68.8V39.1h25.9V65z M187.3,65h-79.8V47.6h79.8V65z M187.3,97.4H68.8V80h118.5V97.4z
	 M187.3,129.9H68.8v-17.4h118.5V129.9z"
            />
          </svg>
          Newsletters
        </Link>
      </div>
    </div>
  );
};

export default NetworkTab;
