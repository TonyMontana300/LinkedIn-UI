import React from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import connectAnim from "../../assets/images/Connection people.json";
import skillsAnim from "../../assets/images/developer skills.json";

const ImageContent = () => {
  return (
    <section className="flex justify-around my-5 py-5">
      <div className="flex flex-col items-center gap-2">
        <div className="w-md">
          <Lottie
            animationData={connectAnim}
            autoplay
            loop
            className="inset-0 w-full h-full"
          />
        </div>
        <h2 className="text-3xl py-2 leading-normal">
          Connect with people who can help
        </h2>
        <Link
          className="border border-solid border-gray-500 font-semibold text-gray-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:border-gray-800 hover:text-gray-900 hover:bg-gray-200 active:ring-1"
          to="#"
        >
          Find people you know
        </Link>
      </div>
      <div className="flex flex-col items-center gap-2">
        <div className="w-md">
          <Lottie
            animationData={skillsAnim}
            autoplay
            loop
            className="inset-0 w-full h-full"
          />
        </div>
        <h2 className="text-3xl py-2 leading-normal">
          Learn the skills you need to succeed
        </h2>
        <Link
          className="border border-solid border-gray-500 font-semibold text-gray-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:border-gray-800 hover:text-gray-900 hover:bg-gray-200 active:ring-1"
          to="#"
        >
          Choose a topic to learn about
        </Link>
      </div>
    </section>
  );
};

export default ImageContent;
