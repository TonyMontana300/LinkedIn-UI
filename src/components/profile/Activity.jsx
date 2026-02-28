import React from "react";
import { Link } from "react-router-dom";
import PostCard from "../posts/PostCard";
import { useRef, useState, useEffect } from "react";
import BlueBtn from "../ui/BlueBtn";
import ShowBtn from "../ui/ShowBtn";
import BlackBtn from "../ui/BlackBtn";

const Activity = () => {
  const [showLeft, setShowLeft] = useState(false);
  const [showRight, setShowRight] = useState(true);

  const scrollRef = useRef(null);

  const scrollLeft = () => {
    scrollRef.current.scrollBy({ left: -300, behavior: "smooth" });
  };
  const scrollRight = () => {
    scrollRef.current.scrollBy({ left: 300, behavior: "smooth" });
  };

  useEffect(() => {
    const container = scrollRef.current;

    const handleScroll = () => {
      const { scrollLeft, scrollWidth, clientWidth } = container;

      setShowLeft(scrollLeft > 0);
      setShowRight(scrollLeft + clientWidth < scrollWidth - 1);
    };

    container.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => {
      container.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="pt-6 bg-white rounded-xl shadow-sm hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
      <div className="px-6 flex justify-between items-start">
        <div>
          <h2 className="text-xl font-semibold text-gray-900">Activity</h2>
          <Link
            to="#"
            className="text-sm font-semibold text-blue-700 hover:underline"
          >
            87 followers
          </Link>
          <div className="md:flex gap-2 mt-1 mb-3 hidden">
            <Link
              to="#"
              className="hover:bg-[#004C33] bg-[#01754F] px-4 py-2 md:px-4 md:py-1 rounded-full disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:active:scale-100 disabled:active:ring-0 text-white font-medium focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Posts
            </Link>
            <BlackBtn text="Comments"/>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <BlueBtn text="Create a post"/>
          <Link
            to="#"
            className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-11 h-11 flex items-center justify-center"
          >
            <svg
              className="hover:fill-[#151617]"
              fill="#000000"
              width="30"
              height="30"
              viewBox="-5 0 32 32"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>pencil</title>
              <path d="M18.344 4.781l-3.406 3.063s1.125 0.688 2.156 1.656c1 0.969 1.719 2.063 1.719 2.063l2.906-3.469s-0.031-0.625-1.406-1.969c-1.406-1.344-1.969-1.344-1.969-1.344zM7.25 21.938l-0.156 1.5 10.813-11.25s-0.719-1-1.594-1.844c-0.906-0.875-1.938-1.563-1.938-1.563l-10.813 11.25 1.688-0.094 0.188 1.813zM0 26.719l2.688-5.5 1.5-0.125 0.125 1.719 1.813 0.25-0.188 1.375-5.438 2.75z"></path>
            </svg>
          </Link>
        </div>
      </div>

      <div className="relative w-full md:w-209 mt-4 md:mt-0">
        <button
          onClick={scrollLeft}
          className={`absolute left-1 w-9 h-9 top-1/2 z-10 -translate-y-1/2 flex items-center justify-center hover:bg-[#404040] bg-[#666666] rounded-full p-1 transition-all ease-in-out duration-200 ${
            showLeft ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M14.9991 19L9.83911 14C9.56672 13.7429 9.34974 13.433 9.20142 13.0891C9.0531 12.7452 8.97656 12.3745 8.97656 12C8.97656 11.6255 9.0531 11.2548 9.20142 10.9109C9.34974 10.567 9.56672 10.2571 9.83911 10L14.9991 5"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
        <div
          ref={scrollRef}
          className="flex items-start px-6 gap-4 shrink-0 overflow-x-auto scroll-smooth no-scrollbar mb-2 snap-x snap-mandatory"
        >
          {/* {posts.map((post, index) => {
          <div key={index} className="min-w-[320px] bg-white rounded-lg shadow-sm p-4"></div>
        })} */}
          <PostCard />
          <PostCard />
          <PostCard />
          <PostCard />
        </div>

        <button
          onClick={scrollRight}
          className={`absolute right-1 w-9 h-9 flex items-center justify-center top-1/2 -translate-y-1/2 z-10 hover:bg-[#404040] bg-[#666666] rounded-full p-1 transition-all ease-in-out duration-200 ${
            showRight ? "opacity-100" : "opacity-0 pointer-events-none"
          }`}
        >
          <svg
            width="20px"
            height="20px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9 5L14.15 10C14.4237 10.2563 14.6419 10.5659 14.791 10.9099C14.9402 11.2539 15.0171 11.625 15.0171 12C15.0171 12.375 14.9402 12.7458 14.791 13.0898C14.6419 13.4339 14.4237 13.7437 14.15 14L9 19"
              stroke="white"
              stroke-width="1.5"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </button>
      </div>
      <ShowBtn text="Show all posts"/>
    </div>
  );
};

export default Activity;
