import React from "react";
import { Link } from "react-router-dom";
import EditBtn from "../ui/EditBtn";
import { useAuth } from "../../hooks/useAuth";

const Experience = ({ profileUser }) => {
  const { user } = useAuth();
  const isOwner = user?._id === profileUser?._id;
  return (
    <div className="md:pt-6 pt-4 px-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between">
        <h2 className="text-xl font-semibold text-gray-900">Experience</h2>
        {isOwner && <EditBtn />}
      </div>

      <div className="flex gap-2 border-b border-b-gray-300 pb-5 mt-1">
        <div>
          <Link
            to="#"
            className="h-12 w-12 bg-[#E7E2DC] flex items-center justify-center"
          >
            <svg
              width="30px"
              height="30px"
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
            </svg>
          </Link>
        </div>
        <div>
          <Link to="#">
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 hover:underline cursor-pointer">
              Web Developer
            </h3>
            <span className="text-sm">Freelance</span>
            <p className="w-60 text-gray-500 text-sm mb-4">
              Jan 2024 - Present · 2 yrs 2 mos Indore, Madhya Pradesh, India ·
              Remote
            </p>
          </Link>
          <p className="text-gray-900 text-sm mb-4">
            <h3>💼 Freelance Web Developer:</h3>
            (Dates: e.g., Jan 2024 – Present)
          </p>

          <p className="flex flex-col text-sm text-gray-900 mb-5">
            <span>
              {"-->"} Developed CodeBook (handwriting compiler with OCR +
              backend execution).
            </span>

            <span>
              {"-->"} Built multiple responsive websites with HTML, CSS,
              JavaScript, and Tailwind.
            </span>
            <span>{"-->"} Designed RESTful APIs with Node.js + Express.</span>
            <span>{"-->"} Deployed apps on Render, Netlify, and Vercel.</span>
            <span>
              {"-->"} Collaborated via GitHub/GitLab for version control.
            </span>
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
            Front-End Development, Search Engine Optimization (SEO) and +10
            skills
          </Link>
        </div>
      </div>

      <div className="my-3 flex gap-2">
        <div>
          <Link
            to="#"
            className="h-12 w-12 bg-[#E7E2DC] flex items-center justify-center"
          >
            <svg
              width="30px"
              height="30px"
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
            </svg>
          </Link>
        </div>
        <div>
          <Link to="#">
            <h3 className="font-semibold text-gray-900 hover:text-blue-600 hover:underline cursor-pointer">
              Student
            </h3>
            <span className="text-sm">Freelance</span>
            <p className="text-gray-500 text-sm mb-5">
              Nov 2022 - Present · 3 yrs 4 mos
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Experience;
