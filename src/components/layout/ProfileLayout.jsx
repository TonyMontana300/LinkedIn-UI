import React from "react";
import { Link } from "react-router-dom";
import ProfileHeader from "../profile/ProfileHeader";
import ProfileAnalytics from "../profile/ProfileAnalytics";
import About from "../profile/About";
import Activity from "../profile/Activity";
import Experience from "../profile/Experience";
import Education from "../profile/Education";
import Certification from "../profile/Certification";
import Projects from "../profile/Projects";
import Skills from "../profile/Skills";
import Interest from "../profile/Interest";
import Language from "../profile/Language";
import Ad from "../profile/Ad";
import Viewed from "../profile/Viewed";
import Know from "../profile/Know";

const ProfileLayout = () => {
  return (
    <main className="bg-[#F4F2EE] py-5">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-5 max-w-6xl mx-auto py-1 px-2">
        <div className="border border-solid flex flex-col gap-5">
          <ProfileHeader />
          <ProfileAnalytics />
          <About />
          <Activity />
          <Experience />
          <Education />
          <Certification />
          <Projects />
          <Skills />
          <Interest />
        </div>

        <div style={{ border: "1px solid lightgray" }}>
          <Language />
          <Ad />
          <Viewed />
          <Know />
        </div>
      </div>
    </main>
  );
};

export default ProfileLayout;
