import React from "react";
import ProfileLeft from "../profile/ProfileLeft";
import ProfileRight from "../profile/ProfileRight";

const ProfileLayout = () => {
  return (
    <main className="bg-[#F4F2EE] py-5">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-5 max-w-6xl mx-auto py-1 px-2">
        <ProfileLeft />
        <ProfileRight />
      </div>
    </main>
  );
};

export default ProfileLayout;
