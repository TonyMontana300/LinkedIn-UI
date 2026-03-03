import React from "react";
import LeftPanel from "../feeds/LeftPanel";
import RightPanel from "../feeds/RightPanel";
import MainPanel from "../feeds/MainPanel";

const FeedLayout = () => {
  return (
    <main className="bg-[#F4F2EE] py-1">
      <div className="grid grid-cols-[1fr_3fr_1.3fr] gap-5 max-w-6xl mx-auto my-5">
        <LeftPanel />
        <MainPanel />
        <RightPanel />
      </div>
    </main>
  );
};

export default FeedLayout;
