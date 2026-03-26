import React from "react";
import CutBtn from "../ui/CutBtn";
import { Link } from "react-router-dom";
import {
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Repeat2,
  Send,
} from "lucide-react";
import profile from "../../assets/images/profile.jfif";
import { useAuth } from "../../hooks/useAuth";

const FeedPost = ({ post, onDelete, onLike }) => {
  const { user } = useAuth();
  const isLiked = post.likes.some((id) => id.toString() === user._id);

  return (
    <div className="md:pt-3 pb-1 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex justify-between px-4">
        <div className="flex gap-2">
          <div>
            <Link
              to="/profile/:id"
              className="h-12 w-12 rounded-full flex justify-center items-center"
            >
              <img
                src={profile}
                alt="Profile Image"
                className="w-12 h-12 rounded-full object-cover shadow-md"
              />
            </Link>
          </div>
          <Link to="/profile/:id">
            <h1 className="inline-flex items-center gap-1 font-medium text-gray-900 hover:text-blue-600 hover:underline">
              {post.user.name}
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
            <p className="text-xs text-gray-700">{post.user.headline}</p>
            <span className="text-xs text-gray-700">
              {new Date(post.createdAt).toLocaleString()} •
            </span>
          </Link>
        </div>
        <CutBtn onClick={() => onDelete(post._id)} />
      </div>

      <div className="my-2">
        <p className="px-4 text-gray-900 text-sm my-1">
          {post?.description}
        </p>
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
          to="#"
          className="flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-2 px-3 flex-1"
        >
          <MessageCircle className="w-4 h-4" />
          Comment
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
    </div>
  );
};

export default FeedPost;
