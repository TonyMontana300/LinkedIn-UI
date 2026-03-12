import React from "react";
import { Link } from "react-router-dom";
import { useRef } from "react";
import HoverIcons from "../icons/HoverIcons";
import videoAnim from "../../assets/icons/Calling video icon.json";
import imageAnim from "../../assets/icons/Image Not Preview.json";
import articleAnim from "../../assets/icons/Write.json" 
import profile from "../../assets/images/profile.jfif"

const CreatePost = () => {
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const articleRef = useRef(null);

  return (
    <div className="md:pt-3 px-4 pb-1 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="flex gap-2">
        <img
          src={profile}
          alt="Profile Image"
          className="w-12 h-12 rounded-full object-cover shadow-md"
        />

        <Link
          to="#"
          className="w-full border border-gray-400 rounded-full px-4 py-3 text-sm font-semibold text-gray-900"
        >
          Start a post
        </Link>
      </div>

      <div className="flex justify-around my-1">
        <Link
          to="#"
          className="hover:bg-[#F3F3F3] py-2 px-2 rounded-sm flex items-center"
          onMouseEnter={() => videoRef.current?.play()}
          onMouseLeave={() => {
            videoRef.current?.stop();
            videoRef.current?.goToAndStop(0, true);
          }}
        >
          <HoverIcons ref={videoRef} animation={videoAnim} size={35} />
          Video
        </Link>
        <Link
          to="#"
          className="hover:bg-[#F3F3F3] py-2 px-2 rounded-sm flex items-center"
          onMouseEnter={() => imageRef.current?.play()}
          onMouseLeave={() => {
            imageRef.current?.stop();
            imageRef.current?.goToAndStop(0, true);
          }}
        >
          <HoverIcons ref={imageRef} animation={imageAnim} size={35} />
          Photo
        </Link>
        <Link to="#" className="hover:bg-[#F3F3F3] py-2 px-2 rounded-sm flex items-center"
          onMouseEnter={() => articleRef.current?.play()}
          onMouseLeave={() => {
            articleRef.current?.stop();
            articleRef.current?.goToAndStop(0, true);
          }}
        >
          <HoverIcons ref={articleRef} animation={articleAnim} size={35} />
          Write Article
        </Link>
      </div>
    </div>
  );
};

export default CreatePost;
