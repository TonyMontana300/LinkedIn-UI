import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import LogoIn from "../ui/LogoIn";
import SearchBar from "../ui/SearchBar";
import HoverIcons from "../icons/HoverIcons";
import homeAnim from "../../assets/icons/Home Icon Loading.json";
import networkAnim from "../../assets/icons/Man and Woman say Hi !.json";
import jobsAnim from "../../assets/icons/jobs.json"
import messageAnim from "../../assets/icons/Message Icon Animation.json"
import notificationAnim from "../../assets/icons/Notification Bell.json"
import profileAnim from "../../assets/icons/Profile Avatar of Young Boy.json"

const Navbar = () => {
  const homeRef = useRef(null);
  const networkRef = useRef(null);
  const jobsRef = useRef(null);
  const messageRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  return (
    <nav className="hover:shadow-md transition-all duration-200 ease-in-out sticky top-0 bg-white shadow-sm z-50 opacity-0 animate-[slideDown_0.6s_ease_forwards]">
      <div className="flex justify-between items-center px-4 py-3 max-w-6xl mx-auto">
        <LogoIn />
        <SearchBar />
        <ul className="md:flex hidden gap-8 items-center list-none opacity-0 animate-[fadeIn_0.5s_ease_0.2s_forwards]">
          <li
            className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
            onMouseEnter={() => homeRef.current?.play()}
            onMouseLeave={() => {
              homeRef.current?.stop();
              homeRef.current?.goToAndStop(0, true);
            }}
          >
            <HoverIcons ref={homeRef} animation={homeAnim} size={35} />
            <Link
              to="/feed"
              className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
            >
              Home
            </Link>
          </li>
          <li
            className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
            onMouseEnter={() => networkRef.current?.play()}
            onMouseLeave={() => {
              networkRef.current?.stop();
              networkRef.current?.goToAndStop(0, true);
            }}
          >
            <HoverIcons ref={networkRef} animation={networkAnim} size={35} />
            <Link
              to="/my-network"
              className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
            >
              My Network
            </Link>
          </li>
          <li
            className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
            onMouseEnter={() => jobsRef.current?.play()}
            onMouseLeave={() => {
              jobsRef.current?.stop();
              jobsRef.current?.goToAndStop(0, true);
            }}
          >
            <HoverIcons ref={jobsRef} animation={jobsAnim} size={35} />
            <Link
              to="/jobs"
              className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
            >
              Jobs
            </Link>
          </li>
          <li
            className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
            onMouseEnter={() => messageRef.current?.play()}
            onMouseLeave={() => {
              messageRef.current?.stop();
              messageRef.current?.goToAndStop(0, true);
            }}
          >
            <HoverIcons ref={messageRef} animation={messageAnim} size={35} />
            <Link
              to="/messages"
              className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
            >
              Messages
            </Link>
          </li>
          <li
            className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
            onMouseEnter={() => notificationRef.current?.play()}
            onMouseLeave={() => {
              notificationRef.current?.stop();
              notificationRef.current?.goToAndStop(0, true);
            }}
          >
            <HoverIcons ref={notificationRef} animation={notificationAnim} size={35} />
            <Link
              to="/notifications"
              className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
            >
              Notifications
            </Link>
          </li>
          <li
            className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
            onMouseEnter={() => profileRef.current?.play()}
            onMouseLeave={() => {
              profileRef.current?.stop();
              profileRef.current?.goToAndStop(0, true);
            }}
          >
            <HoverIcons ref={profileRef} animation={profileAnim} size={35} />
            <Link
              to="/profile/:id"
              className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
            >
              Me
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
