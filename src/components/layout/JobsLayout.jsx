import React from "react";
import JobsSidebar from "../jobs/JobsSidebar";
import JobsMain from "../jobs/JobsMain";

const JobsLayout = () => {
  return (
    <div className="bg-[#F4F2EE] py-2 min-h-163">
      <div className="grid grid-cols-[1fr_2.5fr] gap-6 max-w-6xl mx-auto my-4">
        <JobsSidebar />
        <JobsMain />
      </div>
    </div>
  );
};

export default JobsLayout;
