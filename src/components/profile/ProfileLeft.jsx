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

const ProfileLeft = ({profileUser, setProfileUser}) => {
  return (
    <div className="flex flex-col gap-3">
      <ProfileHeader profileUser={profileUser} />
      <ProfileAnalytics profileUser={profileUser} />
      <About profileUser={profileUser} setProfileUser={setProfileUser} />
      <Activity profileUser={profileUser} />
      <Experience profileUser={profileUser} />
      <Education profileUser={profileUser} />
      <Certification profileUser={profileUser} />
      <Projects profileUser={profileUser} />
      <Skills profileUser={profileUser} />
      <AuthFooter />
    </div>
  );
};

export default ProfileLeft;
