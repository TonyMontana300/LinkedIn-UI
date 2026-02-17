import React from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Logo from "../ui/Logo";
import HoverIcons from "../icons/HoverIcons";
import rocketAnim from "../../assets/icons/Rocket launch animation _Space exploration.json";
import peopleAnim from "../../assets/icons/Success.json";
import learningAnim from "../../assets/icons/Read a book.json";
import jobsAnim from "../../assets/icons/jobs.json";
import gamesAnim from "../../assets/icons/games icon.json";
import appAnim from "../../assets/icons/Uploading to cloud.json";

const Navbar = () => {
  const rocketRef = useRef(null);
  const peopleRef = useRef(null);
  const learningRef = useRef(null);
  const jobsRef = useRef(null);
  const gamesRef = useRef(null);
  const appRef = useRef(null);

  return (
    <nav className="nav hover:shadow-md transition-all duration-200 ease-in-out sticky top-0 bg-white shadow-sm z-50 opacity-0 animate-[slideDown_0.6s_ease_forwards]">
      <div className="flex justify-between items-center px-4 py-3 mb-10 max-w-6xl mx-auto">
        <Logo />
        <div className="flex gap-4 md:gap-8 items-center">
          <ul className="md:flex hidden gap-8 items-center list-none opacity-0 animate-[fadeIn_0.5s_ease_0.2s_forwards]">
            <li
              className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
              onMouseEnter={() => rocketRef.current?.play()}
              onMouseLeave={() => {
                rocketRef.current?.stop();
                rocketRef.current?.goToAndStop(0, true);
              }}
            >
              <HoverIcons ref={rocketRef} animation={rocketAnim} size={35} />
              <Link
                to="#"
                className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                Top Content
              </Link>
            </li>
            <li
              className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
              onMouseEnter={() => peopleRef.current?.play()}
              onMouseLeave={() => {
                peopleRef.current?.stop();
                peopleRef.current?.goToAndStop(0, true);
              }}
            >
              <HoverIcons ref={peopleRef} animation={peopleAnim} size={35} />
              <Link
                to="#"
                className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                People
              </Link>
            </li>
            <li
              className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
              onMouseEnter={() => learningRef.current?.play()}
              onMouseLeave={() => {
                learningRef.current?.stop();
                learningRef.current?.goToAndStop(0, true);
              }}
            >
              <HoverIcons
                ref={learningRef}
                animation={learningAnim}
                size={35}
              />
              <Link
                to="#"
                className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                Learning
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
                to="#"
                className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                Jobs
              </Link>
            </li>
            <li
              className="transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
              onMouseEnter={() => gamesRef.current?.play()}
              onMouseLeave={() => {
                gamesRef.current?.stop();
                gamesRef.current?.goToAndStop(0, true);
              }}
            >
              <HoverIcons ref={gamesRef} animation={gamesAnim} size={35} />
              <Link
                to="#"
                className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                Games
              </Link>
            </li>
            <li
              className="transition-transform duration-200 ease-out hover:-translate-y-0.5 border-solid border-r border-l border-gray-200 hover:border-gray-300 py-1 px-3 flex flex-col items-center"
              onMouseEnter={() => appRef.current?.play()}
              onMouseLeave={() => {
                appRef.current?.stop();
                appRef.current?.goToAndStop(0, true);
              }}
            >
              <HoverIcons ref={appRef} animation={appAnim} size={35} />
              <Link
                to="#"
                className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                Get the app
              </Link>
            </li>
          </ul>
          <div className="flex items-center gap-2">
            <Link
              to="/login"
              className="ring-1 ring-blue-600 px-4 py-2 md:px-6 md:py-3 text-blue-600 hover:text-blue-800 rounded-3xl font-medium hover:bg-blue-100 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Sign in
            </Link>
            <Link
              to="/signup"
              className="px-4 py-2 md:px-6 md:py-3 disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:bg-blue-600 disabled:active:scale-100 disabled:active:ring-0 bg-blue-700 text-white rounded-3xl font-medium hover:bg-blue-800 focus:outline-none active:ring-1 active:ring-blue-600 active:ring-offset-1 active:scale-[0.99] transition-all ease-out duration-200"
            >
              Join now
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
