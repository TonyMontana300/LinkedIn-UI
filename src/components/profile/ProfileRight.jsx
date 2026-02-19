import React from "react";
import Language from "../profile/Language";
import Ad from "../profile/Ad";
import Viewed from "../profile/Viewed";
import Know from "../profile/Know";

const ProfileRight = () => {
  return (
    <div style={{ border: "1px solid lightgray" }}>
      <Language />
      <Ad />
      <Viewed />
      <Know />
    </div>
  );
};

export default ProfileRight;
