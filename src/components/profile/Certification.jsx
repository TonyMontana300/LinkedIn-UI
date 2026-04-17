import React from "react";
import { Link } from "react-router-dom";
import EditBtn from "../ui/EditBtn";
import udemyLogo from "../../assets/images/udemy_logo.jfif";
import { useAuth } from "../../hooks/useAuth";

const Certification = ({ profileUser }) => {
  const { user } = useAuth();
  const isOwner = user?._id === profileUser?._id;
  return (
    <div className="md:pt-6 pt-4 px-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">
          Licenses & certifications
        </h2>
        {isOwner && <EditBtn />}
      </div>

      <div className="flex gap-2 border-b border-b-gray-300 pb-5 mt-1">
        <div>
          <Link
            to="#"
            className="h-12 w-12 bg-[#E7E2DC] flex items-center justify-center"
          >
            <img src={udemyLogo} alt="Udemy" />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link to="#">
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 hover:underline cursor-pointer">
              Prestige Institute of Engineering Management & Research (PIEMR)
            </h3>
            <span className="text-sm">Udemy</span>
            <p className="text-gray-500 text-sm flex flex-col">
              <span>Issued Jul 2023</span>
              Credential ID UC-d7bc0908-2a9b-463f-aecd-32210ac9c9bb
            </p>
          </Link>
          <span className="mb-2 flex">
            <Link
              to="#"
              className="px-4 py-2 flex items-center gap-2 md:px-4 md:py-1 rounded-full disabled:opacity-70 disabled:cursor-not-allowed ring-1 ring-gray-400 disabled:active:scale-100 disabled:active:ring-0 bg-white hover:ring-2 hover:ring-gray-500 text-gray-900 font-medium hover:bg-gray-200 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Show Credential
              <svg
                fill="#101828"
                width="15px"
                height="15px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>share</title>
                <path d="M0 25.472q0 2.368 1.664 4.032t4.032 1.664h18.944q2.336 0 4-1.664t1.664-4.032v-8.192l-3.776 3.168v5.024q0 0.8-0.544 1.344t-1.344 0.576h-18.944q-0.8 0-1.344-0.576t-0.544-1.344v-18.944q0-0.768 0.544-1.344t1.344-0.544h9.472v-3.776h-9.472q-2.368 0-4.032 1.664t-1.664 4v18.944zM5.696 19.808q0 2.752 1.088 5.28 0.512-2.944 2.24-5.344t4.288-3.872 5.632-1.664v5.6l11.36-9.472-11.36-9.472v5.664q-2.688 0-5.152 1.056t-4.224 2.848-2.848 4.224-1.024 5.152zM32 22.080v0 0 0z"></path>
              </svg>
            </Link>
          </span>
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
            GPT-4 and ChatGPT
          </Link>
        </div>
      </div>

      <div className="flex gap-2 pb-7 mt-3">
        <div>
          <Link
            to="#"
            className="h-12 w-12 bg-[#E7E2DC] flex items-center justify-center"
          >
            <img src={udemyLogo} alt="Udemy" />
          </Link>
        </div>
        <div className="flex flex-col gap-5">
          <Link to="#">
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 hover:underline cursor-pointer">
              The Content Writing Chourse
            </h3>
            <span className="text-sm">Udemy</span>
            <p className="text-gray-500 text-sm flex flex-col">
              <span>Issued May 2023</span>
              Credential ID UC-72197da3-7319-44a1-a314-3e3dd387221b
            </p>
          </Link>
          <span className="mb-2 flex">
            <Link
              to="#"
              className="px-4 flex items-center gap-2 py-2 md:px-4 md:py-1 rounded-full disabled:opacity-70 disabled:cursor-not-allowed ring-1 ring-gray-400 disabled:active:scale-100 disabled:active:ring-0 bg-white hover:ring-2 hover:ring-gray-500 text-gray-900 font-medium hover:bg-gray-200 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Show Credential
              <svg
                fill="#101828"
                width="15px"
                height="15px"
                viewBox="0 0 32 32"
                version="1.1"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>share</title>
                <path d="M0 25.472q0 2.368 1.664 4.032t4.032 1.664h18.944q2.336 0 4-1.664t1.664-4.032v-8.192l-3.776 3.168v5.024q0 0.8-0.544 1.344t-1.344 0.576h-18.944q-0.8 0-1.344-0.576t-0.544-1.344v-18.944q0-0.768 0.544-1.344t1.344-0.544h9.472v-3.776h-9.472q-2.368 0-4.032 1.664t-1.664 4v18.944zM5.696 19.808q0 2.752 1.088 5.28 0.512-2.944 2.24-5.344t4.288-3.872 5.632-1.664v5.6l11.36-9.472-11.36-9.472v5.664q-2.688 0-5.152 1.056t-4.224 2.848-2.848 4.224-1.024 5.152zM32 22.080v0 0 0z"></path>
              </svg>
            </Link>
          </span>
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
            Search Engine Optimization (SEO), Spelling and +3 skills
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Certification;
