import React from "react";
import GreenBtn from "../ui/GreenBtn";
import BlackBtn from "../ui/BlackBtn";
import { Link } from "react-router-dom";
import { useState } from "react";
import { notifications } from "../../data/notification";

const NotificationFeed = () => {
  const [activeTab, setActiveTab] = useState("All");

  const category = ["All", "Jobs", "My posts", "Mentions"];

  const filteredNotifications =
    activeTab === "All"
      ? notifications
      : notifications.filter(
          (notification) => notification.category === activeTab,
        );

  return (
    <div className="flex flex-col gap-3">
      <div className="bg-white rounded-xl p-4 gap-3 flex shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
        {category.map((tab) => (
          <div key={tab}>
            {activeTab === tab ? (
              <GreenBtn text={tab} onClick={() => setActiveTab(tab)} />
            ) : (
              <BlackBtn text={tab} onClick={() => setActiveTab(tab)} />
            )}
          </div>
        ))}
      </div>

      <div className="flex flex-col bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-lg hover:shadow-gray-300 shadow-gray-300 transition-shadow duration-200">
        {filteredNotifications.map((item) => (
          <Link
            to="/feed"
            key={item.id}
            className="flex justify-between p-5 transition-all ease-in-out duration-200 hover:bg-[#EBEBEB] border-b border-b-gray-300"
          >
            <div className="flex items-center gap-2">
              <img
                src={item.avatar}
                alt="avatar"
                className="w-12 h-12 rounded-full"
              />
              <div>
                <p className="text-sm text-gray-900">
                  <span className="text-gray-900 font-semibold text-sm">
                    {item.user}
                  </span>{" "}
                  {item.text} {item.message}
                </p>
              </div>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-xs text-gray-900">{item.time}</span>
              <Link className="hover:bg-[#D4DDE6] rounded-full p-1 transition-all ease-in-out duration-200 w-9 h-9 flex items-center justify-center">
                <svg
                  width="25px"
                  height="25px"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M5 10C6.10457 10 7 10.8954 7 12C7 13.1046 6.10457 14 5 14C3.89543 14 3 13.1046 3 12C3 10.8954 3.89543 10 5 10Z"
                    fill="#666666"
                  />
                  <path
                    d="M12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12C10 10.8954 10.8954 10 12 10Z"
                    fill="#666666"
                  />
                  <path
                    d="M21 12C21 10.8954 20.1046 10 19 10C17.8954 10 17 10.8954 17 12C17 13.1046 17.8954 14 19 14C20.1046 14 21 13.1046 21 12Z"
                    fill="#666666"
                  />
                </svg>
              </Link>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default NotificationFeed;
