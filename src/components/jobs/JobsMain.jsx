import React from "react";
import Preference from "./Preference";
import Activity from "./Activity";
import Collection from "./Collection";

const JobsMain = () => {
  return (
    <div className="flex flex-col gap-4">
      <Preference />
      <Activity />
      <Collection />
    </div>
  );
};

export default JobsMain;
