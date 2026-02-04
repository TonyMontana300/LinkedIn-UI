import React from "react";
import NetworkSidebar from "../components/my-network/NetworkSidebar";
import NetworkMain from "../components/my-network/NetworkMain";

const MyNetwork = () => {
  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 3fr",
          gap: "10px",
          maxWidth: "1200px",
          margin: "20px auto"
        }}
      >
        <NetworkSidebar />
        <NetworkMain />
      </div>
    </>
  );
};

export default MyNetwork;
