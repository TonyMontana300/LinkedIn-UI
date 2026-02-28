import React from "react";
import CreatePost from "./CreatePost";
import FeedPost from "./FeedPost";

const MainPanel = () => {
  return (
    <div className="border flex flex-col gap-2">
      <CreatePost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  );
};

export default MainPanel;
