import React from "react";
import { Link } from "react-router-dom";
const jobs = [
  "Engineering",
  "Business Development",
  "Finance",
  "Administrative Assistant",
  "Retail Associate",
  "Customer Service",
  "Operations",
  "Information Technology",
  "Marketing",
  "Human Resources",
];

const Section_1_flip = () => {
  return (
    <section className="max-w-6xl mx-auto my-15">
      <div className="flex flex-col-reverse md:flex-row md:justify-between items-center gap-10 md:gap-30">
        <div className="flex flex-wrap gap-y-3 gap-x-2 md:px-0 px-1 md:justify-start justify-center md:w-3xl">
          {jobs.map((job) => (
            <Link
              key={job}
              to="#"
              className="border border-solid border-gray-500 font-semibold text-gray-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:border-gray-800 hover:text-gray-900 hover:bg-gray-200 active:ring-1"
            >
              {job}
            </Link>
          ))}
          <Link
            to="#"
            className="active:ring-1 border border-solid border-blue-500 font-semibold text-blue-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:bg-blue-100 hover:text-blue-800"
          >
            Show all
          </Link>
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="md:mb-40 w-sm">
            <h2 className="text-3xl text-center md:text-left py-2 leading-normal">
              Find the right job or internship for you
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Section_1_flip;
