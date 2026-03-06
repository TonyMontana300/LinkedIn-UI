import React from "react";
import Preference from "./Preference";

const JobsMain = () => {
  return (
    <div className="border flex flex-col gap-3">
      <Preference />
      <div>
        <h2>Section Header(Based on Activity)</h2>
        <ul>
          <li>Job Card</li>
          <li>Job Card</li>
          <li>Job Card</li>
        </ul>
        <div>Show All</div>
      </div>
      <div>
        <h2>Advertisement</h2>
        <p>Supporting Text</p>
        <div>CTA</div>
      </div>
      <div>
        <h2>Job Collection</h2>
        <ul>
          <li>Easy Apply, Government, IT, More</li>
        </ul>
        <ul>
          <li>JobCard List</li>
          <li>JobCard List</li>
          <li>JobCard List</li>
        </ul>
        <div>Show All</div>
      </div>
      <div>
        <h2>Section Header</h2>
        <ul>
          <li>Job List</li>
          <li>Job List</li>
          <li>Job List</li>
        </ul>
      </div>
    </div>
  );
};

export default JobsMain;
