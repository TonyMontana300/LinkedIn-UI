import React from "react";
import { Link } from "react-router-dom";
import LandingBlueBtn from "../ui/LandingBlueBtn";

const JobPost = () => {
  return (
    <section className="flex flex-col items-center gap-4 px-2 py-15 bg-[#F1ECE5]">
      <h2 className="text-3xl my-4 text-center text-[#B24020]">
        Post your job for millions of people to see
      </h2>
      <LandingBlueBtn text="Post a job"/>
    </section>
  );
};

export default JobPost;
