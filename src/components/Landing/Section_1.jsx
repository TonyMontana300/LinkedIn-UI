import React from "react";
import { Link } from "react-router-dom";

const topics = [
  "Career",
  "Productivity",
  "Finance",
  "Soft Skills & Emotional Intelligence",
  "Project Management",
  "Education",
  "Technology",
  "Leadership",
  "E-Commerce",
];

const Section_1 = () => {
  return (
    <section className="bg-[#F3F2F0]">
      <div className="max-w-6xl mx-auto">
        <div className=" flex flex-col md:flex-row md:justify-between gap-10 md:gap-20 items-center">
          <div className="mt-10 md:mt-20 md:mb-50">
            <h2 className="text-3xl py-2 text-center md:text-left">Explore top LinkedIn content</h2>
            <p className="text-lg md:text-xl text-gray-900 w-sm md:w-md py-2 leading-normal text-center md:text-left">
              Discover relevant posts and expert insights — curated by topic and
              in one place.
            </p>
          </div>
          <div className="flex flex-wrap gap-y-3 gap-x-2 px-2 md:px-0 mb-12 md:mb-0 justify-center md:justify-start">
            {topics.map((topic) => (
              <Link
                key={topic}
                to="#"
                className="border border-solid border-gray-500 font-semibold text-gray-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:border-gray-800 hover:text-gray-900 hover:bg-gray-200 active:ring-1"
              >
                {topic}
              </Link>
            ))}
            <Link
              to="#"
              className="active:ring-1 border border-solid border-blue-500 font-semibold text-blue-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:bg-blue-100 hover:text-blue-800"
            >
              Show all
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_1;
