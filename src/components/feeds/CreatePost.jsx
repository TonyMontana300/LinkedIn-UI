import React from "react";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";
import { API_URL } from "../../../server/utils/api";
import { useAuth } from "../../hooks/useAuth";
import HoverIcons from "../icons/HoverIcons";
import videoAnim from "../../assets/icons/Calling video icon.json";
import imageAnim from "../../assets/icons/Image Not Preview.json";
import articleAnim from "../../assets/icons/Write.json";
import profile from "../../assets/images/profile.jfif";
import BlueBtn from "../ui/BlueBtn";
import CutBtn2 from "../ui/CutBtn2";

const CreatePost = ({
  onPostCreated,
  isEdit,
  post,
  onPostUpdated,
  onClose,
}) => {
  const { user } = useAuth();
  const [showModal, setShowModal] = useState(false);
  const [content, setContent] = useState("");
  const videoRef = useRef(null);
  const imageRef = useRef(null);
  const articleRef = useRef(null);
  const textareaRef = useRef();

  useEffect(() => {
    if (showModal) textareaRef.current?.focus();
  }, [showModal]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(() => {
    if (isEdit && post) {
      setContent(post.content);
    }
  }, [isEdit, post]);

  const handleSubmit = async () => {
    try {
      const token = localStorage.getItem("token");

      const url = isEdit
        ? `${API_URL}/api/posts/${post._id}`
        : `${API_URL}/api/posts`;
      const method = isEdit ? "PUT" : "POST";

      const res = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({ content }),
      });
      const newPost = await res.json();

      if (res.ok) {
        if (isEdit) {
          onPostUpdated(newPost);
          onClose();
        } else {
          onPostCreated(newPost);
          setShowModal(false);
        }
        setContent("");
      }
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="md:pt-3 px-4 pb-1 bg-white rounded-md shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200 relative">
      <div className="flex gap-2">
        <img
          src={profile}
          alt="Profile Image"
          className="w-12 h-12 rounded-full object-cover shadow-md"
        />

        <button
          className="w-full border inline text-left hover:bg-[#F3F3F3] border-gray-400 rounded-full px-4 py-3 text-sm font-semibold text-gray-900 cursor-pointer transition-all duration-200 ease-in-out"
          onClick={() => setShowModal(true)}
        >
          Start a post
        </button>
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
        <Link
          to="#"
          className="hover:bg-[#F3F3F3] py-2 px-2 rounded-sm flex items-center"
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

      {(showModal || isEdit) && (
        <div className="fixed inset-0 z-50 flex justify-center items-center bg-black/50">
          <div className="bg-white rounded-xl w-2xl pt-4 shadow-sm hover:shadow-lg hover:shadow-black/50 shadow-black/40 transition-shadow duration-200 relative">
            <div className="px-6">
              <Link
                to=""
                className="flex gap-3 items-center hover:bg-[#F3F3F3] w-57 p-3 rounded-2xl mb-6"
              >
                <img
                  src={profile}
                  alt="Profile Image"
                  className="rounded-full h-14 w-14"
                />
                <div>
                  <h2 className="text-xl font-semibold text-gray-900">
                    {user?.name}
                  </h2>
                  <p className="text-sm text-gray-900">Post to anyone</p>
                </div>
              </Link>
            </div>
            <div className="px-6 min-h-60">
              <textarea
                ref={textareaRef}
                onChange={(e) => setContent(e.target.value)}
                value={content}
                placeholder="What do you want to talk about?"
                className="w-full h-30 outline-none text-xl resize-none"
              />
            </div>
            <div className="px-6 py-3 border-t border-t-gray-300 flex justify-end">
              <BlueBtn
                text={isEdit ? "Save" : "Post"}
                onClick={handleSubmit}
                disabled={!content.trim()}
              />
            </div>
            <div className="absolute right-3 top-3">
              <CutBtn2 onClick={() => {
                setShowModal(false);
                onClose && onClose()
              }} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CreatePost;
