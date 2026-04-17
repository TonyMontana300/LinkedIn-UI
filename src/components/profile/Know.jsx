import React from "react";
import PeopleCard from "../posts/PeopleCard";
import ShowBtn from "../ui/ShowBtn";
import { useAuth } from "../../hooks/useAuth";

const people = [
  {
    name: "Gautam Yadav",
    description: "MERN Stack Developer | React, Express, MongoDB, Node |...",
  },
  {
    name: "Awadhi Kothari",
    description: "Graphic Designer at Freelencer",
  },
  {
    name: "Ayush Nashine",
    description:
      "Software Engineer @ NuAlg | Ex ISRO Intern | Building LLM-...",
  },
  {
    name: "Akash Pandey",
    description:
      "Principal Software Engineer I at ConnectWise ( GOLang | C++ |...",
  },
  {
    name: "Dominic Balc",
    description: "Web Developer at CodePulse",
  },
];

const Know = ({ text, headline, profileUser }) => {
  const { user } = useAuth();
  const isOwner = user?._id === profileUser?._id;
  const buttonType = isOwner ? "Connect" : "Message";

  return (
    <div className="bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="px-6 pt-6">
        <h2 className="font-semibold text-gray-900">{text}</h2>
        <p className="flex gap-1 items-center text-sm text-gray-600 mb-4">
          {headline}
        </p>

        {people.map((person, index) => (
          <PeopleCard
            key={index}
            text={person.name}
            description={person.description}
            btn={buttonType}
          />
        ))}
      </div>
      <ShowBtn text="Show all" />
    </div>
  );
};

export default Know;
