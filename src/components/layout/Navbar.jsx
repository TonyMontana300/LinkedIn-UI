import React from "react";
import { useRef, useState, useEffect } from "react";
import { Link } from "react-router-dom";
import LogoIn from "../ui/LogoIn";
import SearchBar from "../ui/SearchBar";
import HoverIcons from "../icons/HoverIcons";
import homeAnim from "../../assets/icons/Home Icon Loading.json";
import networkAnim from "../../assets/icons/Man and Woman say Hi !.json";
import jobsAnim from "../../assets/icons/jobs.json";
import messageAnim from "../../assets/icons/Message Icon Animation.json";
import notificationAnim from "../../assets/icons/Notification Bell.json";
import profileAnim from "../../assets/icons/Profile Avatar of Young Boy.json";
import HoverProfile from "../navbar/HoverProfile";
import { useAuth } from "../../hooks/useAuth";

const Navbar = () => {
  const { user } = useAuth();

  const homeRef = useRef(null);
  const networkRef = useRef(null);
  const jobsRef = useRef(null);
  const messageRef = useRef(null);
  const notificationRef = useRef(null);
  const profileRef = useRef(null);

  const [openProfile, setOpenProfile] = useState(false);
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    const handleClickOutside = () => setOpenProfile(false);
    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <>
      <nav className="hover:shadow-md transition-all duration-200 ease-in-out sticky top-0 bg-white shadow-sm z-50 opacity-0 animate-[slideDown_0.6s_ease_forwards]">
        <div className="flex justify-between items-center px-4 py-3 max-w-6xl w-full mx-auto">
          <LogoIn />
          <SearchBar />
          <button className="md:hidden" onClick={() => setOpenMenu(!openMenu)}>
            <svg
              width="20px"
              height="20px"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M20 7L4 7"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M20 12L4 12"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
              <path
                d="M20 17L4 17"
                stroke="#1C274C"
                stroke-width="1.5"
                stroke-linecap="round"
              />
            </svg>
          </button>
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
              <HoverIcons
                ref={notificationRef}
                animation={notificationAnim}
                size={35}
              />
              <Link
                to="/notifications"
                className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                Notifications
              </Link>
            </li>
            <li
              onClick={(e) => {
                e.stopPropagation();
                setOpenProfile(!openProfile);
              }}
              className="relative transition-transform duration-200 ease-out hover:-translate-y-0.5 flex flex-col items-center"
              onMouseEnter={() => profileRef.current?.play()}
              onMouseLeave={() => {
                profileRef.current?.stop();
                profileRef.current?.goToAndStop(0, true);
              }}
            >
              <HoverIcons ref={profileRef} animation={profileAnim} size={35} />
              <Link
                to="#"
                className="text-sm text-gray-600 hover:text-gray-800 font-semibold"
              >
                {user?.name || "Me"}
                {openProfile && <HoverProfile />}
              </Link>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`fixed z-50 inset-0 bg-black/50 transition-opacity duration-300 ease-in-out ${openMenu ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
        onClick={() => setOpenMenu(false)}
      >
        <div
          className={`bg-gray-50 w-70 h-full absolute top-0 right-0 shadow-xl p-6 transition-transform duration-300 ease-out ${openMenu ? "translate-x-0" : "translate-x-full"}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="flex flex-col justify-between h-full">
            <div>
              <div className="flex items-center justify-between mb-3">
                <p className="text-xs text-gray-400 uppercase">Menu</p>
                <button
                  onClick={() => setOpenMenu(false)}
                  className="p-1 rounded-full cursor-pointer hover:bg-gray-200 transition-colors duration-200"
                >
                  <svg
                    width="20px"
                    height="20px"
                    viewBox="0 -0.5 25 25"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M6.96967 16.4697C6.67678 16.7626 6.67678 17.2374 6.96967 17.5303C7.26256 17.8232 7.73744 17.8232 8.03033 17.5303L6.96967 16.4697ZM13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697L13.0303 12.5303ZM11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303L11.9697 11.4697ZM18.0303 7.53033C18.3232 7.23744 18.3232 6.76256 18.0303 6.46967C17.7374 6.17678 17.2626 6.17678 16.9697 6.46967L18.0303 7.53033ZM13.0303 11.4697C12.7374 11.1768 12.2626 11.1768 11.9697 11.4697C11.6768 11.7626 11.6768 12.2374 11.9697 12.5303L13.0303 11.4697ZM16.9697 17.5303C17.2626 17.8232 17.7374 17.8232 18.0303 17.5303C18.3232 17.2374 18.3232 16.7626 18.0303 16.4697L16.9697 17.5303ZM11.9697 12.5303C12.2626 12.8232 12.7374 12.8232 13.0303 12.5303C13.3232 12.2374 13.3232 11.7626 13.0303 11.4697L11.9697 12.5303ZM8.03033 6.46967C7.73744 6.17678 7.26256 6.17678 6.96967 6.46967C6.67678 6.76256 6.67678 7.23744 6.96967 7.53033L8.03033 6.46967ZM8.03033 17.5303L13.0303 12.5303L11.9697 11.4697L6.96967 16.4697L8.03033 17.5303ZM13.0303 12.5303L18.0303 7.53033L16.9697 6.46967L11.9697 11.4697L13.0303 12.5303ZM11.9697 12.5303L16.9697 17.5303L18.0303 16.4697L13.0303 11.4697L11.9697 12.5303ZM13.0303 11.4697L8.03033 6.46967L6.96967 7.53033L11.9697 12.5303L13.0303 11.4697Z"
                      fill="#000000"
                    />
                  </svg>
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="/feed"
                  className="flex items-center gap-4 w-full text-sm px-3 py-2 transition-colors duration-200 hover:bg-gray-200 active:scale-[0.98] rounded-md text-gray-600 font-medium hover:text-gray-900"
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M18.5 3H16C15.7239 3 15.5 3.22386 15.5 3.5V3.55891L19 6.35891V3.5C19 3.22386 18.7762 3 18.5 3Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M20.75 10.9605L21.5315 11.5857C21.855 11.8444 22.3269 11.792 22.5857 11.4685C22.8444 11.1451 22.792 10.6731 22.4685 10.4143L14.3426 3.91362C12.9731 2.81796 11.027 2.81796 9.65742 3.91362L1.53151 10.4143C1.20806 10.6731 1.15562 11.1451 1.41438 11.4685C1.67313 11.792 2.1451 11.8444 2.46855 11.5857L3.25003 10.9605V21.25H2.00003C1.58581 21.25 1.25003 21.5858 1.25003 22C1.25003 22.4142 1.58581 22.75 2.00003 22.75H22C22.4142 22.75 22.75 22.4142 22.75 22C22.75 21.5858 22.4142 21.25 22 21.25H20.75V10.9605ZM9.25003 9.5C9.25003 7.98122 10.4812 6.75 12 6.75C13.5188 6.75 14.75 7.98122 14.75 9.5C14.75 11.0188 13.5188 12.25 12 12.25C10.4812 12.25 9.25003 11.0188 9.25003 9.5ZM12.0494 13.25C12.7143 13.25 13.2871 13.2499 13.7459 13.3116C14.2375 13.3777 14.7088 13.5268 15.091 13.909C15.4733 14.2913 15.6223 14.7625 15.6884 15.2542C15.7462 15.6842 15.7498 16.2146 15.75 16.827C15.75 16.8679 15.75 16.9091 15.75 16.9506L15.75 21.25H14.25V17C14.25 16.2717 14.2484 15.8009 14.2018 15.454C14.1581 15.1287 14.0875 15.0268 14.0304 14.9697C13.9733 14.9126 13.8713 14.842 13.546 14.7982C13.1991 14.7516 12.7283 14.75 12 14.75C11.2717 14.75 10.8009 14.7516 10.4541 14.7982C10.1288 14.842 10.0268 14.9126 9.9697 14.9697C9.9126 15.0268 9.84199 15.1287 9.79826 15.454C9.75162 15.8009 9.75003 16.2717 9.75003 17V21.25H8.25003L8.25003 16.9506C8.24999 16.2858 8.24996 15.7129 8.31163 15.2542C8.37773 14.7625 8.52679 14.2913 8.90904 13.909C9.29128 13.5268 9.76255 13.3777 10.2542 13.3116C10.7129 13.2499 11.2858 13.25 11.9507 13.25H12.0494Z"
                      fill="#1C274C"
                    />
                    <path
                      fill-rule="evenodd"
                      clip-rule="evenodd"
                      d="M10.75 9.5C10.75 8.80964 11.3097 8.25 12 8.25C12.6904 8.25 13.25 8.80964 13.25 9.5C13.25 10.1904 12.6904 10.75 12 10.75C11.3097 10.75 10.75 10.1904 10.75 9.5Z"
                      fill="#1C274C"
                    />
                  </svg>
                  Home
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="/my-network"
                  className="flex items-center gap-4 w-full text-sm px-3 py-2 transition-colors duration-200 hover:bg-gray-200 active:scale-[0.98] rounded-md text-gray-600 font-medium hover:text-gray-900"
                >
                  <svg
                    fill="#1C274C"
                    height="18px"
                    width="18px"
                    version="1.1"
                    id="Icons"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlns:xlink="http://www.w3.org/1999/xlink"
                    viewBox="0 0 32 32"
                    xml:space="preserve"
                  >
                    <g>
                      <path
                        d="M26.4,22l-2.7-1.9l-4.3-3l-2.9-2c0,0,0,0,0,0c0,0,0,0-0.1-0.1c-0.1,0-0.2-0.1-0.2-0.1c0,0,0,0,0,0c-0.1,0-0.2,0-0.3,0
		c0,0-0.1,0-0.1,0c-0.1,0-0.2,0.1-0.2,0.1c0,0,0,0-0.1,0c0,0,0,0,0,0l-2.9,2l-4.3,3L5.6,22c-2,0.2-3.6,1.9-3.6,4c0,2.2,1.8,4,4,4
		s4-1.8,4-4c0-1.4-0.7-2.6-1.8-3.3l1.2-0.9l4.3-3l1.3-0.9v1.6v2.6c-1.7,0.4-3,2-3,3.9c0,2.2,1.8,4,4,4s4-1.8,4-4
		c0-1.9-1.3-3.4-3-3.9v-2.6v-1.6l1.3,0.9l4.3,3l1.2,0.9C22.7,23.4,22,24.6,22,26c0,2.2,1.8,4,4,4s4-1.8,4-4
		C30,23.9,28.4,22.2,26.4,22z"
                      />
                      <path
                        d="M11,14l10,0c0.3,0,0.6-0.1,0.8-0.4c0.2-0.2,0.3-0.5,0.2-0.8c-0.3-1.5-1.4-2.7-2.9-3.1c-0.4-0.1-0.7-0.4-0.8-0.8
		C18.7,8.4,19,7.7,19,7V5c0-1.7-1.3-3-3-3s-3,1.3-3,3v2c0,0.7,0.3,1.4,0.7,1.9c-0.1,0.4-0.4,0.7-0.8,0.8c-1.5,0.4-2.6,1.6-2.8,3.1
		c-0.1,0.3,0,0.6,0.2,0.8C10.4,13.9,10.7,14,11,14z"
                      />
                    </g>
                  </svg>
                  My Network
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="/jobs"
                  className="flex items-center gap-4 text-sm w-full px-3 py-2 transition-colors duration-200 hover:bg-gray-200 active:scale-[0.98] rounded-md text-gray-600 font-medium hover:text-gray-900"
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M5.508 2.466L4.356 5H2.5A1.5 1.5 0 001 6.5v1.882l.503.251a19 19 0 0016.994 0L19 8.382V6.5A1.5 1.5 0 0017.5 5h-1.856l-1.152-2.534A2.5 2.5 0 0012.216 1H7.784a2.5 2.5 0 00-2.276 1.466zM7.784 3a.5.5 0 00-.455.293L6.553 5h6.894l-.776-1.707A.5.5 0 0012.216 3H7.784z"
                      fill="#1C274C"
                    />
                    <path
                      d="M19 10.613a20.986 20.986 0 01-8 2.003V14a1 1 0 01-2 0v-1.384c-2.74-.131-5.46-.798-8-2.003V17.5A1.5 1.5 0 002.5 19h15a1.5 1.5 0 001.5-1.5v-6.887z"
                      fill="#1C274C"
                    />
                  </svg>
                  Jobs
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="/messages"
                  className="flex items-center gap-4 text-sm w-full px-3 py-2 transition-colors duration-200 hover:bg-gray-200 active:scale-[0.98] rounded-md text-gray-600 font-medium hover:text-gray-900"
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M13.19 6H6.79C6.53 6 6.28 6.01 6.04 6.04C3.35 6.27 2 7.86 2 10.79V14.79C2 18.79 3.6 19.58 6.79 19.58H7.19C7.41 19.58 7.7 19.73 7.83 19.9L9.03 21.5C9.56 22.21 10.42 22.21 10.95 21.5L12.15 19.9C12.3 19.7 12.54 19.58 12.79 19.58H13.19C16.12 19.58 17.71 18.24 17.94 15.54C17.97 15.3 17.98 15.05 17.98 14.79V10.79C17.98 7.6 16.38 6 13.19 6ZM6.5 14C5.94 14 5.5 13.55 5.5 13C5.5 12.45 5.95 12 6.5 12C7.05 12 7.5 12.45 7.5 13C7.5 13.55 7.05 14 6.5 14ZM9.99 14C9.43 14 8.99 13.55 8.99 13C8.99 12.45 9.44 12 9.99 12C10.54 12 10.99 12.45 10.99 13C10.99 13.55 10.55 14 9.99 14ZM13.49 14C12.93 14 12.49 13.55 12.49 13C12.49 12.45 12.94 12 13.49 12C14.04 12 14.49 12.45 14.49 13C14.49 13.55 14.04 14 13.49 14Z"
                      fill="#1C274C"
                    />
                    <path
                      d="M21.9802 6.79V10.79C21.9802 12.79 21.3602 14.15 20.1202 14.9C19.8202 15.08 19.4702 14.84 19.4702 14.49L19.4802 10.79C19.4802 6.79 17.1902 4.5 13.1902 4.5L7.10025 4.51C6.75025 4.51 6.51025 4.16 6.69025 3.86C7.44025 2.62 8.80025 2 10.7902 2H17.1902C20.3802 2 21.9802 3.6 21.9802 6.79Z"
                      fill="#1C274C"
                    />
                  </svg>
                  Messages
                </Link>
                <Link
                  onClick={() => setOpenMenu(false)}
                  to="/notifications"
                  className="flex items-center gap-4 text-sm w-full px-3 py-2 transition-colors duration-200 hover:bg-gray-200 active:scale-[0.98] rounded-md text-gray-600 font-medium hover:text-gray-900"
                >
                  <svg
                    width="18px"
                    height="18px"
                    viewBox="0 0 24 24"
                    fill="#1C274C"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10.88 2.603A.75.75 0 0 1 11.614 2h.77a.75.75 0 0 1 .735.603l.143.712a1.5 1.5 0 0 0 .75 1.02l.3.165a5.586 5.586 0 0 1 3.239 4.47l.54 4.864c.101.905.564 1.732 1.283 2.291l.354.275a1.5 1.5 0 0 1 .534 1.548L20.25 18a1.32 1.32 0 0 1-1.281 1H15a3 3 0 1 1-6 0H5.03a1.32 1.32 0 0 1-1.28-1l-.013-.052A1.5 1.5 0 0 1 4.27 16.4l.354-.275a3.375 3.375 0 0 0 1.282-2.291l.54-4.865A5.586 5.586 0 0 1 9.688 4.5l.3-.164a1.5 1.5 0 0 0 .75-1.021l.142-.712z"
                      fill="#1C274C"
                    />
                  </svg>
                  Notifications
                </Link>
              </div>
            </div>
            <div className="border-t border-t-gray-300 pt-3">
              <Link
                onClick={() => setOpenMenu(false)}
                to={`/profile/${user?.id || ""}`}
                className="flex items-center gap-4 text-sm w-full px-3 py-2 transition-colors duration-200 hover:bg-gray-200 active:scale-[0.98] rounded-md text-gray-600 font-medium hover:text-gray-900"
              >
                <img
                  src={user?.profileImage}
                  alt="profile"
                  className="w-10 h-10 object-cover rounded-full"
                />
                {user?.name}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
