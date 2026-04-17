import React from "react";
import EditBtn from "../ui/EditBtn";
import { Link } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Projects = ({ profileUser }) => {
  const { user } = useAuth();
  const isOwner = user?._id === profileUser?._id;

  return (
    <div className="pt-4 px-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-semibold text-gray-900">Projects</h2>
        {isOwner && <EditBtn />}
      </div>

      <div>
        <p className="text-gray-900 font-medium">
          📖 CodeBook – Handwriting Online Compiler
        </p>
        <p className="text-sm text-gray-800">Jul 2025 - Sep 2025</p>
        <p className="flex items-center gap-2 mb-5 mt-2 text-sm text-gray-800">
          <svg
            width="25px"
            height="25px"
            viewBox="0 0 32 32"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g fill="none" fill-rule="evenodd">
              <path d="m0 0h32v32h-32z" />

              <path
                d="m27 0c2.7614237 0 5 2.23857625 5 5v22c0 2.7614237-2.2385763 5-5 5h-21c-3.23839694 0-5.87757176-2.5655749-5.99586153-5.7750617l-.00413847-.2249383v-8c0-3.2383969 2.56557489-5.8775718 5.77506174-5.9958615l.22493826-.0041385h6v-7c0-2.76142375 2.2385763-5 5-5zm-15 14h-6c-2.14219539 0-3.89107888 1.6839685-3.99510469 3.8003597l-.00489531.1996403v8c0 2.1421954 1.68396847 3.8910789 3.80035966 3.9951047l.19964034.0048953 7.0005351.0011995c-.6282342-.835866-1.0005351-1.875055-1.0005351-3.0011995zm5.0856015-11.99929704-.0856015-.00070296c-1.5976809 0-2.9036609 1.24891996-2.9949073 2.82372721l-.0050927.17627279v22c0 1.5976809 1.24892 2.9036609 2.8237272 2.9949073l.1762728.0050927h10c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-22c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731l-.1762728-.00509269-.0856015.00070296c-.2061166.58222896-.7615518.99929704-1.4143985.99929704h-7c-.6528467 0-1.2082819-.41706808-1.4143985-.99929704zm8.9143985 12.99929704c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-8c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1zm-3-5c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-5c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1z"
                fill="#56687A"
                fill-rule="nonzero"
              />
            </g>
          </svg>{" "}
          Associated with Freelance
        </p>
        <p className="text-sm text-gray-900 mb-5">
          CodeBook is an experimental web app that lets you write code by hand
          (on canvas) or type it normally, then compiles and runs it online...
        </p>
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
          HTML5, JavaScript and +10 skills
        </Link>
        <Link to="#" className="flex items-center gap-4 mt-4 mb-7">
          <div>
            <span className="h-14 w-25 bg-[#F8FAFD] flex justify-center items-center rounded-md border border-gray-200">
              <svg
                width="22px"
                height="22px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="Media / Image_01">
                  <path
                    id="Vector"
                    d="M3.00005 17.0001C3 16.9355 3 16.8689 3 16.8002V7.2002C3 6.08009 3 5.51962 3.21799 5.0918C3.40973 4.71547 3.71547 4.40973 4.0918 4.21799C4.51962 4 5.08009 4 6.2002 4H17.8002C18.9203 4 19.4801 4 19.9079 4.21799C20.2842 4.40973 20.5905 4.71547 20.7822 5.0918C21 5.5192 21 6.07899 21 7.19691V16.8031C21 17.2881 21 17.6679 20.9822 17.9774M3.00005 17.0001C3.00082 17.9884 3.01337 18.5058 3.21799 18.9074C3.40973 19.2837 3.71547 19.5905 4.0918 19.7822C4.5192 20 5.07899 20 6.19691 20H17.8036C18.9215 20 19.4805 20 19.9079 19.7822C20.2842 19.5905 20.5905 19.2837 20.7822 18.9074C20.9055 18.6654 20.959 18.3813 20.9822 17.9774M3.00005 17.0001L7.76798 11.4375L7.76939 11.436C8.19227 10.9426 8.40406 10.6955 8.65527 10.6064C8.87594 10.5282 9.11686 10.53 9.33643 10.6113C9.58664 10.704 9.79506 10.9539 10.2119 11.4541L12.8831 14.6595C13.269 15.1226 13.463 15.3554 13.6986 15.4489C13.9065 15.5313 14.1357 15.5406 14.3501 15.4773C14.5942 15.4053 14.8091 15.1904 15.2388 14.7607L15.7358 14.2637C16.1733 13.8262 16.3921 13.6076 16.6397 13.5361C16.8571 13.4734 17.0896 13.4869 17.2988 13.5732C17.537 13.6716 17.7302 13.9124 18.1167 14.3955L20.9822 17.9774M20.9822 17.9774L21 17.9996M15 10C14.4477 10 14 9.55228 14 9C14 8.44772 14.4477 8 15 8C15.5523 8 16 8.44772 16 9C16 9.55228 15.5523 10 15 10Z"
                    stroke="#000000"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </g>
              </svg>
            </span>
          </div>
          <p>
            <p className="text-gray-950 text-sm font-semibold">
              📖 CodeBook – Handwriting Online Compiler
            </p>
            <p className="text-gray-900 text-sm">
              CodeBook is an experimental web app that lets you write code by
              hand (on canvas) or type it normally, then compiles and runs it
              online. It’s designed as an early-access prototype to exp.....
            </p>
          </p>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
