import React from "react";
import { useState, useEffect } from "react";
import ProfileLeft from "../profile/ProfileLeft";
import ProfileRight from "../profile/ProfileRight";
import { useParams } from "react-router-dom";
import { API_URL } from "../../../server/utils/api";

const ProfileLayout = () => {
  const { id } = useParams();
  const [profileUser, setProfileUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      const res = await fetch(`${API_URL}/api/users/${id}`);
      const data = await res.json();

      console.group("Fetch Profile User");
      console.log("UserId: ", id);
      console.log("Profile user data: ", data);
      console.log("Status: ", res.status);
      console.groupEnd();

      setProfileUser(data);
    };

    if (id) fetchUser();
    
  }, [id]);

  return (
    <main className="bg-[#F4F2EE] py-5">
      <div className="grid grid-cols-1 md:grid-cols-[3fr_1fr] gap-5 max-w-6xl mx-auto py-1 px-2">
        <ProfileLeft profileUser={profileUser} />
        <ProfileRight profileUser={profileUser} />
      </div>
    </main>
  );
};

export default ProfileLayout;
