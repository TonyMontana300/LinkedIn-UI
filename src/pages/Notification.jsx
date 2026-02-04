import React from "react";
import LeftPanel from "../components/notifications/LeftPanel.jsx";
import NotificationFeed from "../components/notifications/NotificationFeed.jsx";
import RightPanel from "../components/notifications/RightPanel.jsx";

const Notification = () => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 3fr 1fr",
        gap: "10px",
        border: "1px solid black",
        padding: "10px",
        maxWidth: "1200px",
        margin: "20px auto",
      }}
    >
        <LeftPanel />
        <NotificationFeed />
        <RightPanel />
    </div>
  );
};

export default Notification;
