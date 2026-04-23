import React from "react";
import CreatePost from "./CreatePost";
import FeedPost from "./FeedPost";

const MainPanel = ({ posts, onDelete, onEdit, onLike, onPostCreated, loading }) => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <CreatePost onPostCreated={onPostCreated} />
      <div className="border-t-2 border-t-gray-300 my-2"></div>
      {loading ? (
        <p className="text-center text-gray-500">Loading posts...</p>
      ) : posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet</p>
      ) : (
        posts.map((post) => {
          return (
            <FeedPost
              key={post._id}
              post={post}
              onDelete={onDelete}
              onEdit={onEdit}
              onLike={onLike}
            />
          );
        })
      )}
    </div>
  );
};

export default MainPanel;
