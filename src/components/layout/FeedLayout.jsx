import React from "react";
import { useState, useEffect } from "react";
import LeftPanel from "../feeds/LeftPanel";
import RightPanel from "../feeds/RightPanel";
import MainPanel from "../feeds/MainPanel";
import { API_URL } from "../../../server/utils/api.js";

const FeedLayout = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_URL}/api/users/me`, {
          headers: {
            authorization: `Bearer ${token}`,
          },
        });

        const data = await res.json();
        setUser(data.user);
      } catch (error) {
        console.error(error);
      }
    };
    fetchUser();
  }, []);

  return (
    <main className="bg-[#F4F2EE] py-2">
      <div className="grid grid-cols-[1fr_3fr_1.3fr] gap-5 max-w-6xl mx-auto my-4">
        <LeftPanel user={user} />
        <MainPanel />
        <RightPanel />
      </div>
    </main>
  );
};

export default FeedLayout;
