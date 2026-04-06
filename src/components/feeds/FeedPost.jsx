import React from "react";
import { useState, useEffect } from "react";
import CutBtn from "../ui/CutBtn";
import { Link } from "react-router-dom";
import { API_URL } from "../../../server/utils/api";
import BlueBtn from "../ui/BlueBtn";
import {
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Repeat2,
  Send,
} from "lucide-react";
import { useAuth } from "../../hooks/useAuth";

const FeedPost = ({ post, onDelete, onEdit, onLike }) => {
  const { user, token } = useAuth();

  const isLiked =
    user && post?.likes?.some((id) => id.toString() === user._id.toString());

  const isOwner =
    user &&
    post?.user?._id &&
    post.user._id.toString() === user?._id.toString();

  const [comments, setComments] = useState([]);
  const [commentText, setCommentText] = useState("");
  const [showComments, setShowComments] = useState(false);

  useEffect(() => {
    const fetchComments = async () => {
      try {
        if (!token) {
          console.log("No token!, skipping posts fetch");
          return;
        }

        const res = await fetch(`${API_URL}/api/comments/${post._id}`, {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        const data = await res.json();

        if (Array.isArray(data)) {
          setComments(data);
        } else {
          console.error("Invalid comments data: ", data);
        }
      } catch (error) {
        console.error(error);
      }
    };
    fetchComments();
  }, [post._id, token]);

  const handleAddComment = async () => {
    try {
      const res = await fetch(`${API_URL}/api/comments/${post._id}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content: commentText }),
      });

      const newComment = await res.json();

      if (res.ok) {
        setComments((prev) => [newComment, ...prev]);
        setCommentText("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:pt-3 pb-1 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between px-4">
        <div className="flex gap-2">
          <div>
            <Link
              to={`/profile/${post.user._id}`}
              className="h-12 w-12 rounded-full flex justify-center items-center"
            >
              <img
                src={post?.user?.profileImage}
                alt="Profile Image"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </Link>
          </div>
          <Link to={`/profile/${post.user._id}`}>
            <h1 className="inline-flex items-center gap-1 font-medium text-gray-900 hover:text-blue-600 hover:underline">
              {post?.user?.name}
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 12L10.58 14.83L16.25 9.17004"
                  stroke="#292D32"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            </h1>
            <span className="text-xs text-gray-700"> • Following</span>
            <p className="text-xs text-gray-700">{post?.user?.headline}</p>
            <span className="text-xs text-gray-700">
              {new Date(post.createdAt).toLocaleString()} •
            </span>
          </Link>
        </div>
        {isOwner && (
          <CutBtn
            onEdit={() => onEdit(post)}
            onDelete={() => onDelete(post._id)}
          />
        )}
      </div>

      <div className="my-2">
        <p className="px-4 text-gray-900 text-sm my-1">{post?.description}</p>
        <div className="text-gray-900 text-sm">{post.content}</div>
      </div>
      <div className="border-b border-b-gray-300 mx-6"></div>

      <div className="flex justify-between gap-3 pb-1 px-4 mt-2">
        <Link
          onClick={() => onLike(post._id)}
          to="#"
          className={`flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-2 px-3 flex-1 ${isLiked ? "text-blue-600" : ""} hover:text-blue-600`}
        >
          <ThumbsUp className="w-4 h-4" />
          Like ({post.likes.length})
        </Link>
        <Link
          onClick={() => setShowComments((prev) => !prev)}
          to="#"
          className="flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-2 px-3 flex-1"
        >
          <MessageCircle className="w-4 h-4" />
          Comment ({comments.length})
        </Link>
        <Link
          to="#"
          className="flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-2 px-3 flex-1"
        >
          <Repeat2 className="w-4 h-4" />
          Repost
        </Link>
        <Link
          to="#"
          className="flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-2 px-3 flex-1"
        >
          <Send className="w-4 h-4" />
          Share
        </Link>
      </div>
      {showComments && (
        <div className="px-4 mt-3">
          {/* Input */}
          <div className="flex gap-2 mb-3">
            <img src={user?.profileImage} className="w-8 h-8 rounded-full" alt="" />
            <input
              type="text"
              placeholder="Add a comment..."
              className="flex-1 ring-gray-300 ring-1 focus:outline-none focus:ring-2 rounded-full px-3 py-2 text-sm transition-all duration-200 ease-in-out"
              value={commentText}
              onChange={(e) => setCommentText(e.target.value)}
            />
            <BlueBtn text="Comment" onClick={handleAddComment} />
          </div>

          {/* Comments List */}
          {Array.isArray(comments) &&
            comments.map((c) => (
              <div className="flex gap-1 mb-2" key={c._id}>
                <div>
                  <Link
                    to={`/profile/${post.user._id}`}
                    className="h-10 w-10 rounded-full flex justify-center items-center"
                  >
                    <img
                      src={user?.profileImage}
                      alt="Profile Image"
                      className="w-8 h-8 rounded-full object-cover shadow-md"
                    />
                  </Link>
                </div>
                <div className="bg-gray-100 px-3 py-2 w-full rounded-xl">
                  <Link to={`/profile/${post.user._id}`}>
                    <h1 className="inline-flex items-center gap-1 font-semibold text-sm text-gray-900">
                      {c.user.name}
                      <svg
                        width="18px"
                        height="18px"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                        <path
                          d="M7.75 12L10.58 14.83L16.25 9.17004"
                          stroke="#292D32"
                          stroke-width="1.5"
                          stroke-linecap="round"
                          stroke-linejoin="round"
                        />
                      </svg>
                    </h1>
                    <span className="text-xs text-gray-700"> • Following</span>
                    <p className="text-xs text-gray-700">{c.user?.headline}</p>
                  </Link>
                  <p className="text-sm text-gray-900 my-4">{c.content}</p>
                </div>
              </div>
            ))}
        </div>
      )}
    </div>
  );
};

export default FeedPost;
