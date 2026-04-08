import React from "react";
import CreatePost from "./CreatePost";
import FeedPost from "./FeedPost";

const MainPanel = ({ posts, onDelete, onEdit, onLike, onPostCreated }) => {
  return (
    <div className="flex flex-col gap-2">
      <CreatePost onPostCreated={onPostCreated} />
      <div className="border-t-2 border-t-gray-300 my-2"></div>
      {posts.length === 0 ? (
        <p className="text-center text-gray-500">No posts yet</p>
      ) : (
        posts.map((post) => {
          console.group("Rendering Post: ");
          console.log("Post: ", post);
          console.groupEnd();
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
