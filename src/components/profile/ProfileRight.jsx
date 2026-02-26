import React from "react";
import Language from "../profile/Language";
import Viewed from "../profile/Viewed";
import Know from "../profile/Know";

const ProfileRight = () => {
  return (
    <div className="flex flex-col gap-3">
      <Language />
      <Viewed />
      <Know />
    </div>
  );
};

export default ProfileRight;
