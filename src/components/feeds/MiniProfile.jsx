import React from "react";
import { Link } from "react-router-dom";
import cover from "../../assets/images/cover.jfif"
import profile from "../../assets/images/profile.jfif"
import { useAuth } from "../../hooks/useAuth.js";

const MiniProfile = () => {

  const { user, loading } = useAuth();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="bg-white rounded-md shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="w-full rounded-md">
        <img
          src={cover}
          alt="Cover Image"
          className="w-full h-full object-cover"
        />
      </div>
      <div className="px-4 relative">
        <div className="-mt-5">
          <img
            src={profile}
            alt="Profile Image"
            className="w-16 h-16 rounded-full object-cover shadow-md ring-white ring-2"
          />
        </div>
      </div>
      <div className="px-4 mt-2 mb-4">
        <Link to="/profile/:id">
          <h1 className="inline-flex items-center gap-1 font-medium text-xl text-gray-900">
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
          <p className="text-xs text-gray-900 leading-snug">
            {user?.headline || "Headline"}
          </p>
          <p className="text-xs text-gray-500 my-1">{user?.location || "Location"}</p>
          <div className="my-2">
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 32 32"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="none" fill-rule="evenodd">
                <path d="m0 0h32v32h-32z" />

                <path
                  d="m27 0c2.7614237 0 5 2.23857625 5 5v22c0 2.7614237-2.2385763 5-5 5h-21c-3.23839694 0-5.87757176-2.5655749-5.99586153-5.7750617l-.00413847-.2249383v-8c0-3.2383969 2.56557489-5.8775718 5.77506174-5.9958615l.22493826-.0041385h6v-7c0-2.76142375 2.2385763-5 5-5zm-15 14h-6c-2.14219539 0-3.89107888 1.6839685-3.99510469 3.8003597l-.00489531.1996403v8c0 2.1421954 1.68396847 3.8910789 3.80035966 3.9951047l.19964034.0048953 7.0005351.0011995c-.6282342-.835866-1.0005351-1.875055-1.0005351-3.0011995zm5.0856015-11.99929704-.0856015-.00070296c-1.5976809 0-2.9036609 1.24891996-2.9949073 2.82372721l-.0050927.17627279v22c0 1.5976809 1.24892 2.9036609 2.8237272 2.9949073l.1762728.0050927h10c1.5976809 0 2.9036609-1.24892 2.9949073-2.8237272l.0050927-.1762728v-22c0-1.59768088-1.24892-2.90366088-2.8237272-2.99490731l-.1762728-.00509269-.0856015.00070296c-.2061166.58222896-.7615518.99929704-1.4143985.99929704h-7c-.6528467 0-1.2082819-.41706808-1.4143985-.99929704zm8.9143985 12.99929704c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-8c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1zm-3-5c.5522847 0 1 .4477153 1 1s-.4477153 1-1 1h-5c-.5522847 0-1-.4477153-1-1s.4477153-1 1-1z"
                  fill="#000000"
                  fill-rule="nonzero"
                />
              </g>
            </svg>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default MiniProfile;
