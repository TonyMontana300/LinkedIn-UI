import React from "react";
import NetworkMain from "../my-network/NetworkMain";
import NetworkSidebar from "../my-network/NetworkSidebar";

const MyNetworkLayout = () => {
  return (
    <main className="bg-[#F4F2EE] md:py-2 px-2 py-1 min-h-[calc(100vh-79px)]">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-[1fr_3fr] gap-5 max-w-6xl mx-auto my-4">
        <NetworkSidebar />
        <NetworkMain />
      </div>
    </main>
  );
};

export default MyNetworkLayout;
