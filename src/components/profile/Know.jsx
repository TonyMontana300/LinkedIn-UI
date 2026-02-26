import React from "react";
import BlackBtn from "../ui/BlackBtn";
import { Link } from "react-router-dom";
import PeopleCard from "../posts/PeopleCard";
import ShowBtn from "../ui/ShowBtn";

const Know = () => {
  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="px-6 pt-6">
        <h2 className="font-semibold text-gray-900">People you may know</h2>
        <p className="flex gap-1 items-center text-sm text-gray-600 mb-4">
          From your industry
        </p>

        <PeopleCard
          text="Gautam Yadav"
          description="MERN Stack Developer | React, Express, MongoDB, Node |..."
        />
        <PeopleCard
          text="Awadhi Kothari"
          description="Graphic Designer at Freelencer"
        />
        <PeopleCard
          text="Ayush Nashine"
          description="Software Engineer @ NuAlg | Ex ISRO Intern | Building LLM-..."
        />
        <PeopleCard
          text="Akash Pandey"
          description="Principal Software Engineer I at ConnectWise ( GOLang | C++ |..."
        />
        <PeopleCard
          text="Dominic Balc"
          description="Web Developer at CodePulse"
        />
      </div>
      <ShowBtn text="Show all"/>
    </div>
  );
};

export default Know;
