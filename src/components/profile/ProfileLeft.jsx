import React from "react";
import ProfileHeader from "../profile/ProfileHeader";
import ProfileAnalytics from "../profile/ProfileAnalytics";
import About from "../profile/About";
import Activity from "../profile/Activity";
import Experience from "../profile/Experience";
import Education from "../profile/Education";
import Certification from "../profile/Certification";
import Projects from "../profile/Projects";
import Skills from "../profile/Skills";
import AuthFooter from "../login-signup/AuthFooter"

const ProfileLeft = () => {
  return (
    <div className="flex flex-col gap-3">
      <ProfileHeader />
      <ProfileAnalytics />
      <About />
      <Activity />
      <Experience />
      <Education />
      <Certification />
      <Projects />
      <Skills />
      <AuthFooter />
    </div>
  );
};

export default ProfileLeft;
