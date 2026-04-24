import React from "react";
import JobsSidebar from "../jobs/JobsSidebar";
import JobsMain from "../jobs/JobsMain";

const JobsLayout = () => {
  return (
    <div className="bg-[#F4F2EE] md:py-2 px-2 py-1 min-h-[calc(100vh-79px)]">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_2.5fr] gap-6 max-w-6xl mx-auto my-4">
        <JobsSidebar />
        <JobsMain />
      </div>
    </div>
  );
};

export default JobsLayout;
