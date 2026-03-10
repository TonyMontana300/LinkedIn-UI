import React from "react";
import { Link } from "react-router-dom";

const MessageEditBtn = () => {
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
          fill="#666666"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
            fill="#666666"
          />
          <path
            d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
            fill="#666666"
          />
          <path
            d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
            fill="#666666"
          />
        </svg>
      </Link>
      <Link
        to="#"
        className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-11 h-11 flex items-center justify-center"
      >
        <svg
          fill="#666666"
          height="22px"
          width="22px"
          version="1.1"
          id="_x32_"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          viewBox="0 0 512 512"
          xml:space="preserve"
        >
          <g>
            <polygon
              class="st0"
              points="93.539,218.584 275.004,218.584 354.699,138.894 355.448,138.145 355.448,125.045 93.539,125.045 	"
            />
            <polygon
              class="st0"
              points="402.213,433.724 46.77,433.724 46.77,78.276 402.213,78.276 402.213,91.467 448.983,56.572 
		448.983,31.506 0,31.506 0,480.494 448.983,480.494 448.983,289.204 402.213,335.974 	"
            />
            <path
              class="st0"
              d="M229.358,274.708H93.539v28.062h120.476C218.602,292.858,223.932,283.312,229.358,274.708z"
            />
            <path
              class="st0"
              d="M93.539,349.539v28.062h110.935c-3.275-8.796-4.302-18.334-3.649-28.062H93.539z"
            />
            <path
              class="st0"
              d="M290.939,268.789c-15.501,15.501-55.612,80.76-40.11,96.27c15.51,15.51,80.76-24.609,96.27-40.11l63.755-63.77
		l-56.155-56.15L290.939,268.789z"
            />
            <path
              class="st0"
              d="M500.374,115.509c-15.511-15.502-40.649-15.502-56.15,0l-76.682,76.685l56.156,56.15l76.676-76.685
		C515.875,156.158,515.875,131.019,500.374,115.509z M400.166,202.361l-9.636-9.628l53.684-53.684l9.619,9.618L400.166,202.361z"
            />
          </g>
        </svg>
      </Link>
    </div>
  );
};

export default MessageEditBtn;
