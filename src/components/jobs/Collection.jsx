import React from "react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { collectionJobs } from "../../data/collectionJobs";
import ShowBtn from "../ui/ShowBtn";
import CutBtn2 from "../ui/CutBtn2";
import Lottie from "lottie-react";
import easyApplyAnim from "../../assets/icons/job cv.json";
import itAnim from "../../assets/icons/Robot run.json";
import governmentAnim from "../../assets/icons/Government.json";
import moreAnim from "../../assets/icons/Paper File and Document Animations.json";

const Collection = () => {
  const [activeTab, setActiveTab] = useState("Easy Apply");
  const [visibleJobs, setVisibleJobs] = useState(2);
  const filterJobs =
    activeTab === "More"
      ? collectionJobs
      : collectionJobs.filter((job) => job.category === activeTab);

  const tabs = [
    { name: "Easy Apply", anim: easyApplyAnim },
    { name: "IT", anim: itAnim },
    { name: "Government", anim: governmentAnim },
    { name: "More", anim: moreAnim },
  ];

  return (
    <div className="md:pt-5 pt-4 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="px-6">
        <h2 className="text-gray-900 text-xl font-medium">
          Explore with job collections
        </h2>
        <div className="flex gap-6 border-b border-b-gray-300 mt-2">
          {tabs.map((tab) => (
            <Link
              to="#"
              key={tab.name}
              onClick={() => {
                setActiveTab(tab.name);
                setVisibleJobs(2);
              }}
              className={`pb-2 flex items-center gap-2 ${activeTab === tab.name ? "border-b-2 border-black font-semibold text-gray-900" : "text-gray-500 font-semibold"}`}
            >
              <div className="w-10 h-10 flex items-center justify-center">
                <Lottie
                animationData={tab.anim}
                autoplay={activeTab === tab.name}
                loop={activeTab === tab.name}
                style={{ width: 35, height: 35 }}
                rendererSettings={{
                    preserveAspectRatio: "xMidYMid slice",
                }}
              />
              </div>
              {tab.name}
            </Link>
          ))}
        </div>
        {filterJobs.slice(0, visibleJobs).map((job) => (
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
      {filterJobs.length > 2 && (
        <Link
          onClick={() =>
            setVisibleJobs(visibleJobs === 2 ? filterJobs.length : 2)
          }
        >
          {visibleJobs === 2 ? (
            <ShowBtn text="Show all" />
          ) : (
            <ShowBtn text="Show less" />
          )}
        </Link>
      )}
    </div>
  );
};

export default Collection;
