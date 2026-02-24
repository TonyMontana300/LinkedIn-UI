import React from "react";
import { Link } from "react-router-dom";
import EditBtn from "../ui/EditBtn";

const Education = () => {
  return (
    <div className="pt-6 px-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Education</h2>
        <EditBtn />
      </div>

      <div className="flex gap-2 border-b border-b-gray-300 pb-5 mt-1">
        <Link
          to="#"
          className="h-12 w-12 bg-[#E7E2DC] flex items-center justify-center"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQEN5ak-MMOMFA/company-logo_100_100/company-logo_100_100/0/1662354967518/piemr_logo?e=1773273600&v=beta&t=ioKve_qz8RUjBfofV2c-8K-AgXDk9IojwuHEcgm3ko8"
            alt="piemr"
          />
        </Link>
        <div className="flex flex-col gap-5">
          <Link to="#">
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 hover:underline cursor-pointer">
              Prestige Institute of Engineering Management & Research (PIEMR)
            </h3>
            <span className="text-sm">
              Bachelor of Technology - BTech, Computer Science
            </span>
          </Link>
          <Link
            to="#"
            className="font-semibold text-gray-900 text-sm flex items-center gap-1 hover:text-blue-600 hover:underline"
          >
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.23607 1C5.09976 1 4.06097 1.64201 3.55279 2.65836L1.14806 7.46782C0.647975 8.46799 0.745665 9.66329 1.40152 10.569L9.57018 21.8495C10.7679 23.5035 13.2321 23.5035 14.4298 21.8495L22.5985 10.569C23.2543 9.66329 23.352 8.468 22.852 7.46782L20.4472 2.65836C19.939 1.64201 18.9003 1 17.7639 1H6.23607ZM5.34165 3.55279C5.51104 3.214 5.8573 3 6.23607 3H8.67428L7.24571 8H3.11804L5.34165 3.55279ZM9.32574 8L10.7543 3H13.2457L14.6743 8H9.32574ZM14.646 10H9.35397L12 18.5996L14.646 10ZM13.929 19.1312L16.7386 10H20.5412L13.929 19.1312ZM16.7543 8L15.3257 3H17.7639C18.1427 3 18.489 3.214 18.6584 3.55279L20.882 8H16.7543ZM3.4588 10H7.26143L10.071 19.1312L3.4588 10Z"
                fill="#404040"
              />
            </svg>
            Computer Science, English and +1 skill
          </Link>
        </div>
      </div>

      <div className="my-3 flex gap-2 pb-5">
        <Link
          to="#"
          className="h-12 w-12 bg-[#E7E2DC] flex items-center justify-center"
        >
          <img
            src="https://media.licdn.com/dms/image/v2/C4D0BAQEN5ak-MMOMFA/company-logo_100_100/company-logo_100_100/0/1662354967518/piemr_logo?e=1773273600&v=beta&t=ioKve_qz8RUjBfofV2c-8K-AgXDk9IojwuHEcgm3ko8"
            alt="piemr"
          />
        </Link>
        <div className="flex flex-col gap-5">
          <Link to="#">
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 hover:underline cursor-pointer">
              Bharat Jyoti Higher Secondary School
            </h3>
            <span className="text-sm">
              10+2, Mathematics and Computer Science
            </span>
          </Link>
          <Link
            to="#"
            className="font-semibold text-gray-900 text-sm flex items-center gap-1 hover:text-blue-600 hover:underline"
          >
            <svg
              width="14px"
              height="14px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M6.23607 1C5.09976 1 4.06097 1.64201 3.55279 2.65836L1.14806 7.46782C0.647975 8.46799 0.745665 9.66329 1.40152 10.569L9.57018 21.8495C10.7679 23.5035 13.2321 23.5035 14.4298 21.8495L22.5985 10.569C23.2543 9.66329 23.352 8.468 22.852 7.46782L20.4472 2.65836C19.939 1.64201 18.9003 1 17.7639 1H6.23607ZM5.34165 3.55279C5.51104 3.214 5.8573 3 6.23607 3H8.67428L7.24571 8H3.11804L5.34165 3.55279ZM9.32574 8L10.7543 3H13.2457L14.6743 8H9.32574ZM14.646 10H9.35397L12 18.5996L14.646 10ZM13.929 19.1312L16.7386 10H20.5412L13.929 19.1312ZM16.7543 8L15.3257 3H17.7639C18.1427 3 18.489 3.214 18.6584 3.55279L20.882 8H16.7543ZM3.4588 10H7.26143L10.071 19.1312L3.4588 10Z"
                fill="#404040"
              />
            </svg>
            English
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Education;
