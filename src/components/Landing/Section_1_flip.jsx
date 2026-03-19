import React from "react";
import { Link } from "react-router-dom";
import LandingBlueBtn from "../ui/LandingBlueBtn";
import LandingBlackBtn from "../ui/LandingBlackBtn";

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
            <LandingBlackBtn key={job} text={job}/>
          ))}
          <LandingBlueBtn text="Show all"/>
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
