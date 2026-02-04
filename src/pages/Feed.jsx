import React from "react";
import FeedPost from "../components/feeds/FeedPost.jsx";
import CreatePost from "../components/feeds/CreatePost.jsx";
import LeftPanel from "../components/feeds/LeftPanel.jsx";
import RightPanel from "../components/feeds/RightPanel.jsx";

const Feed = () => {
  return (
    <>
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
        <div style={{ border: "1px solid gray", padding: "10px" }}>
          <div
            style={{
              border: "1px solid lightgray",
              padding: "10px",
              marginBottom: "20px",
            }}
          >
            <CreatePost />
          </div>
          <div
            style={{
              marginTop: "20px",
              borderTop: "1px solid lightgray",
              padding: "10px",
            }}
          >
            <FeedPost />
          </div>
          <div style={{ marginTop: "20px", padding: "10px" }}>
            <FeedPost />
          </div>
          <div style={{ marginTop: "20px", padding: "10px" }}>
            <FeedPost />
          </div>
          <div style={{ marginTop: "20px", padding: "10px" }}>
            <FeedPost />
          </div>
        </div>
        <RightPanel />
      </div>
    </>
  );
};

export default Feed;
