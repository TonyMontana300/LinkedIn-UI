import React from "react";

const Activity = () => {
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div>
          <h2>Activity</h2>
          <span>82 followers</span>
          <div style={{ display: "flex", gap: "5px" }}>
            <span>Posts</span>
            <span>Comments</span>
          </div>
        </div>
        <div>
          <button>Create a post</button>
        </div>
      </div>
      
      <div style={{ display: "flex", gap: "10px" }}>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
        <div>Card</div>
      </div>
      <button>Show all posts/comments</button>
    </div>
  );
};

export default Activity;
