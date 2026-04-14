import React from "react";
import Language from "../profile/Language";
import Viewed from "../profile/Viewed";
import Know from "../profile/Know";

const ProfileRight = ({ profileUser }) => {
  return (
    <div className="flex flex-col gap-3">
      <Language profileUser={profileUser} />
      <Viewed profileUser={profileUser} />
      <Know profileUser={profileUser} />
    </div>
  );
};

export default ProfileRight;
