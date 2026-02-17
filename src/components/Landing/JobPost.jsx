import React from "react";
import { Link } from "react-router-dom";

const JobPost = () => {
  return (
    <section className="flex flex-col items-center gap-4 py-15 bg-[#F1ECE5]">
      <h2 className="text-3xl my-4 text-center text-[#B24020]">
        Post your job for millions of people to see
      </h2>
      <Link className="active:ring-1 border border-solid border-blue-500 font-semibold text-blue-700 rounded-full mb-4 px-6 py-3 w-fit transition-all duration-200 ease-in-out hover:bg-blue-100 hover:text-blue-800">
        Post a job
      </Link>
    </section>
  );
};

export default JobPost;
