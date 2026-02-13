import React from "react";
import { Link } from "react-router-dom";
const tools = [
  "E-Commerce Platforms",
  "CRM Software",
  "Human Resource Management System",
  "Recruiting Software",
  "Sales Intelligent Software",
  "Project Management Software",
  "Project Management Software",
  "Help Dest Software",
  "Social Networking Software",
  "Desktop Publishing Software",
];

const Section_2 = () => {
  return (
    <section className="max-w-6xl mx-auto my-15">
      <div className=" flex justify-between gap-20 items-center">
        <div className="mb-60">
          <h2 className="text-3xl py-2">Discover the best software tools</h2>
          <p className="text-xl text-gray-900 w-md py-2 leading-normal">
            Connect with buyers who have first-hand experience to find the best
            products for you.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-3 gap-x-2 items-start content-start">
          {tools.map((tool) => (
            <Link
              key={tool}
              to="#"
              className="border border-solid border-gray-500 font-semibold text-gray-700 rounded-full px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:border-gray-800 hover:text-gray-900 hover:bg-gray-200 active:ring-1"
            >
              {tool}
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
    </section>
  );
};

export default Section_2;
