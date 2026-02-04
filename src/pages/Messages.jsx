import React from "react";
import MessagePanel from "../components/messages/MessagePanel.jsx";

const Messages = () => {
  return (
    <div
      style={{
        border: "1px solid black",
        padding: "10px",
        maxWidth: "1200px",
        margin: "20px auto",
      }}
    >
      <MessagePanel />
    </div>
  );
};

export default Messages;
