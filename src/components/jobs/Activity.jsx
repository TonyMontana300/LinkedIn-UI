import React from "react";
import { Link } from "react-router-dom";
import { ActivityJobs } from "../../data/ActivityJobs.js";
import { useState } from "react";
import ShowBtn from "../ui/ShowBtn.jsx";
import CutBtn2 from "../ui/CutBtn2.jsx";

const Activity = () => {
  const [visibleJobs, setVisibleJobs] = useState(3);

  return (
    <div className="md:pt-5 pt-4 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="px-6">
        <h2 className="text-gray-900 text-xl font-medium">
          Jobs based on your activity
        </h2>
        <p className="text-sm text-gray-500">
          Including applies, searches, and saves
        </p>
        <div className="py-1">
          {ActivityJobs.slice(0, visibleJobs).map((job) => (
            <div
              key={job.id}
              className="flex flex-col border-b border-b-gray-200 py-2 last:border-none"
            >
              <Link to="#" className="flex justify-between">
                <div>
                  <h2 className="text-blue-600 font-semibold">{job.title}</h2>
                  <p className="text-sm text-gray-900">
                    {job.company} • {job.location} • {job.salary}
                  </p>
                  <span className="text-xs text-gray-500">{job.posted}</span>
                </div>
                <CutBtn2 />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {ActivityJobs.length > 3 && (
        <Link
          onClick={() =>
            setVisibleJobs(visibleJobs === 3 ? ActivityJobs.length : 3)
          }
        >
          {visibleJobs === 3 ? (
            <ShowBtn text="Show all" />
          ) : (
            <ShowBtn text="Show less" />
          )}
        </Link>
      )}
    </div>
  );
};

export default Activity;
