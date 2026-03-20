import React from "react";
import LeftPanel from "../feeds/LeftPanel";
import RightPanel from "../feeds/RightPanel";
import MainPanel from "../feeds/MainPanel";
import { useAuth } from "../../hooks/useAuth.js";

const FeedLayout = () => {

  const { user, loading } = useAuth();

  if  (loading) return <p>Loading...</p>

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
