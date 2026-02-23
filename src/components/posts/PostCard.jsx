import React from "react";
import { Link } from "react-router-dom";
import {
  MoreHorizontal,
  ThumbsUp,
  MessageCircle,
  Repeat2,
  Send,
} from "lucide-react";

const PostCard = () => {
  return (
    <div className="min-w-90.5 rounded-lg shadow-[0_1px_2px_(0,0,0,0.08)] px-4 pt-4 border border-gray-300 flex flex-col gap-2">
      <div className="flex justify-between items-start">
        <div className="flex gap-3">
          <img
            src="https://media.licdn.com/dms/image/v2/D5603AQHskjWs-MGpdg/profile-displayphoto-scale_100_100/B56ZuIhVWsJ8Ag-/0/1767522000929?e=1773273600&v=beta&t=oZDkUTrgeKHH0io61oOZlwUfbzGyeVIIrv2ft6A694k"
            alt="Profile"
            className="w-12 h-12 rounded-full object-cover"
          />
          <div>
            <h3 className="font-semibold text-gray-900 inline-flex items-center gap-1 hover:underline hover:text-blue-600">
              Ayush Barman
              <svg
                width="18px"
                height="18px"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                  stroke="#404040"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M7.75 12L10.58 14.83L16.25 9.17004"
                  stroke="#404040"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
              <span className="text-gray-500 font-normal text-xs">• You</span>
            </h3>
            <p className="text-gray-500 font-normal text-xs">
              Full-Stack Web Developer
            </p>
          </div>
        </div>
        <MoreHorizontal className="w-7 h-7 p-1 text-gray-500 cursor-pointer hover:bg-[#F3F3F3] rounded-full transition-all ease-in-out duration-200" />
      </div>
      <div className="flex flex-col border-b border-b-gray-200 py-1">
        <p className="text-base font-medium text-gray-600 h-80">
          Deployment teaches you more about the web than 10 tutorials ever will.
          🚀
        </p>
        <span className="hover:underline hover:text-blue-600 cursor-pointer flex items-center gap-1"><ThumbsUp className="w-4 h-4"/> 3</span>
      </div>
      <div className="flex justify-between gap-1 pb-2">
        <Link to="#" className="flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-4 px-8 flex-1 hover:text-blue-600"><ThumbsUp className="w-4 h-4"/></Link>
        <Link to="#" className="flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-4 px-8 flex-1"><MessageCircle className="w-4 h-4"/></Link>
        <Link to="#" className="flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-4 px-8 flex-1"><Repeat2 className="w-4 h-4"/></Link>
        <Link to="#" className="flex items-center justify-center gap-2 transition-all ease-in-out duration-200 hover:bg-[#F3F3F3] rounded-sm py-4 px-8 flex-1"><Send className="w-4 h-4"/></Link>
      </div>
    </div>
  );
};

export default PostCard;
