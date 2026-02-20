import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="bg-white rounded-xl px-6 pt-6 pb-7 shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <h2 className="text-xl font-semibold text-gray-900">About</h2>
      <p className="my-6 text-sm text-gray-900 relative">
        Hello everyone, My name is Ayush Barman, and I’m a Full-Stack Web
        Developer passionate about building modern, responsive, and
        user-friendly web applications...
        <Link
          to="#"
          className="absolute -top-14 -right-1 bg-white hover:bg-[#F3F3F3] w-10 h-10 rounded-full p-1 flex justify-center items-center transition-all ease-in-out duration-200"
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
      </p>
      <div className="border-2 border-[#EEEEEE] p-3 rounded-md flex items-center justify-between">
        <div>
          <p className="flex gap-2 items-center">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="#404040"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.23607 1C5.09976 1 4.06097 1.64201 3.55279 2.65836L1.14806 7.46782C0.647975 8.46799 0.745665 9.66329 1.40152 10.569L9.57018 21.8495C10.7679 23.5035 13.2321 23.5035 14.4298 21.8495L22.5985 10.569C23.2543 9.66329 23.352 8.468 22.852 7.46782L20.4472 2.65836C19.939 1.64201 18.9003 1 17.7639 1H6.23607ZM5.34165 3.55279C5.51104 3.214 5.8573 3 6.23607 3H8.67428L7.24571 8H3.11804L5.34165 3.55279ZM9.32574 8L10.7543 3H13.2457L14.6743 8H9.32574ZM14.646 10H9.35397L12 18.5996L14.646 10ZM13.929 19.1312L16.7386 10H20.5412L13.929 19.1312ZM16.7543 8L15.3257 3H17.7639C18.1427 3 18.489 3.214 18.6584 3.55279L20.882 8H16.7543ZM3.4588 10H7.26143L10.071 19.1312L3.4588 10Z"
                fill="#404040"
              />
            </svg>
            <span className="font-semibold text-gray-900">Top skills</span>
          </p>
          <ul className="flex gap-3 items-center">
            <li className="text-gray-800 text-sm ml-7">
              Web Development • HTML5 • JavaScript • Tailwind CSS • Express.js
            </li>
          </ul>
        </div>
        <Link to="#" className="hover:bg-[#F3F3F3] rounded-full h-8 w-8 flex items-center justify-center transition-all ease-in-out duration-200">
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
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
    </div>
  );
};

export default About;
