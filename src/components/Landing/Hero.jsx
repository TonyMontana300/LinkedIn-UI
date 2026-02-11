import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import landingAnim from "../../assets/images/Contact us.json";
import Policy from "../ui/Policy";

const Hero = () => {
  return (
    <main className="Hero min-h-[89vh] w-full animate-[fadeIn_0.8s_ease_forwards] opacity-0">
      <div className="Hero-right flex justify-between">
        <div className="px-3 py-7 max-w-xl ml-45">
          <h1 className="text-5xl leading-15">
            Welcome to your professional network
          </h1>
          <Link
            to="#"
            className="mt-8 w-sm flex items-center justify-center py-2 gap-2 bg-blue-600 text-white border border-gray-300 rounded-3xl font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)] hover:bg-blue-500 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
          >
            {" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="20"
              height="20"
              viewBox="0 0 48 48"
            >
              <path
                fill="#FFC107"
                d="M43.611,20.083H42V20H24v8h11.303c-1.649,4.657-6.08,8-11.303,8c-6.627,0-12-5.373-12-12c0-6.627,5.373-12,12-12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C12.955,4,4,12.955,4,24c0,11.045,8.955,20,20,20c11.045,0,20-8.955,20-20C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
              <path
                fill="#FF3D00"
                d="M6.306,14.691l6.571,4.819C14.655,15.108,18.961,12,24,12c3.059,0,5.842,1.154,7.961,3.039l5.657-5.657C34.046,6.053,29.268,4,24,4C16.318,4,9.656,8.337,6.306,14.691z"
              ></path>
              <path
                fill="#4CAF50"
                d="M24,44c5.166,0,9.86-1.977,13.409-5.192l-6.19-5.238C29.211,35.091,26.715,36,24,36c-5.202,0-9.619-3.317-11.283-7.946l-6.522,5.025C9.505,39.556,16.227,44,24,44z"
              ></path>
              <path
                fill="#1976D2"
                d="M43.611,20.083H42V20H24v8h11.303c-0.792,2.237-2.231,4.166-4.087,5.571c0.001-0.001,0.002-0.001,0.003-0.002l6.19,5.238C36.971,39.205,44,34,44,24C44,22.659,43.862,21.35,43.611,20.083z"
              ></path>
            </svg>
            Continue with Google
          </Link>
          <Link
            to="#"
            className="mt-4 w-sm flex items-center justify-center py-2 gap-2 bg-white text-gray-700 border border-gray-500 rounded-3xl font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)] hover:bg-blue-200 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
          >
            <svg
              width="20"
              height="20"
              viewBox="0 0 1024 1024"
              class="icon"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M691.573 338.89c-1.282 109.275-89.055 197.047-198.33 198.331-109.292 1.282-197.065-90.984-198.325-198.331-0.809-68.918-107.758-68.998-106.948 0 1.968 167.591 137.681 303.31 305.272 305.278C660.85 646.136 796.587 503.52 798.521 338.89c0.811-68.998-106.136-68.918-106.948 0z"
                fill="#4A5699"
              />
              <path
                d="M294.918 325.158c1.283-109.272 89.051-197.047 198.325-198.33 109.292-1.283 197.068 90.983 198.33 198.33 0.812 68.919 107.759 68.998 106.948 0C796.555 157.567 660.839 21.842 493.243 19.88c-167.604-1.963-303.341 140.65-305.272 305.278-0.811 68.998 106.139 68.919 106.947 0z"
                fill="#C45FA0"
              />
              <path
                d="M222.324 959.994c0.65-74.688 29.145-144.534 80.868-197.979 53.219-54.995 126.117-84.134 201.904-84.794 74.199-0.646 145.202 29.791 197.979 80.867 54.995 53.219 84.13 126.119 84.79 201.905 0.603 68.932 107.549 68.99 106.947 0-1.857-213.527-176.184-387.865-389.716-389.721-213.551-1.854-387.885 178.986-389.721 389.721-0.601 68.991 106.349 68.933 106.949 0.001z"
                fill="#E5594F"
              />
            </svg>
            Continue as User
          </Link>
          <Link
            to="#"
            className="mt-4 w-sm flex items-center justify-center py-2 bg-white text-gray-700 border border-gray-500 rounded-3xl font-medium shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)] hover:shadow-[inset_0_1px_2px_rgba(0,0,0,0.12)] hover:bg-blue-200 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
          >
            Sign in with email
          </Link>
          <Policy className={"mt-4 text-center w-sm mb-10"} />
          <span className="block mt-6 text-center w-sm">
            New to LinkedIn?{" "}
            <Link
              to="/login"
              className="font-semibold focus:outline-none text-blue-600 hover:underline transition-all duration-200 ease-out py-2"
            >
              Join now
            </Link>
          </span>
        </div>
        <div className="flex justify-end w-1/2 animate-[float_4s_ease-in-out_infinite]">
          <div className="w-full relative">
            <Lottie
              animationData={landingAnim}
              autoplay
              loop
              className="absolute inset-0 w-full h-full"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default Hero;
