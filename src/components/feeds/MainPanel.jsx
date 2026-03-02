import React from "react";
import CreatePost from "./CreatePost";
import FeedPost from "./FeedPost";

const MainPanel = () => {
  return (
    <div className="flex flex-col gap-2">
      <CreatePost />
      <div className="border-t-2 border-t-gray-300 my-2"></div>
      <FeedPost />
      <FeedPost />
      <FeedPost />
      <FeedPost />
    </div>
  );
};

export default MainPanel;
