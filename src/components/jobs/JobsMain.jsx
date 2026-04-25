import React from "react";
import Preference from "./Preference";
import Activity from "./Activity";
import Collection from "./Collection";

const JobsMain = () => {
  return (
    <div className="flex flex-col md:gap-4 gap-3">
      <Preference />
      <Activity />
      <Collection />
    </div>
  );
};

export default JobsMain;
