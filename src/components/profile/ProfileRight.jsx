import React from "react";
import Language from "../profile/Language";
import Viewed from "../profile/Viewed";
import Know from "../profile/Know";
import { useAuth } from "../../hooks/useAuth";

const ProfileRight = ({ profileUser }) => {
  const { user } = useAuth();

  const isOwner = user?._id === profileUser?._id;
  if (isOwner) {
    return (
      <div className="flex flex-col gap-3">
        <Language />
        <Viewed />
        <Know
          text="People you may know"
          headline="From your industry"
          profileUser={profileUser}
        />
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-3">
      <Know 
      text="More profiles for you"
      profileUser={profileUser} />
    </div>
  );
};

export default ProfileRight;
