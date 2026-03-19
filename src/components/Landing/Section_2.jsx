import React from "react";
import { Link } from "react-router-dom";
import LandingBlueBtn from "../ui/LandingBlueBtn";
import LandingBlackBtn from "../ui/LandingBlackBtn";

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
      <div className=" flex flex-col md:flex-row md:justify-between gap-10 md:gap-20 items-center">
        <div className="md:mb-60 px-2 md:px-0">
          <h2 className="text-3xl py-2 text-center md:text-left">Discover the best software tools</h2>
          <p className="text-lg md:text-xl text-gray-900 md:w-md text-center md:text-left py-2 leading-normal">
            Connect with buyers who have first-hand experience to find the best
            products for you.
          </p>
        </div>
        <div className="flex flex-wrap gap-y-3 gap-x-2 md:justify-start justify-center">
          {tools.map((tool) => (
            <LandingBlackBtn key={tool} text={tool} />
          ))}
          <LandingBlueBtn text="Show all" />
        </div>
      </div>
    </section>
  );
};

export default Section_2;
