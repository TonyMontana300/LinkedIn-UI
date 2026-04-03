import React from "react";
import { useState, useEffect } from "react";
import CreatePost from "../feeds/CreatePost.jsx";
import LeftPanel from "../feeds/LeftPanel";
import RightPanel from "../feeds/RightPanel";
import MainPanel from "../feeds/MainPanel";
import { useAuth } from "../../hooks/useAuth.js";
import { API_URL } from "../../../server/utils/api.js";

const FeedLayout = () => {
  const { user, loading, token } = useAuth();
  const [posts, setPosts] = useState([]);
  const [editingPost, setEditingPost] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!token) {
          console.log("No token!, skipping posts fetch");
          return;
        }

        setPosts([]);

        const res = await fetch(`${API_URL}/api/posts`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();
        if (Array.isArray(data)) {
          setPosts(data);
        } else {
          console.error("Invalid posts data: ", data);
          setPosts([]);
        }
      } catch (error) {
        console.error("Error fetching posts: ", error);
      }
    };

    if (!user?._id) return;

    fetchPosts();
  }, [user?._id, token]);

  const handleLike = async (postId) => {
    const prevPosts = posts;

    setPosts((prev) =>
      prev.map((p) => {
        if (p._id !== postId) return p;

        const isLiked = p.likes.some((id) => String(id) === String(user._id));
        const updatedLikes = isLiked
          ? p.likes.filter((id) => String(id) !== String(user._id))
          : [...p.likes, user._id];
        return { ...p, likes: updatedLikes };
      }),
    );

    try {
      const res = await fetch(`${API_URL}/api/posts/${postId}/like`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      const updatedPost = await res.json();

      if (res.ok) {
        setPosts((prev) =>
          prev.map((p) =>
            p._id === postId ? { ...p, likes: updatedPost.likes } : p,
          ),
        );
      }
    } catch (error) {
      console.error(error);
      setPosts(prevPosts);
    }
  };

  const handleDelete = async (postId) => {
    try {
      const res = await fetch(`${API_URL}/api/posts/${postId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      const data = await res.json();
      if (res.ok) {
        setPosts((prev) => prev.filter((p) => p._id !== postId));
      } else {
        console.log(data.message);
      }
    } catch (error) {
      console.error(error);
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <main className="bg-[#F4F2EE] py-2 min-h-163">
      <div className="grid grid-cols-[1fr_3fr_1.3fr] gap-5 max-w-6xl mx-auto my-4">
        <LeftPanel />
        <MainPanel
          posts={posts}
          onDelete={handleDelete}
          onEdit={(post) => setEditingPost(post)}
          onLike={handleLike}
          onPostCreated={(newPost) => setPosts((prev) => [newPost, ...prev])}
        />
        <RightPanel />
      </div>
      {editingPost && (
        <CreatePost
          isEdit={true}
          post={editingPost}
          onClose={() => setEditingPost(null)}
          onPostUpdated={(updatedPost) => {
            setPosts((prev) =>
              prev.map((p) => (p._id === updatedPost._id ? updatedPost : p)),
            );
            setEditingPost(null);
          }}
        />
      )}
    </main>
  );
};

export default FeedLayout;
