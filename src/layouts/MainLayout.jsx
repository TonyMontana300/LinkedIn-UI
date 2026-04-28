import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/layout/Navbar.jsx";
import { useState } from "react";
import { notifications as initialNotifications } from "../data/notification.js"

const MainLayout = () => {

  const formattedInitialNotifications = initialNotifications.map((item) => ({
    _id: "fake-" + item.id,
    sender: {
      name: item.user,
      profileImage: item.avatar,
    },
    type: item.type,
    text: item.text,
    message: item.message,
    time: item.time,
    createdAt: new Date(),
    isFake: true,
  }))
  const [notifications, setNotifications] = useState(formattedInitialNotifications);
  
  return (
    <div>
      <Navbar />
      <Outlet context={{ notifications, setNotifications }}/>
    </div>
  );
};

export default MainLayout;
